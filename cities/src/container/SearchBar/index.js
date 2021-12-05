import React, { useState } from "react";
import "./index.css";

export default function SearchBar({ setSearch }) {
  const [search, setSearchState] = useState("");

  const handleChange = (e) => {
    setSearchState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  return (
    <div className="container-search-bar">
      <p>Je recherche...</p>
      <div className="container-input">
        <input
          type="text"
          placeholder="...ville, code postal"
          onChange={handleChange}
          onBlur={handleSubmit}
        />
      </div>
    </div>
  );
}
