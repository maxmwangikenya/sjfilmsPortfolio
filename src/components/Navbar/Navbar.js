import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import ContactForm from '../ContactForm/ContactForm';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/brand-campaigns', label: 'Campaigns' },
    { path: '/cooperative-events', label: 'Corporate Events' },
    { path: '/documentaries', label: 'Documentaries' },
    { path: '/my-team', label: 'Team' }
  ];

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo - Far Left */}
          <Link to="/" className="logo-link">
            <img 
              src="/Images/logo homepage/logo.png" 
              alt="SJ Films Logo" 
              className="navbar-logo"
            />
          </Link>

          {/* Desktop Navigation - Far Right */}
          <div className="nav-desktop">
            <div className="nav-links-group">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Desktop Book Now Button - Opens Contact Form */}
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="book-now-btn"
            >
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Book Now Button - Opens Contact Form */}
          <button 
            className="mobile-book-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsContactFormOpen(true);
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
}

export default Navbar;