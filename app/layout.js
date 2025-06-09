import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "WeatherNow | Live Forecasts & Climate Data (2024)",
  description: "Accurate real-time weather forecasts for any city. Check temperature, humidity, wind speed, and expert weather tips. Updated every hour.",
  keywords: "live weather, weather forecast today, humidity levels, wind speed, local climate, weather alerts",
  authors: [{ name: "WeatherNow Team" }],
  metadataBase: new URL("https://www.exploreweather.site/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "WeatherNow: Instant Weather Updates",
    description: "Accurate real-time weather forecasts for any city. Check temperature, humidity, wind speed, and expert weather tips.",
    url: "https://www.exploreweather.site/",
    siteName: "WeatherNow",
    images: [
      {
        url: "/weather-cover.jpg",
        width: 1200,
        height: 630,
        alt: "WeatherNow Dashboard Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeatherNow: Instant Weather Updates",
    description: "Accurate real-time weather forecasts for any city.",
    images: ["/weather-cover.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon with multiple sizes */}
        <link rel="icon" href="/favicon.jpg" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        <meta name="google-site-verification" content="OU68Q3H8nSu8nYkDqkvPKPBNH8WmzHiPmqUFyjX12oE" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9296013700822279"
          crossOrigin="anonymous"
        />

        {/* Bootstrap CSS with fallback */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5ZRTMQ187Y" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZRTMQ187Y');
          `}
        </Script>

        {/* Bootstrap JS (optimized loading) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}