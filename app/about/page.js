"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  // Structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WeatherNow",
    "url": "https://exploreweather.vercel.app",
    "logo": "https://exploreweather.vercel.app/logo.png",
    "description": "Accurate real-time weather forecasting platform",
    "founders": [
      {
        "@type": "Person",
        "name": "Alex Johnson"
      },
      {
        "@type": "Person",
        "name": "Sarah Chen"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>About WeatherNow | Our Story, Technology & Weather Experts</title>
        <meta
          name="description"
          content="Discover how WeatherNow combines meteorology expertise with cutting-edge technology to deliver hyper-local weather forecasts you can trust. Meet our team of weather specialists."
        />
        <meta
          name="keywords"
          content="weather forecasting technology, meteorology team, weather data accuracy, storm prediction, climate monitoring, weather API"
        />
        <meta property="og:title" content="About WeatherNow | Trusted Weather Forecasting" />
        <meta property="og:description" content="Learn how our team of meteorologists and engineers build reliable weather prediction tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exploreweather.vercel.app/about" />
        <meta property="og:image" content="https://exploreweather.vercel.app/weather-tech.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>


      <main className="bg-light">
        <div className="container py-5">
          {/* Hero Section */}
          <section className="text-center py-5 mb-4 bg-white rounded-3 shadow-sm">
            <h1 className="display-5 fw-bold mb-3">Why WeatherNow Stands Out</h1>
            <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
              We're not just another weather app - we're a team of <strong>passionate meteorologists</strong> and <strong>data scientists</strong>
              dedicated to making weather forecasting accessible, accurate, and actionable.
            </p>
          </section>

          {/* Our Story */}
          <section className="row align-items-center my-5 g-4">
            <div className="col-lg-6 order-lg-2">
              <Image
                src="/weather.jpg"
                alt="Our weather monitoring station"
                width={400}
                height={400}
                className="img-fluid rounded-3 shadow"
                priority
              />
            </div>
            <div className="col-lg-6  order-lg-1">
              <h2 className="h2 fw-bold mb-4">Our Humble Beginnings</h2>
              <p className="mb-4">
                Founded in 2022 during a record-breaking hurricane season, WeatherNow started as a university project between
                meteorology students and computer engineers. Frustrated by inaccurate local forecasts, we set out to build
                a <strong>hyper-local prediction system</strong> that could help communities prepare for severe weather.
              </p>
              <p>
                Today, we process over <strong>2.5 million weather data points daily</strong> from our network of
                professional-grade weather stations, satellite feeds, and government radar systems.
              </p>
            </div>
          </section>


          {/* Technology Stack */}
          <section className="my-5 py-4 bg-white rounded-3 shadow-sm">
            <h2 className="h2 text-center fw-bold mb-5">Our Technology Edge</h2>
            <div className="row g-4">
              {[
                {
                  title: "AI-Powered Predictions",
                  icon: "🤖",
                  content: "Our machine learning models analyze 10+ years of historical patterns to improve forecast accuracy by 23% compared to standard models."
                },
                {
                  title: "Micro-Weather Mapping",
                  icon: "🗺️",
                  content: "Using elevation data and urban heat island effects, we provide neighborhood-specific forecasts down to 500m resolution."
                },
                {
                  title: "Severe Weather AI",
                  icon: "⚠️",
                  content: "Proprietary algorithms detect developing storm patterns 15-30 minutes faster than conventional radar systems."
                }
              ].map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0">
                    <div className="card-body text-center p-4">
                      <span className="display-4 mb-3 d-block">{item.icon}</span>
                      <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Meet the Team */}
          <section className="my-5">
            <h2 className="h2 fw-bold text-center mb-5">The Faces Behind the Forecasts</h2>
            <div className="row g-4">
              {[
                {
                  name: "Dawood Rehman",
                  role: "Chief Meteorologist",
                  bio: "Former NOAA researcher specializing in tropical storm prediction with 12 years of field experience.",
                  funFact: "Has chased tornadoes across 8 states"
                },
                {
                  name: "Hammad Ali",
                  role: "Data Science Lead",
                  bio: "Developed award-winning climate models at MIT before joining our team in 2023.",
                  funFact: "Built his first weather station at age 14"
                },
                {
                  name: "Zainab Bukhari",
                  role: "UX Designer",
                  bio: "Makes complex weather data understandable through intuitive interfaces and visualization.",
                  funFact: "Holds a private pilot license"
                }
              ].map((member, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="h4 fw-bold">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="mb-3">{member.bio}</p>
                      <p className="small text-muted">Fun fact: {member.funFact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* Data Partnerships */}
          <section className="my-5 py-4 bg-white rounded-3 shadow-sm">
            <h2 className="h2 fw-bold text-center mb-4">Trusted Data Sources</h2>
            <p className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
              We combine our proprietary data with these authoritative sources to deliver the most reliable forecasts:
            </p>
            <div className="row g-4 justify-content-center">
              {["NOAA", "NASA EarthData", "European Centre for Medium-Range Weather Forecasts", "Japan Meteorological Agency"].map((source, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="card h-100 border-0 text-center p-3">
                    <p className="fw-bold mb-0">{source}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center my-5 py-5 bg-primary text-white rounded-3">
            <h2 className="h1 fw-bold mb-4">Ready for Better Weather Insights?</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Join over 250,000 users who trust WeatherNow for their daily planning and emergency preparedness.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <Link href="/" className="btn btn-light btn-lg px-4 w-100 w-md-auto text-center">
                Try Live Forecast
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg px-4 w-100 w-md-auto text-center">
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </main>


    </>
  );
}