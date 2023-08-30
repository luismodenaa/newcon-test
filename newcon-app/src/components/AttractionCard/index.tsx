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
      <div className="flex gap-2">
        <p className="font-medium">Descrição:</p>
        <p>{attraction.description}</p>
      </div>
      <p>Endereço: {attraction.adress}</p>
      <p>Cidade: {attraction.city}</p>
      <p>Estado: {attraction.state}</p>
    </li>
  );
};

export default AttractionCard;
