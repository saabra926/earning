"use client";
import Head from "next/head";

export default function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About WeatherNow | Trusted Real-Time Weather Forecasts</title>
        <meta
          name="description"
          content="Discover WeatherNow — your trusted source for real-time, accurate weather forecasts worldwide. Learn about our mission, values, and innovative features."
        />
        <meta
          name="keywords"
          content="WeatherNow, real-time weather, weather updates, accurate forecast, weather tracking, weather app"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* About Page Content */}
      <main className="min-vh-100 bg-light py-5 px-3" role="main">
        <div className="container">
          {/* Introduction */}
          <header className="mb-5 text-center">
            <h1 className="fw-bold display-4 text-primary">About WeatherNow</h1>
            <p className="lead text-muted">
              Your trusted companion for accurate, real-time weather forecasts — anytime, anywhere.
            </p>
          </header>

          {/* Mission Section */}
          <section className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/weather.jpg"
                alt="Weather forecast dashboard illustration"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold text-secondary mb-3">Our Mission</h2>
              <p className="text-muted fs-5">
                At WeatherNow, our mission is to deliver precise, real-time weather information to help you plan better and stay safe.
                Whether you're commuting, traveling, or preparing for seasonal changes, we bring accurate weather data to your fingertips.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-5">
            <h2 className="fw-bold text-center text-secondary mb-4">Why Choose WeatherNow?</h2>
            <div className="row g-4">
              <article className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h3 className="text-primary fw-semibold mb-2">Real-Time Updates</h3>
                    <p className="text-muted">
                      Stay updated with weather changes every 30 minutes, powered by the latest technology.
                    </p>
                  </div>
                </div>
              </article>
              <article className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h3 className="text-primary fw-semibold mb-2">Global Reach</h3>
                    <p className="text-muted">
                      Access weather forecasts from thousands of cities across the globe, wherever you are.
                    </p>
                  </div>
                </div>
              </article>
              <article className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h3 className="text-primary fw-semibold mb-2">User-Friendly Design</h3>
                    <p className="text-muted">
                      Experience an intuitive, mobile-responsive interface designed for simplicity and speed.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-5">
            <h2 className="fw-bold text-primary mb-3">Stay Prepared. Stay Informed.</h2>
            <p className="text-muted fs-5 mb-4">
              Download WeatherNow today — because weather shouldn't surprise you.
            </p>
            <a href="/" className="btn btn-primary btn-lg px-4" aria-label="Go to WeatherNow Home">
              Explore Now
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
