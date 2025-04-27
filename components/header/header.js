"use client";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import "./header.css";

export default function Header() {
  const closeNavbar = () => {
    const collapseElement = document.getElementById("navbarNav");
    if (collapseElement) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeNavbar);
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>WeatherNow - Real-Time Weather Updates</title>
        <meta
          name="description"
          content="Get accurate, real-time weather updates, forecasts, and alerts. Stay informed with WeatherNow!"
        />
        <meta
          name="keywords"
          content="weather, weather app, real-time weather, weather forecast, WeatherNow"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags for better sharing */}
        <meta property="og:title" content="WeatherNow - Real-Time Weather Updates" />
        <meta property="og:description" content="Get accurate, real-time weather updates, forecasts, and alerts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exploreweather.vercel.app/" />
        <meta property="og:image" content="/weather-og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header role="banner">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark px-4"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-brand fw-bold" aria-label="WeatherNow Home">
                WeatherNow
              </a>
            </Link>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" role="menubar">
                {[
                  { href: "/", label: "Weather", ariaCurrent: "page" },
                  { href: "/about", label: "About" },
                  { href: "/blogs", label: "Blogs" },
                  { href: "/faq", label: "FAQs" },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map((item, idx) => (
                  <li className="nav-item" role="none" key={idx}>
                    <Link href={item.href} passHref legacyBehavior>
                      <a
                        className="nav-link"
                        role="menuitem"
                        aria-current={item.ariaCurrent || undefined}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
