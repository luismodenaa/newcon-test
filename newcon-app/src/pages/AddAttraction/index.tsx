import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import {
  IAttraction,
  IAttractionAdd,
} from "../../Interfaces/Attractions/Index";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAttractionSchema } from "../../schemas/attraction";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAttractionPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAttractionAdd>({
    resolver: yupResolver(addAttractionSchema),
  });

  const navigate = useNavigate();

  const handleAddAttraction = async (data: IAttractionAdd) => {
    const loadingRequest = toast.loading("Carregando...");
    try {
      setLoading(true);
      await api.post<IAttraction>("attractions", data);

      toast.update(loadingRequest, {
        render: "Ponto turístico cadastrado com sucesso.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setLoading(false);
      navigate("/");
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
    <>
      <Header back={true} />
      <div className="flex items-center justify-center flex-col">
        <div className="p-6 rounded-lg border">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(handleAddAttraction)}
          >
            <h3 className="font-medium text-lg">Cadastro</h3>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Nome..."
                  className="border rounded-md p-2"
                  {...register("name")}
                />
                <span className="text-red-600 text-sm">
                  {errors.name?.message}
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Endereço..."
                  className="border rounded-md p-2"
                  {...register("adress")}
                />
                <span className="text-red-600 text-sm">
                  {errors.adress?.message}
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Cidade..."
                  className="border rounded-md p-2"
                  {...register("city")}
                />
                <span className="text-red-600 text-sm">
                  {errors.city?.message}
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Estado..."
                  className="border rounded-md p-2"
                  {...register("state")}
                />
                <span className="text-red-600 text-sm">
                  {errors.state?.message}
                </span>
              </div>
            </div>
            <div className="flex max-w-full flex-col">
              <input
                type="text"
                placeholder="Descrição..."
                className="border rounded-md p-2 w-full"
                {...register("description")}
              />
              <span className="text-red-600 text-sm">
                {errors.description?.message}
              </span>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="bg-cyan-600 text-white hover:bg-cyan-700 duration-300 cursor-pointer border rounded-md p-2 w-full"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAttractionPage;
