"use client";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>

      <main className="container py-5" role="main">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h1 className="card-title display-4 fw-bold mb-3 text-primary">Terms of Service</h1>
                  <p className="text-muted fs-5">Last updated: June 10, 2025</p>
                </div>

                <section className="mb-5">
                  <p className="lead">
                    Welcome to <strong>WeatherNow</strong> ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
                  </p>
                  <p>
                    By accessing or using the Service, you agree to be bound by these Terms and our <Link href="/privacy" className="text-decoration-underline">Privacy Policy</Link>. If you disagree with any part of these Terms, you may not access the Service.
                  </p>
                </section>

                <hr className="my-4" />

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using WeatherNow, you confirm that:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">You are at least 13 years of age (or the minimum legal age in your jurisdiction)</li>
                    <li className="list-group-item">You have read, understood, and agree to be bound by these Terms</li>
                    <li className="list-group-item">You consent to our collection and use of your information as described in our Privacy Policy</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">2. Service Description</h2>
                  <p>
                    WeatherNow provides weather forecasting information, alerts, and related content. Our services include:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Current weather conditions</li>
                    <li className="list-group-item">Forecasts (hourly, daily, weekly)</li>
                    <li className="list-group-item">Severe weather alerts</li>
                    <li className="list-group-item">Weather-related news and articles</li>
                  </ul>
                  <p>
                    All weather data is provided for informational purposes only. We make no warranties about the accuracy, completeness, or reliability of this information.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">3. User Responsibilities</h2>
                  <p>
                    When using WeatherNow, you agree:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">To provide accurate information when creating an account (if applicable)</li>
                    <li className="list-group-item">Not to use the Service for any illegal purpose or in violation of any laws</li>
                    <li className="list-group-item">Not to engage in any activity that interferes with or disrupts the Service</li>
                    <li className="list-group-item">Not to attempt to gain unauthorized access to our systems or networks</li>
                    <li className="list-group-item">Not to use automated systems (bots, scrapers, etc.) to access the Service without permission</li>
                    <li className="list-group-item">Not to reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">4. Intellectual Property Rights</h2>
                  <p>
                    All content on WeatherNow, including but not limited to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Text, graphics, logos, icons</li>
                    <li className="list-group-item">Images, audio clips, digital downloads</li>
                    <li className="list-group-item">Data compilations</li>
                    <li className="list-group-item">Software</li>
                  </ul>
                  <p>
                    is the property of WeatherNow or its content suppliers and protected by international copyright laws.
                  </p>
                  <p>
                    You may not:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Modify, publish, transmit, reverse engineer, or create derivative works from our content</li>
                    <li className="list-group-item">Use our trademarks without prior written permission</li>
                    <li className="list-group-item">Use our content for commercial purposes without obtaining a license</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">5. Third-Party Content and Links</h2>
                  <p>
                    WeatherNow may contain:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Links to third-party websites or services</li>
                    <li className="list-group-item">Content from third-party providers (e.g., weather data sources)</li>
                    <li className="list-group-item">Advertisements from Google AdSense and other advertising partners</li>
                  </ul>
                  <p>
                    We are not responsible for:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">The content or accuracy of third-party sites</li>
                    <li className="list-group-item">The practices of third-party services</li>
                    <li className="list-group-item">Any damages or losses caused by third-party content</li>
                  </ul>
                  <p>
                    Your interactions with advertisers (including payment and delivery of goods/services) are solely between you and the advertiser.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">6. Modifications to Service and Terms</h2>
                  <p>
                    We reserve the right to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Modify or discontinue the Service at any time without notice</li>
                    <li className="list-group-item">Change these Terms at our discretion</li>
                  </ul>
                  <p>
                    We will notify users of significant changes by:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Posting the new Terms on this page</li>
                    <li className="list-group-item">Updating the "Last updated" date</li>
                    <li className="list-group-item">Sending an email notification (if applicable)</li>
                  </ul>
                  <p>
                    Your continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">7. Disclaimer of Warranties</h2>
                  <p>
                    The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Warranties of merchantability</li>
                    <li className="list-group-item">Fitness for a particular purpose</li>
                    <li className="list-group-item">Non-infringement</li>
                    <li className="list-group-item">Accuracy, reliability, or completeness of content</li>
                  </ul>
                  <p>
                    WeatherNow does not warrant that:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">The Service will be uninterrupted or error-free</li>
                    <li className="list-group-item">Defects will be corrected</li>
                    <li className="list-group-item">The Service or servers are free of viruses or harmful components</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">8. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, WeatherNow shall not be liable for:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li className="list-group-item">Loss of profits, revenue, data, or use</li>
                    <li className="list-group-item">Damages related to unauthorized access or alteration of your transmissions or data</li>
                    <li className="list-group-item">Any conduct or content of any third party on the Service</li>
                    <li className="list-group-item">Any decisions made based on weather information provided by the Service</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">9. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless WeatherNow and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or relating to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Your use of the Service</li>
                    <li className="list-group-item">Your violation of these Terms</li>
                    <li className="list-group-item">Your violation of any third-party right</li>
                    <li className="list-group-item">Any content you submit to the Service</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">10. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising under these Terms will be resolved in the state or federal courts located in San Francisco County, California.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">11. Termination</h2>
                  <p>
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                  </p>
                  <p>
                    Upon termination:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Your right to use the Service will immediately cease</li>
                    <li className="list-group-item">All provisions of these Terms that should survive termination will survive</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">12. Miscellaneous</h2>
                  <p>
                    <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and WeatherNow regarding the Service.
                  </p>
                  <p>
                    <strong>Severability:</strong> If any provision of these Terms is held invalid, the remainder shall continue in full force and effect.
                  </p>
                  <p>
                    <strong>Waiver:</strong> Our failure to enforce any right or provision will not be considered a waiver of those rights.
                  </p>
                </section>

                <section className="mb-4">
                  <h2 className="h3 mb-3 fw-bold text-primary">13. Contact Information</h2>
                  <p>
                    For questions about these Terms, please contact us at:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>Email:</strong> support@weathernow.com
                    </li>
                    <li className="list-group-item">
                      <strong>Mail:</strong> 123 Weather Lane, Suite 100, San Francisco, CA 94107
                    </li>
                    <li className="list-group-item">
                      <strong>Website:</strong> <Link href="/contact" className="text-decoration-underline">Contact Page</Link>
                    </li>
                  </ul>
                </section>

                <div className="d-flex justify-content-between mt-5">
                  <Link href="/privacy" className="btn btn-outline-primary">
                    View Privacy Policy
                  </Link>
                  <Link href="/" className="btn btn-primary">
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