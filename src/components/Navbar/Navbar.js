// src/components/Navbar/Navbar.js
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { path: '/about', label: 'About Us' },
    { path: '/brand-campaigns', label: 'Brand Campaigns' },
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
  src="/Images/logo%20homepage/logo.png" 
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
            
            <Link to="/book" className="book-now-btn">
              <span>Book Now</span>
            </Link>
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
          <Link 
            to="/book" 
            className="mobile-book-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;