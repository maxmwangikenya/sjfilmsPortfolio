import React from 'react';
import {
  Camera,
  Film,
  Edit3,
  Award,
  Users,
  MapPin,
  Briefcase,
  Target,
  Heart,
  Zap
} from 'lucide-react';
import './About.css';

function About() {
  const stats = [
    { icon: Film, number: '500+', label: 'Projects Delivered' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '10+', label: 'Awards Won' },
    { icon: Zap, number: '5+', label: 'Years Experience' }
  ];

  const services = [
    {
      icon: Film,
      title: 'Documentary Production',
      description:
        'Compelling storytelling that captures authentic narratives and preserves impactful moments.'
    },
    {
      icon: Briefcase,
      title: 'Corporate Videography',
      description: 'Professional content that elevates your brand and communicates effectively.'
    },
    {
      icon: Camera,
      title: 'Cinematic Photography',
      description: 'Stunning photography that captures the essence of your story with artistic precision.'
    },
    {
      icon: Target,
      title: 'Brand Campaigns',
      description: 'Creative campaigns that resonate with audiences and drive meaningful engagement.'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Solo Ndungu',
      role: 'Director | Videographer | Editor',
      image: '/Images/myTeam/Solo Ndungu Director videographer editor.JPG',
      bio: 'Visionary director with a passion for storytelling through compelling visuals.',
      specialties: ['Creative Direction', 'Cinematography', 'Post-Production'],
      icon: Film
    },
    {
      id: 2,
      name: 'Ian Wesanza',
      role: 'Photographer',
      image: '/Images/myTeam/Ian Wesanga videographer.jpg',
      bio: 'Skilled videographer with an eye for detail and capturing authentic moments.',
      specialties: ['Camera Operation', 'Live Events', 'Documentary Style'],
      icon: Camera
    },
    {
      id: 3,
      name: 'Kevin Mwangi',
      role: 'Videographer',
      image: '/Images/myTeam/Kevin Mwangi videographer.JPG',
      bio: 'Creative videographer bringing energy and innovation to every project.',
      specialties: ['Brand Content', 'Commercial Videos', 'Creative Shots'],
      icon: Edit3
    },
    {
      id: 4,
      name: 'Shadrack Katuit',
      role: 'Video Editor',
      image: '/Images/myTeam/Shadrack-Katuit.jpeg',
      bio: 'Detail-oriented editor transforming raw footage into polished, engaging stories.',
      specialties: ['Color Grading', 'Motion Graphics', 'Audio Syncing'],
      icon: Edit3
    }
  ];

  const clients = [
    {
      name: 'Youth Plus Africa',
      subtitle: 'Mastercard Foundation',
      logo: '/Images/About%20us/youth%20plus%20africa%20logo.png'
    },
    {
      name: 'Development Dynamics',
      logo: '/Images/About%20us/development%20dynamic.png'
    },
    {
      name: 'Tumaini Trust Kenya',
      logo: '/Images/About%20us/tumaini%20trust%20kenya.jpg'
    },

    // ✅ Dark badge for white logo
    {
      name: 'YellowMoon Ltd',
      logoTheme: 'dark',
      logo: '/Images/About%20us/yellow%20moon%20ltd%20(2).png'
    },

    {
      name: 'Kenya Wine Agencies Limited',
      subtitle: 'KWAL',
      logo: '/Images/About%20us/kenya%20wine%20agency%20ltd.jpg'
    },
    {
      name: 'Densu',
      logo: '/Images/About%20us/Densu.png'
    },
    {
      name: 'Safaricom PLC',
      logo: '/Images/About%20us/safaricom.png'
    },
    {
      name: 'Darling Africa',
      logo: '/Images/About%20us/Darling%20africa.png'
    },
    {
      name: 'Kenya Wildlife Service',
      subtitle: 'KWS',
      logo: '/Images/About%20us/kenya%20wildlife%20service.jfif'
    },

    // ✅ Dark badge for white logo
    {
      name: 'Gigiri Social Club',
      logoTheme: 'dark',
      logo: '/Images/About%20us/gigiri%20social%20club.png'
    },

    {
      name: 'Ministry of Tourism',
      logo: '/Images/About%20us/ministry%20of%20tourism.png'
    },
    {
      name: 'Wildlife Training and Research Institute',
      subtitle: 'WRTI',
      logo: '/Images/About%20us/wildlife%20training%20and%20research%20institute.png'
    },
    {
      name: 'Heineken',
      logo: '/Images/About%20us/heineken-logo-png%20(2).png'
    },
    {
      name: 'Savara',
      logo: '/Images/About%20us/Savanna-logo-2.png'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every project with authenticity and emotion.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards from concept to final delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients as partners towards shared success.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge techniques to deliver fresh, impactful content.'
    }
  ];

  const isSvg = (path = '') => path.toLowerCase().trim().endsWith('.svg');

  const handleImageError = (e, clientName) => {
    e.target.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'client-logo-placeholder';
    placeholder.textContent = clientName.charAt(0);
    placeholder.title = clientName;
    e.target.parentElement.appendChild(placeholder);
  };

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="company-logo-wrapper">
            <img
              src="/Images/logo%20homepage/logo.png"
              alt="SJ Films Logo"
              className="company-logo"
            />
          </div>

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

      <section className="mission-section">
        <div className="mission-content">
          <Film className="mission-icon" size={50} />
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            We bring proven experience delivering high-impact documentary and corporate storytelling
            for development, corporate, and public-sector organizations, with the operational capacity
            to deploy teams across Kenya and scale across Africa.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
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

      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
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

      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Our Creative Team</h2>
          <p className="section-subtitle">
            Passionate storytellers, innovators, and visual artists dedicated to excellence
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="image-wrapper">
                    <img src={member.image} alt={member.name} className="member-image" />
                    <div className="image-overlay">
                      <member.icon className="member-icon" size={48} />
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <member.icon className="back-icon" size={40} />
                    <h3 className="back-name">{member.name}</h3>
                    <p className="back-bio">{member.bio}</p>
                    <div className="specialties">
                      <h4 className="specialties-title">Specialties:</h4>
                      <ul className="specialties-list">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx} className="specialty-item">
                            <span className="specialty-bullet">•</span>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="clients-section">
        <div className="section-header">
          <h2 className="section-title">Trusted By Leading Organizations</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => {
            const svg = isSvg(client.logo);

            return (
              <div key={index} className="client-card">
                <div
                  className={[
                    'client-logo-wrapper',
                    svg ? 'is-svg' : '',
                    client.logoTheme === 'dark' ? 'logo-dark' : ''
                  ].join(' ')}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className={`client-logo ${svg ? 'svg-logo' : ''}`}
                    loading="lazy"
                    onError={(e) => handleImageError(e, client.name)}
                  />
                </div>

                <div className="client-info">
                  <h4 className="client-name">{client.name}</h4>
                  {client.subtitle && <p className="client-subtitle">{client.subtitle}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
