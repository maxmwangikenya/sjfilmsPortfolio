import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: '78n8VpI1x3w',
      title: ' Mama`s House'
    },
    {
      id: 'KLF-16EwrKk', 
      title: 'Gigiri Social Club'
    },
    {
      id: 'ivAO6RU2WIM',
      title: 'High-energy marathon coverage with premium partners'
    },
    {
      id: 'nQ1kJvSL8mw',
      title: 'Farova by Savara'
    }
  ];

  const openFullscreen = (index) => {
    setFullscreenVideo(index);
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  return (
    <div className="landing-page">
      {/* Fullscreen Overlay - SPACE-FIXED URLs */}
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
          <iframe
            className="fullscreen-video"
            src={`https://www.youtube.com/embed/${videos[fullscreenVideo].id}?autoplay=1&controls=1`}
            title={videos[fullscreenVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="video-section hero-section">
        <div className="video-container full-width clickable" onClick={() => openFullscreen(0)}>
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[0].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <h2 className="video-title">{videos[0].title}</h2>
          </div>
        </div>
      </section>

      {/* Split Section — UPDATED LEFT VIDEO */}
      <section className="video-section split-section">
        <div className="split-container">
          {/* LEFT VIDEO - REPLACED */}
          <div className="video-container split-video clickable" onClick={() => openFullscreen(1)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&loop=1&playlist=${videos[1].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[1].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="video-overlay">
              <h2 className="video-title">{videos[1].title}</h2>
            </div>
          </div>

          {/* Right Video — Marathon (unchanged) */}
          <div className="video-container split-video clickable" onClick={() => openFullscreen(2)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[2].id}?autoplay=1&mute=1&loop=1&playlist=${videos[2].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[2].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="video-overlay">
              <h2 className="video-title">{videos[2].title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section — Showreel */}
      <section className="video-section bottom-section" style={{ marginTop: '80px' }}>
        <div className="video-container full-width clickable" onClick={() => openFullscreen(3)}>
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[3].id}?autoplay=1&mute=1&loop=1&playlist=${videos[3].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[3].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <h2 className="video-title">{videos[3].title}</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;