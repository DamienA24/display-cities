import React from "react";
import "./index.css";

export default function City({ city, postalCode }) {
  return (
    <div className={`container-city`}>
      <p className="city">{city}</p>
      <p className="postalCode">{postalCode}</p>
    </div>
  );
}
