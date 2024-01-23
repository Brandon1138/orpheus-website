import React from 'react';
import '../styles/Footer.css';
import facebookIcon from '../images/Facebook-Icon.png'; 
import twitterIcon from '../images/Twitter-Icon.png'; 
import instagramIcon from '../images/Instagram-Icon.png'; 
import linkedinIcon from '../images/Linked-In-Icon.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-section left-section">
        <div className="vertical-stack">
          <div className="footer-column legal">
            <h4>Legal information:</h4>
            <a href="/privacy" className="footer-link legal-info">Privacy Policy</a>
            <a href="/terms" className="footer-link legal-info">Terms & Conditions</a>
            <a href="/disclaimer" className="footer-link legal-info">Disclaimer</a>
          </div>

          <div className="footer-column subscribe email-subscription">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button">A</button>
          </div>
        </div>
      </div>

      <div className="footer-section center-section">
        <div className="footer-column brand">
          <div className="center-stack">
            <h1>ORPHEUS</h1>
            <p className="footer-tagline">STEP INTO YOUR NEXT ESCAPE</p>
            <div className="footer-buttons">
              <a href="/" className="footer-button">Home</a>
              <a href="/destinations" className="footer-button">Destinations</a>
              <a href="/experiences" className="footer-button">Experiences</a>
              <a href="/testimonials" className="footer-button">Testimonials</a>
            </div>
            <div className="footer-bottom">
              <p>Copyright &copy; {currentYear} Orpheus Travel Agency. Designed & Developed by Brandon Aron</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section right-section">
        <div className="footer-column contact">
          <h4>Contact Information:</h4>
          <div className="contact-info-wrapper">
            <p className="contact-info">Address: 123 Main Street, 12345</p>
            <p className="contact-info">Phone: 1-800-555-5555</p>
            <p className="contact-info">Email: info@travelagency.com</p>
          </div>
          <div className="social-media-icons">
            {/* Replace these with your actual social media icon components */}
            <a href="https://facebook.com" className="social-icon">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;