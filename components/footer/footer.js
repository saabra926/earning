"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram,
  faGithub,
  faWhatsapp,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer-chocolate" role="contentinfo">
      <div className="container">
        <div className="footer-content">

          {/* About Us */}
          <div className="footer-section">
            <h6 className="footer-heading">About WeatherNow</h6>
            <div className="footer-logo">WeatherNow</div>
            <p className="footer-text">
              Providing accurate, real-time weather forecasts, news, and alerts to keep you safe and informed worldwide.
            </p>
            <div className="social-links">
              <Link
                href="https://www.instagram.com/_vibe_with_dawood?igsh=MW5lenhobzZxcHM4Zg=="
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
              <Link 
                href="https://github.com/Dawood0426" 
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Link>
              <Link 
                href="https://wa.me/03144885177" 
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </Link>
              <Link 
                href="https://www.facebook.com/itx.rajpootdawood" 
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/blogs" className="footer-link">Blogs</Link></li>
              <li><Link href="/topstories" className="footer-link">Top Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link href="/faq" className="footer-link">FAQs</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h6 className="footer-heading">Contact Us</h6>
            <ul className="footer-contact">
              <li className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>Faisalabad, GM Abad, PK</span>
              </li>
              <li className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>rdawood379@gmail.com</span>
              </li>
              <li className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span>+92 314 4885177</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 <strong>WeatherNow</strong>. All rights reserved.
          </div>
          <div className="credits">
            Designed and developed by <Link href="https://wa.me/03144885177" target="_blank" className="creator-link">Dawood Rehman</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}