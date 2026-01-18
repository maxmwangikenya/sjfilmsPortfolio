// src/components/MyTeam/MyTeam.js

import React from 'react'; // Removed the unused { useState } import
import { Camera, Film, Edit3, Award, Users, Zap } from 'lucide-react';
import './MyTeam.css';

function MyTeam() {
  // Removed the unused 'hoveredMember' state declaration

  const teamMembers = [
    {
      id: 1,
      name: 'Solo Ndungu',
      role: 'Director | Videographer | Editor',
      image: '/Images/myTeam/Solo Ndungu Director videographer editor.JPG',
      bio: 'Visionary director with a passion for storytelling through compelling visuals. Expert in crafting cinematic experiences that captivate audiences.',
      specialties: ['Creative Direction', 'Cinematography', 'Post-Production'],
      icon: Film,
      color: '#ff6b00'
    },
    {
      id: 2,
      name: 'Ian Wesanza',
      role: 'Photographer',
      image: '/Images/myTeam/Ian Wesanga videographer.jpg',
      bio: 'Skilled videographer with an eye for detail and motion. Specializes in dynamic camera work and capturing authentic moments.',
      specialties: ['Camera Operation', 'Live Events', 'Documentary Style'],
      icon: Camera,
      color: '#00a8ff'
    },
    {
      id: 3,
      name: 'Kevin Mwangi',
      role: 'Videographer',
      image: '/Images/myTeam/Kevin Mwangi videographer.JPG',
      bio: 'Creative videographer bringing energy and innovation to every project. Masters the art of visual storytelling through unique perspectives.',
      specialties: ['Brand Content', 'Commercial Videos', 'Creative Shots'],
      icon: Edit3,
      color: '#ffd700'
    },
    {
      id: 4,
      name: 'Shadrack Katuit',
      role: 'Video Editor',
      image: '/Images/myTeam/Shadrack-Katuit.jpeg',
      bio: 'Detail-oriented video editor with a sharp eye for pacing, rhythm, and narrative flow. Skilled in transforming raw footage into polished, engaging stories.',
      specialties: ['Color Grading', 'Motion Graphics', 'Audio Syncing'],
      icon: Edit3,
      color: '#7e57c2'
    }
  ];

  const stats = [
    { icon: Award, number: '100+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Zap, number: '5+', label: 'Years Experience' },
    { icon: Film, number: '500+', label: 'Videos Produced' }
  ];

  return (
    <div className="myteam-container">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Meet Our Team</h1>
          <p className="hero-subtitle">
            Talented professionals bringing your vision to life through the lens
          </p>
          <div className="hero-divider">
            <span className="divider-line"></span>
            <Film className="divider-icon" size={24} />
            <span className="divider-line"></span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" size={32} />
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="section-header">
          <h2 className="section-title">Our Creative Team</h2>
          <p className="section-description">
            A passionate group of storytellers, innovators, and visual artists dedicated to excellence
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              // Removed onMouseEnter and onMouseLeave handlers
            >
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <div className="image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="image-overlay">
                      <member.icon 
                        className="member-icon" 
                        size={48}
                        style={{ color: member.color }}
                      />
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role" style={{ color: member.color }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-back" style={{ borderTopColor: member.color }}>
                  <div className="back-content">
                    <member.icon 
                      className="back-icon" 
                      size={40}
                      style={{ color: member.color }}
                    />
                    <h3 className="back-name">{member.name}</h3>
                    <p className="back-bio">{member.bio}</p>
                    <div className="specialties">
                      <h4 className="specialties-title">Specialties:</h4>
                      <ul className="specialties-list">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx} className="specialty-item">
                            <span className="specialty-bullet" style={{ backgroundColor: member.color }}>•</span>
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Work With Us?</h2>
          <p className="cta-text">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <button className="cta-button">
            <span>Get In Touch</span>
            <Zap size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default MyTeam;