"use client";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | WeatherNow</title>
        <meta
          name="description"
          content="Read the privacy policy of WeatherNow to understand how we handle your data responsibly and securely."
        />
      </Head>

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h1 className="card-title display-5 mb-3">Privacy Policy</h1>
                <p className="text-muted">Last updated: April 25, 2025</p>

                <p>
                  At <strong>WeatherNow</strong>, your privacy is important to us.
                  This Privacy Policy outlines the types of personal information
                  we collect, how we use it, and how we protect your data.
                </p>

                <hr className="my-4" />

                <div className="mb-4">
                  <h2 className="h4">1. Information We Collect</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Personal Data:</strong> Name, email address, etc., only when voluntarily submitted.
                    </li>
                    <li className="list-group-item">
                      <strong>Usage Data:</strong> IP address, browser type, location, and pages visited.
                    </li>
                    <li className="list-group-item">
                      <strong>Cookies:</strong> To enhance your experience and support analytics.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="h4">2. How We Use Your Information</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">To provide and improve our services</li>
                    <li className="list-group-item">To personalize your experience</li>
                    <li className="list-group-item">To analyze usage trends and user behavior</li>
                    <li className="list-group-item">To send optional updates or newsletters (with your consent)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="h4">3. Sharing of Information</h2>
                  <p>
                    We do <strong>not</strong> sell, rent, or trade your personal
                    information. We may only share data with trusted partners to
                    help operate the website or fulfill services.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="h4">4. Data Security</h2>
                  <p>
                    We implement industry-standard security practices to protect
                    your data. However, no method of transmission is completely
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="h4">5. Third-Party Links</h2>
                  <p>
                    Our site may contain links to external websites. We are not
                    responsible for their content or privacy practices.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="h4">6. Your Rights</h2>
                  <p>You may request to:</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Access the data we hold about you</li>
                    <li className="list-group-item">Request corrections or deletion</li>
                    <li className="list-group-item">Withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="h4">7. Changes to This Policy</h2>
                  <p>
                    We may update this policy from time to time. Revisions will be
                    posted on this page with an updated date.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="h4">8. Contact Us</h2>
                  <p>
                    Questions? Feel free to reach us via our{" "}
                    <Link href="/contact" className="text-decoration-underline">
                      Contact Page
                    </Link>
                    .
                  </p>
                </div>

                <div className="text-end">
                  <Link href="/" className="btn btn-outline-primary">
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
