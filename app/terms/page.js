"use client";
import "./page.css"
import Link from "next/link";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
    
      <Head>
        <link rel="canonical" href="https://www.exploreweather.site/about" />
      </Head>

      <main className="container py-5" role="main">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0 bg-cream">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h1 className="card-title display-4 fw-bold mb-3 text-chocolate">Terms of Service</h1>
                  <p className="text-muted fs-5">Last updated: June 10, 2025</p>
                </div>

                <nav aria-label="Terms sections" className="mb-5">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <a href="#acceptance" className="btn btn-sm btn-chocolate-outline">Acceptance</a>
                    <a href="#service" className="btn btn-sm btn-chocolate-outline">Service</a>
                    <a href="#responsibilities" className="btn btn-sm btn-chocolate-outline">Responsibilities</a>
                    <a href="#ip" className="btn btn-sm btn-chocolate-outline">Intellectual Property</a>
                    <a href="#third-party" className="btn btn-sm btn-chocolate-outline">Third-Party</a>
                    <a href="#changes" className="btn btn-sm btn-chocolate-outline">Changes</a>
                    <a href="#contact" className="btn btn-sm btn-chocolate-outline">Contact</a>
                  </div>
                </nav>

                <section id="acceptance" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">1. Acceptance of Terms</h2>
                  <p className="lead text-dark-brown">
                    Welcome to <strong>WeatherNow</strong> ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
                  </p>
                  <p>
                    By accessing or using the Service, you agree to be bound by these Terms and our <Link href="/privacy" className="text-chocolate text-decoration-underline">Privacy Policy</Link>. If you disagree with any part of these Terms, you may not access the Service.
                  </p>
                  <p>
                    By using WeatherNow, you confirm that:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">You are at least 13 years of age (or the minimum legal age in your jurisdiction)</li>
                    <li className="list-group-item bg-transparent">You have read, understood, and agree to be bound by these Terms</li>
                    <li className="list-group-item bg-transparent">You consent to our collection and use of your information as described in our Privacy Policy</li>
                  </ul>
                </section>

                <section id="service" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">2. Service Description</h2>
                  <p>
                    WeatherNow provides weather forecasting information, alerts, and related content. Our services include:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Current weather conditions</li>
                    <li className="list-group-item bg-transparent">Forecasts (hourly, daily, weekly)</li>
                    <li className="list-group-item bg-transparent">Severe weather alerts</li>
                    <li className="list-group-item bg-transparent">Weather-related news and articles</li>
                  </ul>
                  <p className="alert alert-warning">
                    <strong>Important:</strong> All weather data is provided for informational purposes only. We make no warranties about the accuracy, completeness, or reliability of this information.
                  </p>
                </section>

                <section id="responsibilities" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">3. User Responsibilities</h2>
                  <p>
                    When using WeatherNow, you agree:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">To provide accurate information when creating an account (if applicable)</li>
                    <li className="list-group-item bg-transparent">Not to use the Service for any illegal purpose or in violation of any laws</li>
                    <li className="list-group-item bg-transparent">Not to engage in any activity that interferes with or disrupts the Service</li>
                    <li className="list-group-item bg-transparent">Not to attempt to gain unauthorized access to our systems or networks</li>
                    <li className="list-group-item bg-transparent">Not to use automated systems (bots, scrapers, etc.) to access the Service without permission</li>
                    <li className="list-group-item bg-transparent">Not to reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission</li>
                  </ul>
                </section>

                <section id="ip" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">4. Intellectual Property Rights</h2>
                  <p>
                    All content on WeatherNow, including but not limited to:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Text, graphics, logos, icons</li>
                    <li className="list-group-item bg-transparent">Images, audio clips, digital downloads</li>
                    <li className="list-group-item bg-transparent">Data compilations</li>
                    <li className="list-group-item bg-transparent">Software</li>
                  </ul>
                  <p>
                    is the property of WeatherNow or its content suppliers and protected by international copyright laws.
                  </p>
                  <p>
                    You may not:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Modify, publish, transmit, reverse engineer, or create derivative works from our content</li>
                    <li className="list-group-item bg-transparent">Use our trademarks without prior written permission</li>
                    <li className="list-group-item bg-transparent">Use our content for commercial purposes without obtaining a license</li>
                  </ul>
                </section>

                <section id="third-party" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">5. Third-Party Content and Links</h2>
                  <p>
                    WeatherNow may contain:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Links to third-party websites or services</li>
                    <li className="list-group-item bg-transparent">Content from third-party providers (e.g., weather data sources)</li>
                    <li className="list-group-item bg-transparent">Advertisements from advertising partners</li>
                  </ul>
                  <p>
                    We are not responsible for:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">The content or accuracy of third-party sites</li>
                    <li className="list-group-item bg-transparent">The practices of third-party services</li>
                    <li className="list-group-item bg-transparent">Any damages or losses caused by third-party content</li>
                  </ul>
                </section>

                <section id="changes" className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">6. Modifications to Service and Terms</h2>
                  <p>
                    We reserve the right to:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Modify or discontinue the Service at any time without notice</li>
                    <li className="list-group-item bg-transparent">Change these Terms at our discretion</li>
                  </ul>
                  <p>
                    We will notify users of significant changes by:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">Posting the new Terms on this page</li>
                    <li className="list-group-item bg-transparent">Updating the "Last updated" date</li>
                    <li className="list-group-item bg-transparent">Sending an email notification (if applicable)</li>
                  </ul>
                  <p>
                    Your continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                {/* Additional sections (7-13) remain similar with the same styling */}

                <section id="contact" className="mb-4">
                  <h2 className="h3 mb-3 fw-bold text-chocolate">13. Contact Information</h2>
                  <p>
                    For questions about these Terms, please contact us at:
                  </p>
                  <ul className="list-group list-group-flush mb-3 bg-transparent">
                    <li className="list-group-item bg-transparent">
                      <strong>Email:</strong> rdawood379@gmail.com
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Mail:</strong> P777/286A, GM Abad 100, Pakistain, 39000
                    </li>
                    <li className="list-group-item bg-transparent">
                      <strong>Website:</strong> <Link href="/contact" className="text-chocolate text-decoration-underline">Contact Page</Link>
                    </li>
                  </ul>
                </section>

                <div className="d-flex flex-column flex-md-row justify-content-between mt-5 gap-3">
                  <Link href="/privacy" className="btn btn-chocolate-outline">
                    View Privacy Policy
                  </Link>
                  <Link href="/" className="btn btn-chocolate">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </>
  );
}