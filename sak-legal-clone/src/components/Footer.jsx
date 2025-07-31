import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { title: 'Corporate Law', href: '#corporate' },
    { title: 'Civil Litigation', href: '#litigation' },
    { title: 'Real Estate Law', href: '#realestate' },
    { title: 'Family Law', href: '#family' },
    { title: 'Criminal Defense', href: '#criminal' },
    { title: 'Employment Law', href: '#employment' }
  ];

  const quickLinks = [
    { title: 'About Us', href: '#about' },
    { title: 'Our Team', href: '#team' },
    { title: 'Services', href: '#services' },
    { title: 'Case Studies', href: '#cases' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3>SAK Legal & Associates</h3>
                <p className="footer-tagline">Excellence in Legal Representation</p>
              </div>
              <p className="footer-description">
                With over 25 years of experience, we provide comprehensive legal solutions 
                for individuals and businesses. Our commitment to excellence and client 
                satisfaction has made us one of the most trusted law firms in the region.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="footer-section">
              <h4 className="footer-heading">Practice Areas</h4>
              <ul className="footer-links">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a href={area.href} className="footer-link">
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Information</h4>
              <div className="contact-details">
                <div className="contact-detail">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <p>123 Legal Street, Business District</p>
                    <p>Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <FaPhone className="contact-icon" />
                  <div>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <p>info@saklegalassociates.com</p>
                    <p>contact@saklegalassociates.com</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <FaClock className="contact-icon" />
                  <div>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="emergency-contact">
                <h5>24/7 Emergency Legal Assistance</h5>
                <a href="tel:+919876543212" className="emergency-number">
                  +91 98765 43212
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Stay Updated with Legal Insights</h4>
              <p>Subscribe to our newsletter for the latest legal news and updates</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} SAK Legal & Associates. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy" className="legal-link">Privacy Policy</a>
                <a href="#terms" className="legal-link">Terms of Service</a>
                <a href="#disclaimer" className="legal-link">Legal Disclaimer</a>
              </div>
            </div>
            
            <div className="certifications">
              <span>Licensed by the Bar Council of Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;