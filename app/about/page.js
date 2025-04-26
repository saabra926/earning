import Head from 'next/head';

export default function About() {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>About WeatherNow | Real-Time Weather Forecast App</title>
        <meta
          name="description"
          content="Learn about WeatherNow – your trusted app for accurate and real-time weather updates worldwide. Discover our mission and features."
        />
        <meta name="keywords" content="WeatherNow, weather app, real-time weather, global forecast, weather updates" />
        <meta name="author" content="WeatherNow Team" />
      </Head>

      {/* Page Content */}
      <main className="min-vh-100 bg-light py-5 px-3">
        <div className="container">
          {/* Heading */}
          <header className="mb-5 text-center">
            <h1 className="fw-bold text-dark display-4">About WeatherNow</h1>
            <p className="text-muted fs-5">
              Your reliable companion for accurate and real-time weather updates.
            </p>
          </header>

          {/* Mission Section */}
          <section className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/weather.jpg"
                alt="Illustration showing a weather forecast interface"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-secondary fs-5">
                At WeatherNow, our goal is to empower individuals and communities by providing precise weather data and forecasts.
                Whether you're planning a trip, preparing for a storm, or simply deciding what to wear — we've got you covered.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-5">
            <h2 className="fw-bold text-center mb-4">Why Choose WeatherNow?</h2>
            <div className="row text-center g-4">
              <article className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h3 className="fw-semibold text-primary mb-2">Real-Time Updates</h3>
                  <p className="text-muted">
                    Get updates every 30 minutes to stay informed about changing weather conditions.
                  </p>
                </div>
              </article>
              <article className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h3 className="fw-semibold text-primary mb-2">Global Coverage</h3>
                  <p className="text-muted">
                    Access weather data from cities around the world through our advanced APIs.
                  </p>
                </div>
              </article>
              <article className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h3 className="fw-semibold text-primary mb-2">User-Friendly Interface</h3>
                  <p className="text-muted">
                    Enjoy a seamless experience with our clean and intuitive design.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-5">
            <h2 className="fw-bold mb-3">Stay Ahead of the Weather</h2>
            <p className="text-muted fs-5">
              Download WeatherNow today and never get caught in the rain unprepared!
            </p>
            <button className="btn btn-primary px-4 py-2" aria-label="Download WeatherNow App">
              Download WeatherNow
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
