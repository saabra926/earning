"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [city, setCity] = useState("");
  const [dikhao, setDikhao] = useState(null);
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const weather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=03ddc42f6b3946d485053718240810&q=${city}&aqi=no`
      );
      setDikhao(response.data);
      setError("");
    } catch (error) {
      setDikhao(null);
      setError("Invalid city name. Please check the spelling and try again.");
    }
  };

  return (
    <div>
      {/* SEO Enhancements */}
      <Head>
        <title>Weather App - Get the Latest Weather Info</title>
        <meta
          name="description"
          content="Check the current weather conditions for any city. Get temperature, humidity, and more with our easy-to-use Weather app."
        />
        <meta name="keywords" content="weather, weather app, current weather, temperature, humidity, forecast" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold mb-3">🌤️ Weather App</h1>
          <div className="input-group mb-3 w-100 w-md-50 mx-auto">
            <input
              value={city}
              onChange={handleCityChange}
              type="text"
              className="form-control"
              placeholder="Enter city name"
              aria-label="Enter city name"
            />
            <button onClick={weather} className="btn btn-primary" aria-label="Get Weather">
              Get Weather
            </button>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </div>

        {/* Display Weather Info */}
        {dikhao && (
          <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body text-center">
              <h3 className="card-title">
                {dikhao.location.name}, {dikhao.location.country}
              </h3>
              <h5 className="text-muted">{dikhao.current.condition.text}</h5>
              <img
                src={dikhao.current.condition.icon}
                alt="Weather icon"
                className="my-3"
                loading="lazy" // Lazy load the image for performance optimization
              />
              <p className="card-text">
                <strong>Temperature:</strong> {dikhao.current.temp_c}°C / {dikhao.current.temp_f}°F
              </p>
              <p className="card-text">
                <strong>Feels Like:</strong> {dikhao.current.feelslike_c}°C / {dikhao.current.feelslike_f}°F
              </p>
              <p className="card-text">
                <strong>Humidity:</strong> {dikhao.current.humidity}%
              </p>
              <p className="card-text">
                <strong>Local Time:</strong> {dikhao.location.localtime}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
