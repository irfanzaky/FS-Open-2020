import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

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
  function handleSelectCountry({ country }) {
    console.log("this clicked from this country", country, country.name);
    setNewSearch(country.name);
  }

  const filteredCountries = countries.filter((countr) => countr.name.includes(newSearch));

  return (
    <div>
      <form>
        filter countries:
        <input value={newSearch} onChange={handleSearchChange} />
        <br />
      </form>

      <Country
        countries={filteredCountries}
        handleSelectCountry={handleSelectCountry}
        API_KEY={API_KEY}
      />
    </div>
  );
};

const Country = ({ countries, handleSelectCountry, API_KEY }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 0) {
    return <div>No country match the filter, specify another filter</div>;
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <div key={country.name}>
        {country.name}
        <button onClick={() => handleSelectCountry({ country })}>show</button>
      </div>
    ));
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

        <Weather country={countries[0].name} API_KEY={API_KEY} />
      </div>
    );
};

const Weather = ({ country, API_KEY }) => {
  const [weatherData, setWeatherData] = useState({
    request: { type: "City", query: "Singapore, Singapore", language: "en", unit: "m" },
    location: {
      name: "Singapore",
      country: "Singapore",
    },
    current: {
      observation_time: "05:09 AM",
      temperature: 31,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
      ],
      weather_descriptions: ["Partly cloudy"],
      wind_speed: 17,
    },
  });

  useEffect(getWeather, [country]);

  function getWeather() {
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country}`;
    console.log("effect onto", url);
    axios.get(url).then((response) => {
      console.log("promise fulfilled", response.data);
      console.log("setting up API_KEY into: ", API_KEY);
      setWeatherData(response.data);
    });
  }

  if ("temperature" in weatherData.current)
    return (
      <div>
        <h2>Weather in Helsinki</h2>
        <b>temperature:</b> {JSON.stringify(weatherData.current.temperature)}
        <br />
        <img
          src={weatherData.current.weather_icons}
          alt="weather Icon"
          width="100"
          height="100"
        ></img>
        <br />
        <b>wind:</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}
      </div>
    );
  else
    return (
      <div>
        <h2>Weather in Helsinki</h2>
        <h3>temperature: Loading...</h3>
      </div>
    );
};

export default App;
