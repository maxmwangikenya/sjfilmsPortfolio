import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';
import './Footer.css';
import ContactForm from '../ContactForm/ContactForm';

function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // FIXED: Displays only 2026
  const yearDisplay = '2026';

  const quickLinks = [
    { path: '/brand-campaigns', label: 'Brand Campaigns' },
    { path: '/cooperative-events', label: 'Corporate Events' },
    { path: '/documentaries', label: 'Documentaries' },
    { path: '/events-after-movie', label: 'Events' }
  ];

  const services = [
    'Video Production',
    'Event Coverage',
    'Documentary Films',
    'Commercial Ads',
    'Post Production',
    'Photography'
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/sjfilms_ke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjfilmkenya?si=C0XMpciXKxxhSZ-N', label: 'YouTube' }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-grid">
              <div className="footer-column">
                <div className="footer-logo-section">
                  <img 
                    src="/Images/logo homepage/logo.png" 
                    alt="SJ Films Logo" 
                    className="footer-logo"
                  />
                  <p className="footer-tagline">
                    Creating stunning visual stories that captivate and inspire. 
                    Your vision, our expertise.
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="get-in-touch-btn"
                >
                  <span>Get In Touch</span>
                  <div className="btn-glow"></div>
                </button>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/about" className="footer-link">About Us</Link>
                  </li>
                  <li>
                    <Link to="/my-team" className="footer-link">Our Team</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Our Services</h3>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="footer-link">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Contact Us</h3>
                <ul className="footer-contact">
                  <li>
                    <MapPin size={18} />
                    <span>Nairobi, Kenya</span>
                  </li>
                  <li>
                    <Phone size={18} />
                    <span>+254 702 700 301</span>
                  </li>
                  <li>
                    <Mail size={18} />
                    <span>sjfilmskenya@gmail.com</span>
                  </li>
                </ul>

                <div className="social-links">
                  {socialLinks.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.label}
                      >
                        <SocialIcon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {yearDisplay} SJ Films. All rights reserved.
              </p>
              <div className="footer-legal">
                <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                <span className="separator">•</span>
                <Link to="/terms" className="legal-link">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="footer-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
}

export default Footer;