"use client";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About WeatherNow | Trusted Real-Time Weather Forecasts</title>
        <meta
          name="description"
          content="Learn more about WeatherNow – our mission, team, and the technology behind our accurate, real-time weather forecasts around the globe."
        />
        <meta
          name="keywords"
          content="WeatherNow, weather forecast, real-time weather updates, weather accuracy, global weather, meteorology"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-vh-100 bg-light py-5 px-3">
        <div className="container">
          {/* Header */}
          <header className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary">About WeatherNow</h1>
            <p className="lead text-muted">
              Trusted by thousands worldwide, WeatherNow delivers reliable, real-time weather forecasts — whenever and wherever you need them.
            </p>
          </header>

          {/* Our Mission */}
          <section className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/weather.jpg"
                alt="Real-time weather dashboard"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h3 fw-bold text-secondary mb-3">Our Mission</h2>
              <p className="fs-5 text-muted">
                Our goal is simple: provide fast, accurate, and easy-to-understand weather data that helps users stay informed and safe.
                From sudden storms to daily forecasts, WeatherNow empowers individuals, travelers, businesses, and communities to plan ahead.
              </p>
            </div>
          </section>

          {/* Why Choose WeatherNow */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-center text-secondary mb-4">Why Choose Us?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <h3 className="fw-semibold text-primary mb-2">Real-Time Accuracy</h3>
                    <p className="text-muted">
                      WeatherNow uses satellite data, Doppler radar, and AI models to give you real-time weather alerts every 15 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <h3 className="fw-semibold text-primary mb-2">Global Coverage</h3>
                    <p className="text-muted">
                      From small towns to big cities, get location-specific forecasts anywhere in the world — fast and reliable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <h3 className="fw-semibold text-primary mb-2">Intuitive Design</h3>
                    <p className="text-muted">
                      Enjoy a clean, responsive interface designed for both mobile and desktop users, with dark mode and accessibility features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-secondary mb-3">Meet the Team</h2>
            <p className="text-muted fs-5">
              WeatherNow is built by a passionate team of meteorologists, developers, and designers with a shared commitment to climate awareness.
              With experience in meteorological research, machine learning, and UX design, our goal is to simplify complex weather data for all.
            </p>
          </section>

          {/* Our Technology */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-secondary mb-3">Powered by Innovation</h2>
            <p className="text-muted fs-5">
              We integrate real-time data from NOAA, OpenWeather, and international meteorological agencies, combined with AI-driven analytics.
              Our technology predicts extreme weather patterns and provides early alerts to reduce risk and enhance preparedness.
            </p>
          </section>

          {/* Transparency & Trust */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-secondary mb-3">Our Commitment to Transparency</h2>
            <p className="text-muted fs-5">
              We do not sell user data. Our <a href="/privacy" className="text-primary text-decoration-underline">Privacy Policy</a> outlines how your information is collected and protected. We value your trust and believe that weather services should always prioritize user safety and transparency.
            </p>
          </section>

          {/* Accessibility */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-secondary mb-3">Accessibility for All</h2>
            <p className="text-muted fs-5">
              WeatherNow follows Web Content Accessibility Guidelines (WCAG) to ensure everyone — including people with disabilities — can access timely weather updates. We continuously test and improve our site for usability.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-5">
            <h2 className="fw-bold text-primary mb-3">Plan Ahead with Confidence</h2>
            <p className="fs-5 text-muted mb-4">
              Join thousands of users who rely on WeatherNow for clear, up-to-date weather forecasts. From your morning jog to emergency preparedness, we're here for you.
            </p>
            <a href="/" className="btn btn-lg btn-primary px-4">
              Visit Homepage
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
