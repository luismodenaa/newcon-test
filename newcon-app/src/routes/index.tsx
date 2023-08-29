import { Routes, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import AddAttractionPage from "../pages/AddAttraction";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/cadastrar" element={<AddAttractionPage />} />
    </Routes>
  );
};

export default RoutesMain;
