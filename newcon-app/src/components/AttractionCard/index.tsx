import { IAttraction } from "../../Interfaces/Attractions/Index";

const AttractionCard = ({
  attraction,
  selectAttraction,
}: {
  attraction: IAttraction;
  selectAttraction: () => void;
}) => {
  return (
    <li
      className="bg-gray-300 p-6 rounded-lg hover:bg-gray-400 duration-300 cursor-pointer"
      onClick={() => selectAttraction()}
    >
      <h3 className="text-lg font-semibold">{attraction.name}</h3>
      <div className="flex gap-1">
        <p className="font-medium ">Descrição:</p>
        <p className="w-3/4 break-words">{attraction.description}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-medium">Endereço:</p>
        <p className="w-3/4 break-words">{attraction.adress}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-medium">Cidade:</p>
        <p className="w-3/4 break-words">{attraction.city}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-medium">Estado:</p>
        <p className="w-3/4 break-words">{attraction.state}</p>
      </div>
    </li>
  );
};

export default AttractionCard;
