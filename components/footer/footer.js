"use client";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      {/* SEO improvements for the Footer page if it's separately routed */}
      <Head>
        <meta
          name="description"
          content="WeatherNow provides accurate, real-time weather forecasts. Stay informed with up-to-date weather news."
        />
        <meta
          name="keywords"
          content="WeatherNow, weather updates, weather forecast, live weather, accurate weather"
        />
      </Head>

      <footer className="bg-light text-center text-muted py-4 mt-auto border-top" role="contentinfo">
        <div className="container">
          <p className="mb-1">
            © 2025 <strong>WeatherNow</strong>. All rights reserved.
          </p>
          <p className="small">
            Designed and developed by <strong>Dawood Rehman</strong>.
          </p>
          <nav aria-label="Footer Navigation">
            <a href="/privacy" className="text-muted me-3 small">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted small">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
