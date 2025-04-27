"use client";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | WeatherNow</title>
        <meta
          name="description"
          content="Review the Terms of Service for WeatherNow. Learn about your rights, responsibilities, and usage policies."
        />
        <meta
          name="keywords"
          content="WeatherNow Terms, Terms of Service, Weather App Policies, User Agreement"
        />
        <meta name="author" content="WeatherNow Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container my-5" role="main">
        <div className="card shadow-sm p-4">
          <h1 className="mb-4 text-primary">Terms of Service</h1>
          
          <p className="text-muted">
            Welcome to WeatherNow! These terms and conditions outline the rules and regulations for the use of our website.
          </p>

          <h2 className="h5 mt-4">1. Acceptance of Terms</h2>
          <p className="text-muted">
            By accessing this website, we assume you accept these terms in full. Do not continue to use WeatherNow if you do not accept all of the terms stated on this page.
          </p>

          <h2 className="h5 mt-4">2. Modifications</h2>
          <p className="text-muted">
            WeatherNow reserves the right to modify these terms at any time. Changes will be posted on this page with immediate effect.
          </p>

          <h2 className="h5 mt-4">3. User Responsibilities</h2>
          <p className="text-muted">
            You agree not to misuse the services provided by WeatherNow, including but not limited to unauthorized access, tampering, or data scraping.
          </p>

          <h2 className="h5 mt-4">4. Intellectual Property</h2>
          <p className="text-muted">
            All content and materials available on WeatherNow are the intellectual property of WeatherNow unless otherwise stated.
          </p>

          <h2 className="h5 mt-4">5. Contact Us</h2>
          <p className="text-muted">
            For any questions about these Terms, please contact us at: <a href="mailto:support@weathernow.com">rdawood379@gmail.com</a>
          </p>
        </div>
      </main>
    </>
  );
}
