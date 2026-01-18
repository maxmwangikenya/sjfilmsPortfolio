// src/components/AboutUs/AboutUs.js

import { useState } from 'react';
import { 
  Camera, 
  Film, 
  Globe, 
  Users, 
  Award, 
  MapPin, 
  Play,
  Zap,
  Target,
  Heart,
  Briefcase
} from 'lucide-react';
import './About.css';

function AboutUs() {
  // Note: removed hoveredClient since it's not being used
  // const [hoveredClient, setHoveredClient] = useState(null);

  const stats = [
    { icon: Film, number: '500+', label: 'Projects Delivered' },
    { icon: Users, number: '20+', label: 'Major Clients' },
    { icon: Globe, number: '15+', label: 'Countries Reached' },
    { icon: Award, number: '10+', label: 'Awards Won' }
  ];

  const services = [
    {
      icon: Film,
      title: 'Documentary Production',
      description: 'Compelling documentary storytelling that captures authentic narratives and preserves impactful moments.'
    },
    {
      icon: Briefcase,
      title: 'Corporate Videography',
      description: 'Professional corporate content that elevates your brand and communicates your message effectively.'
    },
    {
      icon: Camera,
      title: 'Cinematic Photography',
      description: 'Stunning photography that captures the essence of your story with artistic precision.'
    },
    {
      icon: Target,
      title: 'Brand Campaigns',
      description: 'Creative campaigns that resonate with your audience and drive meaningful engagement.'
    }
  ];

  // Using absolute paths from the public folder
  const clients = [
    {
      name: 'Youth Plus Africa',
      subtitle: 'Mastercard Foundation',
      logo: '/Images/About%20us/youth%20plus%20africa%20logo.png'
    },
    {
      name: 'Development Dynamics',
      logo: '/Images/About%20us/development-dynamic.png'
    },
    {
      name: 'Tumaini Trust Kenya',
      logo: '/Images/About%20us/tumaini-trust-kenya.jpg'
    },
    {
      name: 'YellowMoon Ltd',
      logo: '/Images/About%20us/yellow-moon-td.png'
    },
    {
      name: 'Kenya Wine Agencies Limited',
      subtitle: 'KWAL',
      logo: '/Images/About%20us/kenya-wine-agency%20ltd.jpg'
    },
    {
      name: 'Densu',
      logo: '/Images/About%20us/densu.png'
    },
    {
      name: 'Safaricom PLC',
      logo: '/Images/About%20us/safaricom.png'
    },
    {
      name: 'Darling Africa',
      logo: '/Images/About%20us/darling-africa.png.png'
    },
    {
      name: 'Kenya Wildlife Service',
      subtitle: 'KWS',
      logo: '/Images/About%20us/kenya-wildlife-service.jfif'
    },
    {
      name: 'Gigiri Social Club',
      logo: '/Images/About%20us/gigiri-social-club.jfif'
    },
    {
      name: 'Ministry of Tourism',
      logo: '/Images/About%20us/ministry-of-tourism.png'
    },
    {
      name: 'Wildlife Training and Research Institute',
      subtitle: 'WRTI',
      logo: '/Images/About%20us/wildlife%20training-and-research-institute.png'
    },
    {
      name: 'Heineken',
      subtitle: 'HA',
      logo: '/Images/About%20us/heineken-logo-png.png'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every project, ensuring each story is told with authenticity and emotion.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of production, from concept to final delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, treating every project as a partnership towards shared success.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge techniques and creative approaches to deliver fresh, impactful content.'
    }
  ];

  // Helper function to handle image loading with fallback
  const handleImageError = (e, clientName) => {
    e.target.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'client-logo-placeholder';
    placeholder.textContent = clientName.charAt(0);
    placeholder.title = clientName;
    e.target.parentElement.appendChild(placeholder);
  };

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <MapPin className="hero-icon" size={60} />
          <h1 className="hero-title">About SJ Films</h1>
          <p className="hero-location">
            <MapPin size={20} />
            Nairobi, Kenya
          </p>
          <p className="hero-description">
            A creative production company specializing in cinematic videography and photography,
            delivering visually compelling content across Africa and globally.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <StatIcon className="stat-icon" size={40} />
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-content">
          <Film className="mission-icon" size={50} />
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            We bring proven experience delivering high-impact documentary and corporate storytelling 
            for development, corporate, and public-sector organizations, with the operational capacity 
            to deploy teams across Kenya and scale across Africa.
          </p>
          <p className="mission-text">
            Backed by a team of talented creatives, we bring your stories and visions to life, 
            transforming ideas into powerful visual narratives that inspire and engage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive production services tailored to your needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <ServiceIcon className="service-icon" size={36} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => {
            const ValueIcon = value.icon;
            return (
              <div key={index} className="value-card">
                <ValueIcon className="value-icon" size={40} />
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="section-header">
          <h2 className="section-title">Trusted By Leading Organizations</h2>
          <p className="section-subtitle">
            We have delivered services to a diverse portfolio of corporate, development, 
            and public-sector clients
          </p>
        </div>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card"
              // Removed hover event handlers since they're not being used
            >
              <div className="client-logo-wrapper">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="client-logo"
                  loading="lazy"
                  onError={(e) => handleImageError(e, client.name)}
                />
              </div>
              <div className="client-info">
                <h4 className="client-name">{client.name}</h4>
                {client.subtitle && (
                  <p className="client-subtitle">{client.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <Play className="cta-icon" size={60} />
          <h2 className="cta-title">Ready to Tell Your Story?</h2>
          <p className="cta-text">
            Let's collaborate to create something extraordinary. Whether it's a documentary, 
            corporate video, or brand campaign, we have the expertise and passion to bring 
            your vision to life.
          </p>
          <button className="cta-button">
            <span>Get Started</span>
            <Zap size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;