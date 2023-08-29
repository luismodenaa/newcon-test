import AttractionCard from "../AttractionCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAttraction } from "../../Attractions/Index";
import notfound from "../../assets/notfound.svg";
import loadingSvg from "../../assets/loading.svg";

const Attractions = () => {
  const [attractions, setAttractions] = useState<IAttraction[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttractions = async () => {
      try {
        setLoading(true);
        const response = await api.get<IAttraction[]>("Attractions", {
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
    getAttractions();
  }, [page]);

  return (
    <div className="flex items-center justify-center flex-col">
      {loading ? (
        <img src={loadingSvg} alt="carregando..." width={100} height={100} />
      ) : attractions.length ? (
        <>
          <ul className="grid grid-cols-4 gap-4 p-6 rounded-lg h-[30rem]">
            {attractions?.map((attraction: IAttraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </ul>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col mb-20">
          <img src={notfound} alt="não encontrado" width={200} height={200} />
          <p>Parece que você não possui pontos turísticos cadastrados</p>
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
  );
};

export default Attractions;
