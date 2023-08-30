import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./input.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        theme={"light"}
        autoClose={3000}
        style={{ color: "black" }}
        limit={3}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
