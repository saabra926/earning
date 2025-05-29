"use client";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white pt-5 pb-4" role="contentinfo">
        <div className="container text-md-start">
          <div className="row text-center text-md-start">

            {/* About Us */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">About Us</h6>
              <p>WeatherNow provides accurate, real-time weather forecasts, news, and alerts to keep you safe and informed worldwide.</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
              <p><Link href="https://www.instagram.com/_vibe_with_dawood?igsh=MW5lenhobzZxcHM4Zg==" target="_blank" className="text-white">Instagram</Link></p>
              <p><Link href="https://github.com/Dawood0426" target="_blank" className="text-white">Github</Link></p>
              <p><Link href="https://wa.me/03144885177" target="_blank" className="text-white">WhatsApp</Link></p>
              <p><Link href="https://www.facebook.com/itx.rajpootdawood" className="text-white">Facebook</Link></p>
            </div>

            {/* Services */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p><Link href="/about" className="text-white">About</Link></p>
              <p><Link href="/blogs" className="text-white">Blogs</Link></p>
              <p><Link href="/faq" className="text-white">FAQs</Link></p>
              <p><Link href="/contact" className="text-white">Contact</Link></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Faisalabad, GM Abad, PK</p>
              <p><i className="fas fa-envelope mr-3"></i> rdawood379@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> +92 314 4885177</p>
              <p><i className="fas fa-print mr-3"></i> +92 314 4885177</p>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-7 col-lg-8">
              <p className="text-center small">
                © 2025 <strong>WeatherNow</strong>. All rights reserved. Designed and developed by <a href="https://wa.me/03144885177" target="_blank" className="text-white fw-bold">Dawood Rehman</a>.
              </p>
              <div className="d-flex justify-content-center">
                <Link href="/privacy" className="text-white me-3 small">Privacy Policy</Link>
                <Link href="/terms" className="text-white small">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
