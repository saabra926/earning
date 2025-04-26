import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>


        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <Script src="your-script.js" defer></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></Script>



        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5ZRTMQ187Y"></Script>

        <Script id="google-analytics">{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5ZRTMQ187Y');`}</Script>


      </head>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
