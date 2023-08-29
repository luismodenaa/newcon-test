import Attractions from "../../components/Attractions";
import Header from "../../components/Header";

const InitialPage = () => {
  return (
    <div>
      <Header back={false} />
      <Attractions />
    </div>
  );
};

export default InitialPage;
