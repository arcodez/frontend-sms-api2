import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Context, Provider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
