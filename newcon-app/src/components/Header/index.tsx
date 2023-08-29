import logo from "../../assets/newcon.png";
import { Link } from "react-router-dom";

const Header = ({ back }: { back: boolean }) => {
  return (
    <header className="flex items-center justify-between p-16">
      <img src={logo} width={100} height={100} alt="newcon-logo" />
      {back ? (
        <Link
          to={"/"}
          className="bg-cyan-600 py-4 px-16 rounded-md text-white hover:bg-cyan-700 duration-300 cursor-pointer"
        >
          Voltar
        </Link>
      ) : (
        <Link
          to={"/cadastrar"}
          className="bg-cyan-600 py-4 px-4 rounded-md text-white hover:bg-cyan-700 duration-300 cursor-pointer"
        >
          Cadastrar ponto turístico
        </Link>
      )}
    </header>
  );
};

export default Header;
