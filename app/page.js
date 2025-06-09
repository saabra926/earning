"use client";
import "./page.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("celsius");
  const [background, setBackground] = useState("/default.jpg");
  const [savedLocations, setSavedLocations] = useState([]);
  const [showHourly, setShowHourly] = useState(false);
  const [activeTab, setActiveTab] = useState("current");

  // Load saved locations from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedLocations")) || [];
    setSavedLocations(saved);

    // Load last searched city if available
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      setCity(lastCity);
      fetchWeather(lastCity);
    }
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value.trim());
  };

  const fetchWeather = async (cityToFetch = city) => {
    if (!cityToFetch) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=03ddc42f6b3946d485053718240810&q=${cityToFetch}&days=5&aqi=no&alerts=yes`
      );
      setWeatherData(response.data);
      setError("");
      updateBackground(response.data.current.condition.code);
      localStorage.setItem("lastCity", cityToFetch);
      setCity("")
    } catch (error) {
      setWeatherData(null);
      setError("City not found. Check spelling or try another location.");
    } finally {
      setLoading(false);
    }
  };

  const updateBackground = (weatherCode) => {
    const backgrounds = {
      sunny: "/sunny.jpg",
      rainy: "/rainy.jpg",
      cloudy: "/cloudy.jpg",
      snowy: "/snowy.jpg",
      default: "/default.jpg"
    };

    let bg = backgrounds.default;
    if (weatherCode === 1000) bg = backgrounds.sunny;
    else if (weatherCode > 1000 && weatherCode < 1030) bg = backgrounds.cloudy;
    else if (weatherCode >= 1063 && weatherCode <= 1201) bg = backgrounds.rainy;
    else if (weatherCode >= 1219 && weatherCode <= 1225) bg = backgrounds.snowy;

    setBackground(bg);
  };

  const toggleUnit = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  };

  const saveLocation = () => {
    if (!weatherData) return;

    const newLocation = {
      name: weatherData.location.name,
      region: weatherData.location.region,
      country: weatherData.location.country
    };

    // Check if location already exists
    if (savedLocations.some(loc =>
      loc.name === newLocation.name &&
      loc.region === newLocation.region
    )) {
      return;
    }

    const updatedLocations = [...savedLocations, newLocation];
    setSavedLocations(updatedLocations);
    localStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
  };

  const removeLocation = (index) => {
    const updatedLocations = savedLocations.filter((_, i) => i !== index);
    setSavedLocations(updatedLocations);
    localStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
  };

  const getTemperature = (tempC, tempF) => {
    return unit === "celsius" ? `${tempC}°C` : `${tempF}°F`;
  };

  const getWindSpeed = (kph) => {
    return unit === "celsius" ? `${kph} kph` : `${(kph * 0.621371).toFixed(1)} mph`;
  };

  const getTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ChocoWeather",
    "description": "Delicious weather forecasts with chocolate-themed interface",
    "applicationCategory": "WeatherApplication"
  };

  return (
    <>
      <main className="container py-4">
        {/* Hero Section */}
        <section
          className="text-center mb-4 py-4 rounded hero-section"
          style={{ background: `url(${background})`, backgroundSize: 'cover' }}
          aria-label="Weather search section"
        >
          <div className="p-4 hero-overlay">
            <h1 className="display-5 fw-bold text-creme mb-2">🍫 ChocoWeather</h1>
            <p className="lead text-creme mb-3">
              Sweet weather forecasts for <strong className="text-warning">{weatherData?.location?.name || "your city"}</strong>
            </p>

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
                  onClick={() => fetchWeather()}
                  className="btn btn-primary px-4"
                  disabled={loading}
                  aria-label="Get weather"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Loading...
                    </>
                  ) : "Search"}
                </button>
              </div>
            </div>
            {error && (
              <div className="alert alert-danger mx-auto" style={{ maxWidth: "500px" }} role="alert">
                {error}
              </div>
            )}
          </div>
        </section>

        {/* Main Content */}
        <div className="row g-3">
          {/* Left Sidebar - Saved Locations */}
          <div className="col-lg-3 order-lg-1">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-chocolate-medium text-creme">
                <h2 className="h5 mb-0">Saved Locations</h2>
              </div>
              <div className="card-body">
                {savedLocations.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {savedLocations.map((loc, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-link text-start p-0 border-0 bg-transparent flex-grow-1"
                          onClick={() => {
                            setCity(loc.name);
                            fetchWeather(loc.name);
                          }}
                          aria-label={`View weather for ${loc.name}`}
                        >
                          {loc.name}, {loc.region}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeLocation(index)}
                          aria-label={`Remove ${loc.name} from saved locations`}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-3">
                    <p className="text-muted">No saved locations yet</p>
                    {weatherData && (
                      <button
                        className="btn btn-sm btn-primary mt-2"
                        onClick={saveLocation}
                        aria-label="Save current location"
                      >
                        Save Current Location
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>


          </div>

          {/* Main Weather Content */}
          <div className="col-lg-6 order-lg-2">
            {weatherData ? (
              <>
                {/* Weather Tabs */}
                <ul className="nav nav-tabs mb-3">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'current' ? 'active' : ''}`}
                      onClick={() => setActiveTab('current')}
                    >
                      Current Weather
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'forecast' ? 'active' : ''}`}
                      onClick={() => setActiveTab('forecast')}
                    >
                      3-Day Forecast
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'hourly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('hourly')}
                    >
                      Hourly Forecast
                    </button>
                  </li>
                  {weatherData.alerts.alert.length > 0 && (
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'alerts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('alerts')}
                      >
                        Alerts
                      </button>
                    </li>
                  )}
                </ul>

                {/* Current Weather Tab */}
                {activeTab === 'current' && (
                  <div className="weather-card card shadow-sm rounded p-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h2 className="h4 mb-0">
                        {weatherData.location.name}, {weatherData.location.country}
                      </h2>
                      <div>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={saveLocation}
                          aria-label="Save this location"
                        >
                          <i className="bi bi-bookmark"></i> Save
                        </button>
                        <div className="d-flex">
                          <button
                            className="btn btn-sm border-dark me-2"
                            onClick={toggleUnit}
                            aria-label={`Switch to ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`}
                          >
                            {unit === "celsius" ? "°F" : "°C"}
                          </button>
                        </div>
                        <span className="text-muted">
                          {new Date(weatherData.location.localtime).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-4 text-center">
                        <img
                          src={weatherData.current.condition.icon.replace("64x64", "128x128")}
                          alt={weatherData.current.condition.text}
                          width="100"
                          height="100"
                          loading="lazy"
                        />
                        <p className="display-4 my-2 fw-bold">
                          {getTemperature(weatherData.current.temp_c, weatherData.current.temp_f)}
                        </p>
                        <p className="text-muted">Feels Like: {getTemperature(weatherData.current.feelslike_c, weatherData.current.feelslike_f)}</p>
                        <p className="small">{weatherData.current.condition.text}</p>
                      </div>

                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>📍 Region</strong></p>
                            <p>{weatherData.location.region}</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>🌡️ Humidity</strong></p>
                            <p>{weatherData.current.humidity}%</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>💨 Wind</strong></p>
                            <p>{getWindSpeed(weatherData.current.wind_kph)}</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>🌅 Sunrise</strong></p>
                            <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>🌇 Sunset</strong></p>
                            <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>☁️ Cloud Cover</strong></p>
                            <p>{weatherData.current.cloud}%</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>👁️ Visibility</strong></p>
                            <p>{weatherData.current.vis_km} km</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>💧 Dew Point</strong></p>
                            <p>{getTemperature(weatherData.current.dewpoint_c, weatherData.current.dewpoint_f)}</p>
                          </div>
                          <div className="col-6 col-md-4 mb-3">
                            <p className="mb-1"><strong>🕒 Local Time</strong></p>
                            <p>{getTime(weatherData.location.localtime)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5-Day Forecast Tab */}
                {activeTab === 'forecast' && (
                  <div className="weather-card card shadow-sm rounded p-4 mb-4">
                    <h2 className="h4 mb-4">5-Day Forecast for {weatherData.location.name}</h2>
                    <div className="row g-3">
                      {weatherData.forecast.forecastday.map((day, index) => (
                        <div key={index} className="col-12">
                          <div className="card p-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h3 className="h5 mb-0">
                                {new Date(day.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </h3>
                              <div>
                                <span className="fw-bold">{day.day.maxtemp_c}°</span> /
                                <span> {day.day.mintemp_c}°</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <img
                                src={day.day.condition.icon}
                                alt={day.day.condition.text}
                                width="40"
                                height="40"
                                loading="lazy"
                                className="me-3"
                              />
                              <span>{day.day.condition.text}</span>
                            </div>
                            <div className="row">
                              <div className="col-6 col-md-3">
                                <p className="small mb-1"><strong>🌡️ Avg Temp</strong></p>
                                <p className="small">{day.day.avgtemp_c}°C</p>
                              </div>
                              <div className="col-6 col-md-3">
                                <p className="small mb-1"><strong>💨 Max Wind</strong></p>
                                <p className="small">{day.day.maxwind_kph} kph</p>
                              </div>
                              <div className="col-6 col-md-3">
                                <p className="small mb-1"><strong>💧 Humidity</strong></p>
                                <p className="small">{day.day.avghumidity}%</p>
                              </div>
                              <div className="col-6 col-md-3">
                                <p className="small mb-1"><strong>☔ Rain Chance</strong></p>
                                <p className="small">{day.day.daily_chance_of_rain}%</p>
                              </div>
                            </div>
                            <div className="mt-3">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => {
                                  setActiveTab('hourly');
                                  setShowHourly(true);
                                }}
                              >
                                View Hourly Forecast
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hourly Forecast Tab */}
                {activeTab === 'hourly' && (
                  <div className="weather-card card shadow-sm rounded p-4 mb-4">
                    <h2 className="h4 mb-4">24-Hour Forecast for {weatherData.location.name}</h2>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Temp</th>
                            <th>Condition</th>
                            <th>Rain</th>
                            <th>Wind</th>
                            <th>Humidity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {weatherData.forecast.forecastday[0].hour.map((hour, index) => (
                            <tr key={index}>
                              <td>{getTime(hour.time)}</td>
                              <td>{hour.temp_c}°C</td>
                              <td>
                                <img
                                  src={hour.condition.icon}
                                  alt={hour.condition.text}
                                  width="24"
                                  height="24"
                                  loading="lazy"
                                  className="me-1"
                                />
                                {hour.condition.text}
                              </td>
                              <td>{hour.chance_of_rain}%</td>
                              <td>{hour.wind_kph} kph</td>
                              <td>{hour.humidity}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Weather Alerts Tab */}
                {activeTab === 'alerts' && weatherData.alerts.alert.length > 0 && (
                  <div className="weather-card card shadow-sm rounded p-4 mb-4">
                    <h2 className="h4 mb-4">Weather Alerts for {weatherData.location.name}</h2>
                    <div className="alert alert-warning">
                      <h3 className="h5">⚠️ Active Alerts</h3>
                      {weatherData.alerts.alert.map((alert, index) => (
                        <div key={index} className="mb-3">
                          <h4 className="h6">{alert.headline}</h4>
                          <p><strong>Effective:</strong> {new Date(alert.effective).toLocaleString()}</p>
                          <p><strong>Expires:</strong> {new Date(alert.expires).toLocaleString()}</p>
                          <p>{alert.desc}</p>
                          <p><strong>Instructions:</strong> {alert.instruction}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Weather Insights */}
                <div className="card mb-4 shadow-sm">
                  <div className="card-header bg-chocolate-medium text-creme">
                    <h2 className="h5 mb-0">Weather Insights</h2>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      {[
                        {
                          title: "🍫 Chocolate Weather Tips",
                          content: "Dark chocolate melts at 93°F (34°C) - store carefully in hot weather! Milk chocolate melts at 86°F (30°C), while white chocolate melts at 82°F (28°C). Consider chocolate storage when temperatures rise above these points."
                        },
                        {
                          title: "☕ Best Brew Times",
                          content: "Atmospheric pressure affects coffee flavor - brew when pressure is rising for best taste. High pressure systems typically bring clearer skies and better coffee extraction. Try brewing during rising barometric pressure for optimal flavor."
                        },
                        {
                          title: "🧥 Clothing Guide",
                          content: "Layer with breathable fabrics when temperature fluctuates more than 10°C daily. Merino wool is excellent for temperature regulation. Cotton is best for hot weather, while synthetic blends work well for active wear in cooler temperatures."
                        },
                        {
                          title: "🌱 Gardening Alert",
                          content: "Water plants early morning when humidity is high to reduce evaporation loss. Avoid evening watering as it can promote fungal growth. Adjust watering frequency based on rainfall - most plants need about 1 inch of water per week."
                        },
                        {
                          title: "🚗 Car Maintenance",
                          content: "Extreme cold reduces battery efficiency by up to 50%. In hot weather, check tire pressure more frequently as heat causes expansion. Wax your car before winter to protect paint from salt damage."
                        },
                        {
                          title: "🏠 Home Tips",
                          content: "Keep blinds closed in summer to block heat, open in winter to capture warmth. Ideal indoor humidity is 30-50% to prevent mold and respiratory issues. Use ceiling fans counter-clockwise in summer, clockwise in winter for optimal airflow."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-md-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h3 className="h6 card-title">{item.title}</h3>
                              <p className="card-text small">{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="weather-card card shadow-sm rounded p-5 text-center">
                <h2 className="h4 mb-3">Welcome to ChocoWeather</h2>
                <p className="lead mb-4">
                  Search for a city above to get started with delicious weather forecasts!
                </p>
                <div className="row g-3 justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h5">Try these popular cities:</h3>
                        <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
                          {['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Dubai', 'Singapore', 'Toronto'].map((city) => (
                            <button
                              key={city}
                              className="btn btn-outline-primary"
                              onClick={() => {
                                setCity(city);
                                fetchWeather(city);
                              }}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Additional Features */}
          <div className="col-lg-3 order-lg-3">
            {/* Weather Widgets */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-chocolate-medium text-creme">
                <h2 className="h5 mb-0">Weather Widgets</h2>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h3 className="h6">Moon Phase</h3>
                  {weatherData ? (
                    <div className="text-center">
                      <img
                        src="/moon.jpg"
                        alt={`Moon phase: ${weatherData.forecast.forecastday[0].astro.moon_phase}`}
                        width="80"
                        height="80"
                        className="mb-2"
                      />
                      <p>{weatherData.forecast.forecastday[0].astro.moon_phase}</p>
                      <p>Illumination: {weatherData.forecast.forecastday[0].astro.moon_illumination}%</p>
                    </div>
                  ) : (
                    <p className="text-muted small">Moon data will appear when you search for a location</p>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="h6">Sunrise & Sunset</h3>
                  {weatherData ? (
                    <div className="d-flex justify-content-around text-center">
                      <div>
                        <p className="mb-1">🌅 Sunrise</p>
                        <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                      </div>
                      <div>
                        <p className="mb-1">🌇 Sunset</p>
                        <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted small">Sun data will appear when you search for a location</p>
                  )}
                </div>
              </div>
            </div>


            {/* Weather News */}
            <div className="cardChocolate">
              <div className="cardHeaderChocolate">
                <h2 className="h5 mb-0">Weather News</h2>
              </div>
              <div className="cardBodyChocolate">
                <ul className="listGroupFlush">
                  <li className="listGroupItemChocolate">
                    <Link href="/blog/heatwave-tips" className="text-decoration-none">
                      Surviving the Summer Heatwave: Essential Tips
                    </Link>
                  </li>
                  <li className="listGroupItemChocolate">
                    <Link href="/blog/winter-prep" className="text-decoration-none">
                      Winter Preparation Guide for Your Home
                    </Link>
                  </li>
                  <li className="listGroupItemChocolate">
                    <Link href="/blog/hurricane-season" className="text-decoration-none">
                      Hurricane Season 2025: What to Expect
                    </Link>
                  </li>
                  <li className="listGroupItemChocolate">
                    <Link href="/blog/climate-change" className="text-decoration-none">
                      How Climate Change is Affecting Local Weather
                    </Link>
                  </li>
                </ul>
                <div className="mt-3 text-center">
                  <Link href="/blogs" className="viewAllBtn">
                    View All Blogs
                  </Link>
                </div>
              </div>
            </div>


            {/* Weather Glossary */}
            <div className="card shadow-sm">
              <div className="card-header bg-chocolate-medium text-creme">
                <h2 className="h5 mb-0">Weather Terms</h2>
              </div>
              <div className="card-body">
                <div className="accordion" id="weatherGlossary">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#glossary1">
                        Dew Point
                      </button>
                    </h3>
                    <div id="glossary1" className="accordion-collapse collapse" data-bs-parent="#weatherGlossary">
                      <div className="accordion-body small">
                        The temperature at which air becomes saturated with water vapor, leading to dew formation. Higher dew points mean more moisture in the air.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#glossary2">
                        Heat Index
                      </button>
                    </h3>
                    <div id="glossary2" className="accordion-collapse collapse" data-bs-parent="#weatherGlossary">
                      <div className="accordion-body small">
                        A measure of how hot it feels when relative humidity is factored with the actual air temperature.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#glossary3">
                        UV Index
                      </button>
                    </h3>
                    <div id="glossary3" className="accordion-collapse collapse" data-bs-parent="#weatherGlossary">
                      <div className="accordion-body small">
                        A scale from 0 to 11+ that measures the strength of sunburn-producing ultraviolet radiation at a particular place and time.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}