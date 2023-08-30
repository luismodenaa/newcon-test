import AttractionCard from "../AttractionCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAttraction } from "../../Interfaces/Attractions/Index";
import notfound from "../../assets/notfound.svg";
import loadingSvg from "../../assets/loading.svg";
import ModalAttraction from "../ModalAttraction";

const Attractions = () => {
  const [attractions, setAttractions] = useState<IAttraction[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<IAttraction>();

  const getAttractions = async () => {
    try {
      setLoading(true);
      const response = await api.get<IAttraction[]>("attractions", {
        params: {
          page: page,
          total: 8,
        },
      });

      setLoading(false);
      setAttractions(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAttractions();
  }, [page]);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        {loading ? (
          <img src={loadingSvg} alt="carregando..." width={100} height={100} />
        ) : attractions.length ? (
          <>
            <ul className="grid grid-cols-4 gap-4 p-6 rounded-lg h-[30rem]">
              {attractions?.map((attraction: IAttraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  selectAttraction={() => {
                    setOpenModal(true);
                    setSelectedAttraction(attraction);
                  }}
                />
              ))}
            </ul>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col mb-20">
            <img src={notfound} alt="não encontrado" width={200} height={200} />
            <p>Não encontramos pontos turísticos</p>
          </div>
        )}
        <div className="flex justify-center items-center gap-4">
          <button
            className="p-1"
            onClick={() => setPage(page <= 0 ? page : page - 1)}
          >
            <AiOutlineArrowLeft className="text-2xl" />
          </button>
          <button className="p-1" onClick={() => setPage(page + 1)}>
            <AiOutlineArrowRight className="text-2xl" />
          </button>
        </div>
        <p className="text-sm">Página atual: {page}</p>
      </div>
      {openModal && (
        <ModalAttraction
          attraction={selectedAttraction}
          closeModal={() => closeModal()}
          loadAttractions={() => getAttractions()}
        />
      )}
    </>
  );
};

export default Attractions;
