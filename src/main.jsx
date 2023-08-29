import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import background from "./assets/img/bg.png";
import "./assets/styles/index.css";
import "./assets/styles/header.css";
import "./assets/styles/mainGame.css";
import "./assets/styles/startEndScreens.css";

document.getElementById("root",).style.background = `#00000090 url(${background})`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
