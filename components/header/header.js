"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./header.css";

export default function Header() {
  // Function to close the mobile menu when a menu item is clicked
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
    // Optional: Adding event listener to auto-close when a link is clicked
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
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <div className="container-fluid">
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand fw-bold" aria-label="Home">
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" passHref legacyBehavior>
                  <a className="nav-link" aria-label="Weather Page">
                    Weather
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref legacyBehavior>
                  <a className="nav-link" aria-label="About Page">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs" passHref legacyBehavior>
                  <a className="nav-link" aria-label="Blogs Page">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faq" passHref legacyBehavior>
                  <a className="nav-link" aria-label="FAQs Page">
                    FAQs
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy" passHref legacyBehavior>
                  <a className="nav-link" aria-label="Privacy Page">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
