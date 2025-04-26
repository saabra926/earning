import Head from 'next/head';

export default function Blogs() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Weather Blogs | WeatherNow</title>
        <meta
          name="description"
          content="Explore expert blogs on weather prediction, top apps, and real-time weather insights. Stay informed with WeatherNow."
        />
        <meta name="keywords" content="weather blogs, forecast tips, top weather apps, WeatherNow, weather articles" />
        <meta name="author" content="WeatherNow Team" />
      </Head>

      {/* Blog Content */}
      <main className="min-vh-100 bg-light py-5 px-3">
        <div className="container">
          <header className="text-center mb-5">
            <h1 className="fw-bold text-dark display-5">Weather Blogs</h1>
            <p className="text-muted fs-5">
              Stay updated with the latest weather insights, expert tips, and forecast trends.
            </p>
          </header>

          <section className="row g-4">
            {/* Blog 1 */}
            <article className="col-12">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h2 className="card-title text-primary fw-semibold fs-4 mb-3">
                    How to Predict Rain?
                  </h2>
                  <p className="card-text text-secondary">
                    Predicting rain isn't just for meteorologists. By learning how to observe the skies — like spotting cumulonimbus clouds,
                    measuring humidity with simple tools, and understanding drops in atmospheric pressure — anyone can start forecasting rain naturally. 
                    Whether you're hiking, gardening, or planning an outdoor event, this blog helps you become more weather-aware.
                  </p>
                  <p className="text-muted small mt-3">Published: April 18, 2025</p>
                </div>
              </div>
            </article>

            {/* Blog 2 */}
            <article className="col-12">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h2 className="card-title text-primary fw-semibold fs-4 mb-3">
                    Top Weather Apps of 2025
                  </h2>
                  <p className="card-text text-secondary">
                    Choosing the right weather app can save you from unexpected rain or missed flight alerts. 
                    In this roundup, we review the best weather apps of 2025 based on accuracy, user interface, real-time updates, 
                    radar maps, and more. Whether you're an outdoor enthusiast, a traveler, or just want daily forecasts,
                    you'll find the perfect app for your needs.
                  </p>
                  <p className="text-muted small mt-3">Published: April 15, 2025</p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
