"use client";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | WeatherNow - Your Trusted Weather Source</title>
        <meta
          name="description"
          content="WeatherNow's comprehensive privacy policy detailing how we collect, use, and protect your personal information in compliance with GDPR and other privacy regulations."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h1 className="card-title display-4 fw-bold mb-3 text-primary">Privacy Policy</h1>
                  <p className="text-muted fs-5">Last updated: June 10, 2025</p>
                </div>

                <section className="mb-5">
                  <p className="lead">
                    Welcome to <strong>WeatherNow</strong> ("we," "our," or "us"). We are committed to protecting 
                    your privacy and ensuring the security of your personal information. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you visit our 
                    website <Link href="/" className="text-decoration-underline">weathernow.com</Link>.
                  </p>
                  <p>
                    By accessing or using our service, you agree to the collection and use of information in 
                    accordance with this policy. If you disagree with any part of this policy, please do not 
                    use our website.
                  </p>
                </section>

                <hr className="my-4" />

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">1. Information Collection and Use</h2>
                  <p>
                    We collect several different types of information for various purposes to provide and 
                    improve our service to you.
                  </p>
                  
                  <h3 className="h4 mt-4 mb-3">Personal Data</h3>
                  <p>
                    While using our service, we may ask you to provide us with certain personally 
                    identifiable information that can be used to contact or identify you ("Personal Data"). 
                    This may include, but is not limited to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Email address</li>
                    <li className="list-group-item">First name and last name</li>
                    <li className="list-group-item">Cookies and Usage Data (see below)</li>
                    <li className="list-group-item">Location data (for personalized weather reports)</li>
                  </ul>
                  
                  <h3 className="h4 mt-4 mb-3">Usage Data</h3>
                  <p>
                    We may also collect information about how the service is accessed and used ("Usage Data"). 
                    This Usage Data may include:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Your computer's Internet Protocol address (IP address)</li>
                    <li className="list-group-item">Browser type and version</li>
                    <li className="list-group-item">Pages of our service that you visit</li>
                    <li className="list-group-item">Time and date of your visit</li>
                    <li className="list-group-item">Time spent on those pages</li>
                    <li className="list-group-item">Unique device identifiers</li>
                    <li className="list-group-item">Other diagnostic data</li>
                  </ul>
                  
                  <h3 className="h4 mt-4 mb-3">Tracking & Cookies Data</h3>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our service and 
                    hold certain information to improve your experience:
                  </p>
                  <div className="table-responsive mb-3">
                    <table className="table table-bordered">
                      <thead className="table-light">
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

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">2. Use of Collected Information</h2>
                  <p>WeatherNow uses the collected data for various purposes:</p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">To provide and maintain our service</li>
                    <li className="list-group-item">To notify you about changes to our service</li>
                    <li className="list-group-item">To allow you to participate in interactive features</li>
                    <li className="list-group-item">To provide customer support</li>
                    <li className="list-group-item">To gather analysis or valuable information for improvement</li>
                    <li className="list-group-item">To monitor usage of our service</li>
                    <li className="list-group-item">To detect, prevent, and address technical issues</li>
                    <li className="list-group-item">To provide personalized weather information based on location</li>
                    <li className="list-group-item">To deliver targeted advertisements (via AdSense and other partners)</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">3. Data Sharing and Disclosure</h2>
                  <p>
                    We may share your information with third parties only in the following circumstances:
                  </p>
                  
                  <h3 className="h4 mt-4 mb-3">Service Providers</h3>
                  <p>
                    We employ third-party companies and individuals to facilitate our service ("Service Providers"), 
                    provide the service on our behalf, perform service-related services, or assist us in analyzing 
                    how our service is used. These third parties have access to your Personal Data only to perform 
                    these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                  
                  <h3 className="h4 mt-4 mb-3">Advertising Partners</h3>
                  <p>
                    We work with third-party advertising partners, including Google AdSense, to display ads on our 
                    service. These partners may use cookies and similar technologies to collect information about 
                    your activities on this and other websites to provide you with targeted advertising.
                  </p>
                  <p>
                    You can opt out of targeted advertising from many providers by visiting:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <Link href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                        Digital Advertising Alliance
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                        Network Advertising Initiative
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                        Google Ads Settings
                      </Link>
                    </li>
                  </ul>
                  
                  <h3 className="h4 mt-4 mb-3">Legal Requirements</h3>
                  <p>
                    WeatherNow may disclose your Personal Data in the good faith belief that such action is necessary to:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Comply with a legal obligation</li>
                    <li className="list-group-item">Protect and defend the rights or property of WeatherNow</li>
                    <li className="list-group-item">Prevent or investigate possible wrongdoing in connection with the service</li>
                    <li className="list-group-item">Protect the personal safety of users of the service or the public</li>
                    <li className="list-group-item">Protect against legal liability</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">4. Data Security</h2>
                  <p>
                    The security of your data is important to us. We implement appropriate technical and 
                    organizational measures to protect against unauthorized access, alteration, disclosure, 
                    or destruction of your personal information. However, no method of transmission over 
                    the Internet or method of electronic storage is 100% secure, and we cannot guarantee 
                    absolute security.
                  </p>
                  <p>
                    Our security measures include:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">SSL/TLS encryption for data transmission</li>
                    <li className="list-group-item">Regular security audits</li>
                    <li className="list-group-item">Access controls to personal data</li>
                    <li className="list-group-item">Secure server infrastructure</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">5. International Data Transfers</h2>
                  <p>
                    Your information, including Personal Data, may be transferred to — and maintained on — 
                    computers located outside of your state, province, country, or other governmental 
                    jurisdiction where the data protection laws may differ from those of your jurisdiction.
                  </p>
                  <p>
                    If you are located outside the United States and choose to provide information to us, 
                    please note that we transfer the data, including Personal Data, to the United States 
                    and process it there.
                  </p>
                  <p>
                    Your consent to this Privacy Policy followed by your submission of such information 
                    represents your agreement to that transfer.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">6. Your Data Protection Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>Right to Access:</strong> Request copies of your personal data
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Rectification:</strong> Request correction of inaccurate data
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Erasure:</strong> Request deletion of your personal data
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Restrict Processing:</strong> Request limitation of data processing
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Data Portability:</strong> Request transfer of your data to another organization
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Object:</strong> Object to our processing of your personal data
                    </li>
                    <li className="list-group-item">
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information in the 
                    "Contact Us" section below. We may require you to verify your identity before 
                    responding to such requests.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">7. Third-Party Services</h2>
                  <p>
                    Our service may contain links to third-party websites or services that are not owned 
                    or controlled by WeatherNow. We have no control over, and assume no responsibility 
                    for, the content, privacy policies, or practices of any third-party sites or services.
                  </p>
                  <p>
                    We strongly advise you to review the privacy policy of every site you visit.
                  </p>
                  <p>
                    Some third-party services we use include:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>Google Analytics:</strong> For analyzing website traffic
                    </li>
                    <li className="list-group-item">
                      <strong>Google AdSense:</strong> For displaying advertisements
                    </li>
                    <li className="list-group-item">
                      <strong>Cloudflare:</strong> For security and performance
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">8. Children's Privacy</h2>
                  <p>
                    Our service does not address anyone under the age of 13 ("Children"). We do not 
                    knowingly collect personally identifiable information from children under 13. If you 
                    are a parent or guardian and you are aware that your child has provided us with 
                    Personal Data, please contact us. If we become aware that we have collected Personal 
                    Data from children without verification of parental consent, we take steps to remove 
                    that information from our servers.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h3 mb-3 fw-bold text-primary">9. Changes to This Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to 
                    this Privacy Policy are effective when they are posted on this page.
                  </p>
                </section>

                <section className="mb-4">
                  <h2 className="h3 mb-3 fw-bold text-primary">10. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>By email:</strong> privacy@weathernow.com
                    </li>
                    <li className="list-group-item">
                      <strong>Through our website:</strong>{" "}
                      <Link href="/contact" className="text-decoration-underline">
                        Contact Page
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <strong>By mail:</strong> 123 Weather Lane, Suite 100, San Francisco, CA 94107
                    </li>
                  </ul>
                </section>

                <div className="d-flex justify-content-between mt-5">
                  <Link href="/terms" className="btn btn-outline-primary">
                    View Terms of Service
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