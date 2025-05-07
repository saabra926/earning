"use client";

import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

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
      <Head>
        <title>WeatherNow | Real-Time Weather Info & Forecast</title>
        <meta
          name="description"
          content="WeatherNow provides accurate, real-time weather updates. Check current temperature, humidity, and forecast by city. Simple, fast, and free."
        />
        <meta
          name="keywords"
          content="weather, weather forecast, current temperature, real-time weather, humidity, weather app, climate updates"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container py-5">
        <section className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">🌍 WeatherNow</h1>
          <p className="lead text-muted">
            Get instant, accurate weather forecasts for any city in the world. Powered by trusted data sources.
          </p>
        </section>

        {/* Search Box */}
        <section className="text-center mb-4">
          <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
            <input
              value={city}
              onChange={handleCityChange}
              type="text"
              className="form-control"
              placeholder="Enter city name"
              aria-label="City name"
            />
            <button onClick={weather} className="btn btn-primary">
              Get Weather
            </button>
          </div>
          {error && <p className="text-danger mt-2">{error}</p>}
        </section>

        {/* Weather Display */}
        {dikhao && (
          <section className="card shadow mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <div className="card-body text-center">
              <h3 className="card-title mb-1">
                {dikhao.location.name}, {dikhao.location.country}
              </h3>
              <p className="text-muted">{dikhao.current.condition.text}</p>
              <img src={dikhao.current.condition.icon} alt="Weather icon" className="my-3" loading="lazy" />
              <div className="row justify-content-center">
                <div className="col-md-6 text-start">
                  <p><strong>Temperature:</strong> {dikhao.current.temp_c}°C / {dikhao.current.temp_f}°F</p>
                  <p><strong>Feels Like:</strong> {dikhao.current.feelslike_c}°C / {dikhao.current.feelslike_f}°F</p>
                  <p><strong>Humidity:</strong> {dikhao.current.humidity}%</p>
                  <p><strong>Wind Speed:</strong> {dikhao.current.wind_kph} kph</p>
                  <p><strong>Local Time:</strong> {dikhao.location.localtime}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Weather Tips & Educational Content */}
        <section className="mb-5">
          <h2 className="text-secondary mb-3">Weather Insights & Tips</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">☔ How to Interpret Humidity Levels</h5>
                  <p className="card-text">
                    Humidity above <strong>60%</strong> can feel muggy, while below <strong>30%</strong> may cause dry skin. 
                    Ideal comfort ranges between <strong>30-50%</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">🌡️ Understanding "Feels Like" Temperature</h5>
                  <p className="card-text">
                    This accounts for wind chill or heat index. A 20°C day with strong winds might feel like 15°C!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">🌬️ Wind Speed Safety Guide</h5>
                  <p className="card-text">
                    <strong>0-20 kph</strong>: Calm<br />
                    <strong>20-40 kph</strong>: Umbrella use risky<br />
                    <strong>40+ kph</strong>: Potential travel disruptions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">⏱️ Best Time to Check Forecasts</h5>
                  <p className="card-text">
                    For accuracy, check in the <strong>early morning</strong> or <strong>late evening</strong> when weather models are freshly updated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-5">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="text-primary">Need Detailed Forecasts?</h3>
              <p>Explore our <Link href="/topstories" className="text-decoration-none">Top Stories</Link> for seasonal trends, disaster preparedness, and more!</p>
              <Link href="/blogs" className="btn btn-primary mt-2">Read Weather  Blogs</Link>
            </div>
          </div>
        </section>

        {/* Internal Links for SEO */}
        <section className="text-center">
          <Link href="/about" className="btn btn-outline-primary me-2">About Us</Link>
          <Link href="/privacy" className="btn btn-outline-secondary">Privacy Policy</Link>
        </section>
      </main>
    </div>
  );
}