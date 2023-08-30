import Modal from "react-modal";
import {
  IAttraction,
  IAttractionUpdate,
} from "../../Interfaces/Attractions/Index";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editAttractionSchema } from "../../schemas/attraction";
import { AiOutlineClose } from "react-icons/ai";

const ModalAttraction = ({
  attraction,
  closeModal,
  loadAttractions,
}: {
  attraction: IAttraction | undefined;
  closeModal: () => void;
  loadAttractions: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editAttractionSchema),
  });

  const handleUpdateAttraction = async (data: IAttractionUpdate | object) => {
    const loadingRequest = toast.loading("Carregando...");
    try {
      setLoading(true);
      await api.put<IAttraction>(`attractions/${attraction?.id}`, data);

      toast.update(loadingRequest, {
        render: "Ponto turístico editado com sucesso.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setLoading(false);
      setTimeout(() => {
        closeModal();
      }, 300);
      loadAttractions();
    } catch (error) {
      setLoading(false);
      toast.update(loadingRequest, {
        render: "Ops... Parece que ocorreu um erro, tente novamente",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const handleDeleteAttraction = async (id: number | undefined) => {
    const loadingRequest = toast.loading("Carregando...");
    try {
      setLoading(true);
      await api.delete<IAttraction>(`attractions/${id}`);

      toast.update(loadingRequest, {
        render: "Ponto turístico deletado com sucesso.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setLoading(false);
      setTimeout(() => {
        closeModal();
      }, 300);
      loadAttractions();
    } catch (error) {
      setLoading(false);
      toast.update(loadingRequest, {
        render: "Ops... Parece que ocorreu um erro, tente novamente",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <Modal
      isOpen={true}
      style={{
        overlay: {
          backgroundColor: "rgba(17, 17, 17, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
        },
      }}
      closeTimeoutMS={300}
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleUpdateAttraction)}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-normal text-lg">
            Detalhes de -{" "}
            <span className="font-semibold">{attraction?.name}</span>
          </h3>
          <button onClick={closeModal} className="p-2">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Nome</label>
            <input
              type="text"
              placeholder="Nome..."
              defaultValue={attraction?.name}
              className="border rounded-md p-2"
              {...register("name")}
            />
            <span className="text-red-600 text-sm">{errors.name?.message}</span>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Endereço</label>
            <input
              type="text"
              placeholder="Endereço..."
              className="border rounded-md p-2"
              defaultValue={attraction?.adress}
              {...register("adress")}
            />
            <span className="text-red-600 text-sm">
              {errors.adress?.message}
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Cidade</label>
            <input
              type="text"
              placeholder="Cidade..."
              className="border rounded-md p-2"
              defaultValue={attraction?.city}
              {...register("city")}
            />
            <span className="text-red-600 text-sm">{errors.city?.message}</span>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Estado</label>
            <input
              type="text"
              placeholder="Estado..."
              className="border rounded-md p-2"
              defaultValue={attraction?.state}
              {...register("state")}
            />
            <span className="text-red-600 text-sm">
              {errors.state?.message}
            </span>
          </div>
        </div>
        <div className="flex max-w-full flex-col">
          <label className="text-sm font-medium">Descrição</label>
          <input
            type="text"
            placeholder="Descrição..."
            className="border rounded-md p-2 w-full"
            defaultValue={attraction?.description}
            {...register("description")}
          />
          <span className="text-red-600 text-sm">
            {errors.description?.message}
          </span>
        </div>
        <div className="flex ">
          <button
            type="button"
            onClick={() => handleDeleteAttraction(attraction?.id)}
            disabled={loading}
            className="bg-red-600 text-white hover:bg-red-800 duration-300 cursor-pointer border rounded-md p-2 w-1/2"
          >
            Excluir
          </button>
          <button
            disabled={loading}
            type="submit"
            className="bg-cyan-600 text-white hover:bg-cyan-700 duration-300 cursor-pointer border rounded-md p-2 w-1/2"
          >
            Editar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAttraction;
