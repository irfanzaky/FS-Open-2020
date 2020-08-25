import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  function handleSearchChange(event) {
    console.log(event.target.value, filteredCountries);
    setNewSearch(event.target.value);
  }

  const filteredCountries = countries.filter((countr) => countr.name.includes(newSearch));

  return (
    <div>
      <Filter
        newSearch={newSearch}
        filteredCountries={filteredCountries}
        handleSearchChange={handleSearchChange}
      />
    </div>
  );
};

const Filter = ({ newSearch, handleSearchChange, filteredCountries }) => (
  <div>
    <form>
      filter countries:
      <input value={newSearch} onChange={handleSearchChange} />
      <br />
    </form>

    <Country countries={filteredCountries} />
  </div>
);

const Country = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 0) {
    return <div>No country match the filter, specify another filter</div>;
  } else if (countries.length > 1) {
    return countries.map((country) => <div key={country.name}>{country.name}</div>);
  } else
    return (
      <div>
        <h1>{countries[0].name}</h1>
        <p>capital {countries[0].capital}</p>
        <p>population {countries[0].population}</p>

        <h2>languages</h2>
        <ul>
          {countries[0].languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>

        <img
          src={countries[0].flag}
          alt={`${countries[0].name} flag`}
          width="300"
          height="200"
        ></img>
      </div>
    );
};

export default App;
