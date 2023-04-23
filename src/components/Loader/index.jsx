import React, { useEffect } from "react";
import "./style.css";

export function Loader() {
  useEffect(() => {
    window.onload = function () {
      let contenedor = document.getElementById("contenido-carga");

      contenedor.style.visibility = "hidden";
      contenedor.style.opacity = "0";
    };
  }, []);

  return (
    <div className="padre-loader">
      <div className="loader"></div>
    </div>
  );
}
