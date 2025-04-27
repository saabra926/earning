import Head from 'next/head';

export default function FAQs() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | WeatherNow - Your Trusted Weather App</title>
        <meta
          name="description"
          content="Find answers about WeatherNow's weather updates, alerts, offline access, app features, data accuracy, privacy policies, and how you can customize your weather experience."
        />
        <meta
          name="keywords"
          content="WeatherNow FAQs, weather updates, offline weather access, real-time weather alerts, global weather coverage, weather forecast accuracy, weather notifications, weather API, mobile weather app, privacy and security weather apps"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WeatherNow Team" />
        <meta property="og:title" content="FAQs | WeatherNow" />
        <meta property="og:description" content="Get detailed answers to all your questions about WeatherNow's services, updates, alerts, and features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/faqs" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/faqs" />
      </Head>

      <main className="min-vh-100 bg-light py-5 px-3">
        <div className="container">
          <h1 className="text-center fw-bold mb-5 text-dark display-5">
            Frequently Asked Questions
          </h1>

          <section className="accordion" id="faqAccordion">

            {/* Existing 6 FAQs */}
            {/* -- FAQ 1 to FAQ 6 already inserted above -- */}

            {/* Additional FAQs */}

            {/* FAQ 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Can I customize my weather notifications?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, you can set custom notifications for specific weather conditions like rain, snow, or temperature changes via the app settings.
                </div>
              </div>
            </div>

            {/* FAQ 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  How does WeatherNow protect my data?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  WeatherNow uses end-to-end encryption for all user data and adheres to strict GDPR and CCPA compliance to safeguard your privacy.
                </div>
              </div>
            </div>

            {/* FAQ 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Does the app support severe weather warnings?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Absolutely. WeatherNow issues real-time severe weather alerts such as tornado warnings, hurricanes, and flood advisories based on your location.
                </div>
              </div>
            </div>

            {/* FAQ 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  Which devices are supported by WeatherNow?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  WeatherNow is available on iOS, Android, and via a responsive web app, optimized for phones, tablets, and desktop computers.
                </div>
              </div>
            </div>

            {/* FAQ 11 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEleven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  Can I check air quality with WeatherNow?
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                aria-labelledby="headingEleven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, WeatherNow provides real-time air quality index (AQI) updates, pollen counts, and pollution alerts for many regions.
                </div>
              </div>
            </div>

            {/* FAQ 12 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwelve">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  How can I report a weather issue or bug?
                </button>
              </h2>
              <div
                id="collapseTwelve"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwelve"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can report issues directly via the app under the “Feedback” section, or contact our support team through the website.
                </div>
              </div>
            </div>

            {/* FAQ 13 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThirteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  Can I track multiple cities at once?
                </button>
              </h2>
              <div
                id="collapseThirteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingThirteen"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Definitely! WeatherNow lets you add and monitor weather conditions in multiple cities simultaneously, perfect for travelers and remote workers.
                </div>
              </div>
            </div>

            {/* FAQ 14 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  Is there a dark mode available?
                </button>
              </h2>
              <div
                id="collapseFourteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourteen"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, WeatherNow offers a sleek dark mode to reduce eye strain, easily toggled in your app settings.
                </div>
              </div>
            </div>

            {/* FAQ 15 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFifteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFifteen"
                  aria-expanded="false"
                  aria-controls="collapseFifteen"
                >
                  How often is the app updated?
                </button>
              </h2>
              <div
                id="collapseFifteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFifteen"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  WeatherNow receives regular updates every month to introduce new features, enhance performance, and ensure data security.
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}
