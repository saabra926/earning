"use client";
import Link from "next/link";
import "./page.css"
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      
        <Head>
        <link rel="canonical" href="https://www.exploreweather.site/privacy" />
      </Head>

      <main className="privacy-policy">
        <div className="container">
          <div className="policy-container">
            <div className="policy-card">
              <div className="policy-header">
                <div className="header-content">
                  <h1>Privacy Policy</h1>
                  <p>Last updated: June 10, 2025</p>
                </div>
              </div>

              <div className="policy-content">
                <nav aria-label="Privacy policy sections" className="policy-nav">
                  <ul>
                    <li><a href="#information-collection">1. Information Collection</a></li>
                    <li><a href="#use-of-information">2. Use of Information</a></li>
                    <li><a href="#data-sharing">3. Data Sharing</a></li>
                    <li><a href="#data-security">4. Data Security</a></li>
                    <li><a href="#your-rights">5. Your Rights</a></li>
                  </ul>
                </nav>

                <section className="policy-intro">
                  <p>
                    Welcome to <strong>WeatherNow</strong> ("we," "our," or "us"). We are committed to protecting 
                    your privacy and ensuring the security of your personal information. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you visit our 
                    website <Link href="/">weathernow.com</Link>.
                  </p>
                  <p className="highlight">
                    By accessing or using our service, you agree to the collection and use of information in 
                    accordance with this policy. If you disagree with any part of this policy, please do not 
                    use our website.
                  </p>
                </section>

                <hr className="divider" />

                <section id="information-collection" className="policy-section">
                  <h2>1. Information Collection and Use</h2>
                  <p>
                    We collect several different types of information for various purposes to provide and 
                    improve our service to you.
                  </p>
                  
                  <h3>Personal Data</h3>
                  <p>
                    While using our service, we may ask you to provide us with certain personally 
                    identifiable information that can be used to contact or identify you ("Personal Data"). 
                    This may include, but is not limited to:
                  </p>
                  <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Cookies and Usage Data (see below)</li>
                    <li>Location data (for personalized weather reports)</li>
                  </ul>
                  
                  <h3>Usage Data</h3>
                  <p>
                    We may also collect information about how the service is accessed and used ("Usage Data"). 
                    This Usage Data may include:
                  </p>
                  <ul>
                    <li>Your computer's Internet Protocol address (IP address)</li>
                    <li>Browser type and version</li>
                    <li>Pages of our service that you visit</li>
                    <li>Time and date of your visit</li>
                    <li>Time spent on those pages</li>
                    <li>Unique device identifiers</li>
                    <li>Other diagnostic data</li>
                  </ul>
                  
                  <h3>Tracking & Cookies Data</h3>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our service and 
                    hold certain information to improve your experience:
                  </p>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Cookie</th>
                          <th>Purpose</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Session Cookies</td>
                          <td>Essential site functionality</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>Preference Cookies</td>
                          <td>Remember your preferences</td>
                          <td>Persistent (1 year)</td>
                        </tr>
                        <tr>
                          <td>Analytics Cookies</td>
                          <td>Track usage patterns</td>
                          <td>Persistent (2 years)</td>
                        </tr>
                        <tr>
                          <td>Advertising Cookies</td>
                          <td>Deliver relevant ads</td>
                          <td>Persistent (1 year)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. 
                    However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                </section>

                {/* Other sections follow the same pattern */}

                <div className="policy-actions">
                  <Link href="/terms" className="btn-secondary">
                    View Terms of Service
                  </Link>
                  <Link href="/" className="btn-primary">
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