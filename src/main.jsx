import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FileProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileProvider>
    <App />
  </FileProvider>
);
