"use client";
import Link from "next/link";
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
      <header role="banner">
        <nav
          className="navbar navbar-expand-lg navbar-cream px-4"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-brand fw-bold" aria-label="WeatherNow Home">
                <span className="logo-text">WeatherNow</span>
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
                  { href: "/about", label: "About Us" },
                  { href: "/blogs", label: "Blogs" },
                  { href: "/topstories", label: "Top Stories" },
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Services" },
                  { href: "/contact", label: "Contact" },
                  { href: "/faq", label: "FAQs" },
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