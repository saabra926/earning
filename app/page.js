"use client";

import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value.trim());
  };

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=03ddc42f6b3946d485053718240810&q=${city}&days=3&aqi=no`
      );
      setWeatherData(response.data);
      setError("");
    } catch (error) {
      setWeatherData(null);
      setError("City not found. Check spelling or try another location.");
    } finally {
      setLoading(false);
    }
  };

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "WeatherNow",
    "description": "Real-time weather forecasts and climate insights",
    "applicationCategory": "WeatherApplication"
  };

  return (
    <>
      <Head>
        <title>WeatherNow | Live Forecasts & Climate Data (2024)</title>
        <meta
          name="description"
          content="Accurate real-time weather forecasts for any city. Check temperature, humidity, wind speed, and expert weather tips. Updated every hour."
        />
        <meta
          name="keywords"
          content="live weather, weather forecast today, humidity levels, wind speed, local climate, weather alerts"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta property="og:title" content="WeatherNow: Instant Weather Updates" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exploreweather.vercel.app/" />
        <meta property="og:image" content="/weather-cover.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="container py-4">
        {/* Hero Section */}
        <section className="text-center mb-4 py-3 bg-light rounded">
          <h1 className="display-5 fw-bold text-primary mb-2">🌤️ WeatherNow</h1>
          <p className="lead text-muted mb-3">
            Real-time weather updates for <strong>{weatherData?.location?.name || "your city"}</strong>.
            Trusted by travelers and locals since 2025.
          </p>

          {/* Search Box (Optimized for Mobile) */}
          <div className="d-flex justify-content-center mb-3">
            <div className="input-group" style={{ maxWidth: "500px" }}>
              <input
                value={city}
                onChange={handleCityChange}
                type="text"
                className="form-control form-control-lg"
                placeholder="E.g., New York, Tokyo"
                aria-label="City name"
                onKeyPress={(e) => e.key === "Enter" && fetchWeather()}
              />
              <button
                onClick={fetchWeather}
                className="btn btn-primary px-4"
                disabled={loading}
                aria-label="Get weather"
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </div>
          {error && <div className="alert alert-danger mx-auto" style={{ maxWidth: "500px" }}>{error}</div>}
        </section>

      {/* Current Weather Section */}
{weatherData && (
  <section className="card shadow-sm border rounded p-4 mb-5">
    <div className="row align-items-center">
      {/* Left Column: Icon & Temp */}
      <div className="col-md-4 text-center">
        <img
          src={weatherData.current.condition.icon.replace("64x64", "128x128")}
          alt={weatherData.current.condition.text}
          width="100"
          height="100"
          loading="lazy"
        />
        <p className="h2 my-2">{weatherData.current.temp_c}°C</p>
        <p className="text-muted">Feels Like: {weatherData.current.feelslike_c}°C</p>
        <p className="small text-muted">{weatherData.current.condition.text}</p>
      </div>

      {/* Right Column: Weather Info */}
      <div className="col-md-8">
        <div className="row">
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>📍 City</strong></p>
            <p>{weatherData.location.name}</p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>🌍 province</strong></p>
            <p>{weatherData.location.region}</p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>🌐 Country</strong></p>
            <p>{weatherData.location.country}</p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>🌡️ Humidity</strong></p>
            <p>{weatherData.current.humidity}%</p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>💨 Wind</strong></p>
            <p>{weatherData.current.wind_kph} kph</p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <p className="mb-1"><strong>🕒 Local Time</strong></p>
            <p>{weatherData.location.localtime}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}








        {/* Educational Content (SEO-Optimized) */}
        <section className="mb-5">
          <h2 className="h3 text-center mb-4">Weather Education Center</h2>
          <div className="row g-4">
            {[
              {
                title: "☔ Humidity Guide",
                content: "Levels above 60% feel oppressive, while below 30% cause dryness. Ideal range: 30-50%."
              },
              {
                title: "🌡️ 'Feels Like' Explained",
                content: "Combines temperature + wind/ humidity. A 25°C day with 80% humidity feels like 28°C!"
              },
              {
                title: "⚠️ Wind Safety",
                content: "20-40 kph: Umbrella risky. 40+ kph: Avoid outdoor activities."
              },
              {
                title: "⏳ Forecast Accuracy",
                content: "Morning/evening updates are most reliable due to fresh satellite data."
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 card-title">{item.title}</h3>
                    <p className="card-text small">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Linking Hub (SEO Booster) */}
        <section className="bg-primary text-white rounded p-4 mb-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="h4 mb-3">Explore More Weather Resources</h2>
              <p className="mb-0">
                Dive into <Link href="/blogs" className="text-white fw-bold">expert blogs</Link>,
                seasonal <Link href="/" className="text-white fw-bold">extended forecasts</Link>,
                and <Link href="/faq" className="text-white fw-bold">disaster preparedness guides</Link>.
              </p>
            </div>
            <div className="col-md-4 text-center mt-3 mt-md-0">
              <Link href="/topstories" className="btn btn-light btn-sm">
                Browse Articles →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Navigation (Mobile-Optimized) */}
        <nav className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <Link href="/about" className="btn btn-outline-primary px-3 py-2">About Us</Link>
          <Link href="/contact" className="btn btn-outline-primary px-3 py-2">Contact</Link>
          <Link href="/privacy" className="btn btn-outline-secondary px-3 py-2">Privacy</Link>
          <Link href="/terms" className="btn btn-outline-secondary px-3 py-2">Terms</Link>
        </nav>
      </main>
    </>
  );
}
