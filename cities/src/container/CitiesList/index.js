import React from "react";
import QuantitiesCity from "../../components/QuantitiesCity";
import City from "../../components/City";

import "./index.css";

export default function citiesList({ cities, title }) {
  return (
    <div className="container-cities">
      <h2>{title}</h2>
      <QuantitiesCity qtyCities={cities} />
      <div className="container-list-cities">
        {cities.map((city) => {
          return <City city={city.name} postalCode={city.postal_code} />;
        })}
      </div>
    </div>
  );
}
