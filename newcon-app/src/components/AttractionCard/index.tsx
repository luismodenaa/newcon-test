import { IAttraction } from "../../Attractions/Index";

const AttractionCard = ({ attraction }: { attraction: IAttraction }) => {
  return (
    <li className="bg-gray-300 p-6 rounded-lg hover:bg-gray-400 duration-300 cursor-pointer">
      <h3 className="text-lg font-semibold">{attraction.name}</h3>
      <div className="flex gap-2">
        <p className="font-medium">Descrição:</p>
        <p>{attraction.description}</p>
      </div>
      <p>Rua e Número: {attraction.adress}</p>
      <p>Cidade: {attraction.city}</p>
      <p>Estado: {attraction.state}</p>
    </li>
  );
};

export default AttractionCard;
