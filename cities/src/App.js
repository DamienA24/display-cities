import React, { useEffect, useState } from "react";

import CitiesList from "./container/CitiesList/index.js";
import SearchBar from "./container/SearchBar/index.js";
import axios from "axios";
import "./App.css";

function App() {
  const [citiesMetropole, setCitiesMetropole] = useState([]);
  const [citiesDom, setCitiesDom] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      fetchCities();
    }
  }, [search]);

  async function fetchCities() {
    try {
      const response = await axios.get(`/api/cities/${search}`);
      setCitiesMetropole(response.data.data.metropole);
      setCitiesDom(response.data.data.dom);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="main-container-searchBar">
        <SearchBar setSearch={setSearch} />
      </div>
      <div className="main-container-cities">
        <CitiesList cities={citiesMetropole} title={"Ville Métropole"} />
        <CitiesList cities={citiesDom} title={"Ville outre-mer"} />
      </div>
    </div>
  );
}

export default App;
