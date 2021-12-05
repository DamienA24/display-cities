import React from "react";
import "./index.css";

export default function quantitiesCity({ qtyCities }) {
  return (
    <div
      className={`container-quantities-cities ${
        qtyCities.length > 0 ? "cities-ok" : "no-cities"
      }`}
    >
      <p>
        {qtyCities.length > 0
          ? `${qtyCities.length} villes correspondant au texte saisi`
          : "Aucune ville correspondant au texte saisi"}
      </p>
    </div>
  );
}
