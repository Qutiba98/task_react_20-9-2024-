import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState("New York"); 
  const [weatherData, setWeatherData] = useState(null);

  const cities = [
    { name: "New York", id: 5128581 },
    { name: "London", id: 2643743 },
    { name: "Tokyo", id: 1850147 },
  ];

  const fetchWeather = async (cityId) => {
    const API_KEY = "215bb5c43413234f97b409021c0dbd41"; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const cityId = cities.find((c) => c.name === city).id;
    fetchWeather(cityId);
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Weather App</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <label htmlFor="citySelect">Select a city:</label>
            <select
              id="citySelect"
              value={city}
              onChange={handleCityChange}
              className="form-control"
            >
              {cities.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {weatherData ? (
            <div className="weather-info mt-4 p-3 border rounded">
              <h2 className="text-center">{weatherData.name}</h2>
              <p>
                Temperature: <strong>{weatherData.main.temp} °C</strong>
              </p>
              <p>
                Weather: <strong>{weatherData.weather[0].description}</strong>
              </p>
              <p>
                Humidity: <strong>{weatherData.main.humidity}%</strong>
              </p>
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
