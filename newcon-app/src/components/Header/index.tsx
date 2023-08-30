import logo from "../../assets/newcon.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  back,
  setSearch,
  setHandleSearch,
  handleSearch,
}: {
  back: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  setHandleSearch: Dispatch<SetStateAction<boolean>>;
  handleSearch: boolean;
}) => {
  return (
    <header className="flex items-center justify-around p-16">
      <img src={logo} width={100} height={100} alt="newcon-logo" />
      {!back && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border p-2 px-6 rounded-md bg-slate-100 "
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar por nome, cidade..."
          />
          <button
            onClick={() => setHandleSearch(!handleSearch)}
            className="p-3 bg-slate-300 rounded-md"
          >
            <BsSearch />
          </button>
        </div>
      )}
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
