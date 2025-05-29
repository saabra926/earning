
import Link from 'next/link';

export default function FAQs() {
  return (
    <>

      <main className="min-vh-100 bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Frequently Asked Questions</h1>
            <p className="lead text-muted">Find answers to common questions about WeatherNow's features and services</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                  <div className="accordion" id="faqAccordion">

                    {/* Category 1: General Questions */}
                    <h2 className="h4 mb-3 fw-bold text-primary mt-4">General Information</h2>
                    
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What is WeatherNow?
                        </button>
                      </h3>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>WeatherNow is a comprehensive weather forecasting platform that provides:</p>
                          <ul>
                            <li>Real-time weather updates for over 200,000 locations worldwide</li>
                            <li>Hyperlocal forecasts with 90%+ accuracy</li>
                            <li>Severe weather alerts and notifications</li>
                            <li>Air quality and pollen tracking</li>
                            <li>Customizable dashboard for personal and professional use</li>
                          </ul>
                          <p>Our service combines data from multiple meteorological sources with proprietary algorithms to deliver the most reliable forecasts.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How accurate are WeatherNow's forecasts?
                        </button>
                      </h3>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Our forecast accuracy varies by timeframe and location:</p>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Forecast Period</th>
                                <th>Accuracy Range</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Current conditions</td>
                                <td>95-98%</td>
                              </tr>
                              <tr>
                                <td>24-hour forecast</td>
                                <td>90-93%</td>
                              </tr>
                              <tr>
                                <td>3-day forecast</td>
                                <td>85-88%</td>
                              </tr>
                              <tr>
                                <td>7-day forecast</td>
                                <td>75-80%</td>
                              </tr>
                            </tbody>
                          </table>
                          <p>Accuracy is verified through independent meteorological audits conducted quarterly.</p>
                        </div>
                      </div>
                    </div>

                    {/* Category 2: Features & Functionality */}
                    <h2 className="h4 mb-3 fw-bold text-primary mt-5">Features & Functionality</h2>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What premium features does WeatherNow offer?
                        </button>
                      </h3>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Our premium subscription ($4.99/month) includes:</p>
                          <div className="row">
                            <div className="col-md-6">
                              <ul>
                                <li>Ad-free experience</li>
                                <li>Extended 15-day forecasts</li>
                                <li>Hourly historical weather data</li>
                                <li>Advanced radar maps</li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul>
                                <li>Custom alert thresholds</li>
                                <li>Professional weather widgets</li>
                                <li>Priority customer support</li>
                                <li>API access (limited calls)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="mt-3">All subscriptions come with a 14-day free trial.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          How do severe weather alerts work?
                        </button>
                      </h3>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Our alert system monitors:</p>
                          <ul>
                            <li>National Weather Service bulletins</li>
                            <li>Lightning detection networks</li>
                            <li>Doppler radar systems</li>
                            <li>Emergency broadcast systems</li>
                          </ul>
                          <p>Alert types include:</p>
                          <ul>
                            <li>Tornado warnings (issued 15-20 minutes before touchdown)</li>
                            <li>Flash flood alerts (based on rainfall rates and terrain)</li>
                            <li>Winter storm advisories (snow accumulation predictions)</li>
                            <li>Extreme heat/cold warnings (using wet-bulb calculations)</li>
                          </ul>
                          <p>Users can customize notification channels (app, email, SMS) in settings.</p>
                        </div>
                      </div>
                    </div>

                    {/* Category 3: Technical Support */}
                    <h2 className="h4 mb-3 fw-bold text-primary mt-5">Technical Support</h2>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Why is my location showing incorrect weather?
                        </button>
                      </h3>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Common causes and solutions:</p>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Issue</th>
                                <th>Solution</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>GPS inaccuracy</td>
                                <td>Refresh location or enter coordinates manually</td>
                              </tr>
                              <tr>
                                <td>Microclimate effects</td>
                                <td>Check nearby stations in the app</td>
                              </tr>
                              <tr>
                                <td>Data latency</td>
                                <td>Wait 5-10 minutes for updates</td>
                              </tr>
                              <tr>
                                <td>Device permissions</td>
                                <td>Enable location services in settings</td>
                              </tr>
                            </tbody>
                          </table>
                          <p>If issues persist, contact support with your device model and screenshots.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          How do I report a bug or error?
                        </button>
                      </h3>
                      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>To help us resolve issues quickly:</p>
                          <ol>
                            <li>Take a screenshot of the error</li>
                            <li>Note your device model and OS version</li>
                            <li>Include the time and location of occurrence</li>
                            <li>Describe what you were doing when it happened</li>
                          </ol>
                          <p>Submit reports via:</p>
                          <ul>
                            <li>In-app feedback form (Settings → Help)</li>
                            <li>Email: <a href="mailto:support@weathernow.com">support@weathernow.com</a></li>
                            <li>Twitter: <a href="https://twitter.com/WeatherNowSupport" target="_blank">@WeatherNowSupport</a></li>
                          </ul>
                          <p>Average response time: 2 business days.</p>
                        </div>
                      </div>
                    </div>

                    {/* Category 4: Data & Privacy */}
                    <h2 className="h4 mb-3 fw-bold text-primary mt-5">Data & Privacy</h2>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Where does WeatherNow get its data?
                        </button>
                      </h3>
                      <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>We aggregate data from multiple authoritative sources:</p>
                          <div className="row">
                            <div className="col-md-6">
                              <ul>
                                <li>NOAA (National Oceanic and Atmospheric Administration)</li>
                                <li>ECMWF (European Centre for Medium-Range Weather Forecasts)</li>
                                <li>National Weather Services (global)</li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul>
                                <li>Commercial satellite networks</li>
                                <li>Ground-based weather stations</li>
                                <li>Community weather stations (quality verified)</li>
                              </ul>
                            </div>
                          </div>
                          <p>Our proprietary AI models analyze this data to improve forecast accuracy by 12-15% compared to single-source providers.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          How is my personal data protected?
                        </button>
                      </h3>
                      <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>We implement multiple security measures:</p>
                          <ul>
                            <li><strong>Encryption:</strong> All data transmitted with TLS 1.3</li>
                            <li><strong>Anonymization:</strong> Location data is aggregated after 24 hours</li>
                            <li><strong>Compliance:</strong> GDPR, CCPA, and ISO 27001 certified</li>
                            <li><strong>Access Control:</strong> Strict employee access protocols</li>
                          </ul>
                          <p>We never sell personal data to third parties. For details, see our <Link href="/privacy" className="text-decoration-underline">Privacy Policy</Link>.</p>
                        </div>
                      </div>
                    </div>

                    {/* Category 5: Account & Billing */}
                    <h2 className="h4 mb-3 fw-bold text-primary mt-5">Account & Billing</h2>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          How do I cancel my premium subscription?
                        </button>
                      </h3>
                      <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Cancellation options:</p>
                          <ul>
                            <li><strong>iOS:</strong> Settings → Apple ID → Subscriptions</li>
                            <li><strong>Android:</strong> Google Play Store → Subscriptions</li>
                            <li><strong>Web:</strong> Account Settings → Billing</li>
                          </ul>
                          <p>Important notes:</p>
                          <ul>
                            <li>Cancellations take effect at the end of the billing cycle</li>
                            <li>Refunds available within 48 hours of accidental renewal</li>
                            <li>You retain premium access until the paid period ends</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          Do you offer enterprise or educational plans?
                        </button>
                      </h3>
                      <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>Yes, we provide specialized solutions:</p>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Plan</th>
                                <th>Features</th>
                                <th>Contact</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Enterprise</td>
                                <td>API access, white-label solutions, SLA guarantees</td>
                                <td>sales@weathernow.com</td>
                              </tr>
                              <tr>
                                <td>Education</td>
                                <td>Classroom tools, historical datasets, discounted rates</td>
                                <td>edu@weathernow.com</td>
                              </tr>
                              <tr>
                                <td>Nonprofit</td>
                                <td>Free basic access for qualified organizations</td>
                                <td>impact@weathernow.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="h4 mb-3">Still have questions?</h3>
                    <p>Our support team is available 24/7 to assist you.</p>
                    <Link href="/contact" className="btn btn-primary px-4">
                      Contact Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}