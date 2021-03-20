import React, { useState } from 'react';

const api = {
  key: "3403c007b2eb0fd7304c49452459757f",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.baseURL}weather?q=${query}&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');

          console.log(result);
        })
    }
  }

  return (
    <div className="app">
      <main>
        <h1>Weather App</h1>

        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter a City" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>

        {(typeof weather.main != "undefined") ? (
        <div className="current-weather">
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{new Date().toDateString()}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°F</div>
          </div>
        </div>
        ) : ('')}

      </main>
    </div>
  );
}

export default App;
