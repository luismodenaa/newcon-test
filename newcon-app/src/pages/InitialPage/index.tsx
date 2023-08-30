import { useState } from "react";
import Attractions from "../../components/Attractions";
import Header from "../../components/Header";

const InitialPage = () => {
  const [search, setSearch] = useState("");
  const [handleSearch, setHandleSearch] = useState<boolean>(false);

  return (
    <div>
      <Header
        back={false}
        setSearch={setSearch}
        setHandleSearch={setHandleSearch}
        handleSearch={handleSearch}
      />
      <Attractions search={search} handleSearch={handleSearch} />
    </div>
  );
};

export default InitialPage;
