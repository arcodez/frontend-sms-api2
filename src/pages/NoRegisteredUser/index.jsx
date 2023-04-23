import { navigate } from "@reach/router";
import React from "react";

export const NoRegisteredUser = () => {
  return (
    <div style={{ color: "white", display: "grid", placeContent: "center" }}>
      <h1>Usuario No Autorizado</h1>
      <img src="/assets/img/noAuth.svg" width="300" alt="No autorizado" />
      <button onClick={() => navigate("/")}>Iniciar Sesion</button>
    </div>
  );
};
