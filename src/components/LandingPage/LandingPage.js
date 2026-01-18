import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: 'aj35BnvMUvg',
      title: 'Celebrating 25 years of connectivity and innovation'
    },
    {
      id: 'A0U2Bj-MpeQ',
      title: 'Capturing the breathtaking beauty of Kisii landscapes'
    },
    {
      id: 'ivAO6RU2WIM',
      title: 'High-energy marathon coverage with premium partners'
    },
    {
      id: '77JEEOXayaI',
      title: 'The vibrant aftermovie of Life of Solo event'
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
      {/* Fullscreen Overlay */}
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

      {/* Hero Section — Carrefour Video */}
      <section className="video-section hero-section">
        <div className="video-container full-width clickable" onClick={() => openFullscreen(0)}>
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[0].id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
            title={videos[0].title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <div className="video-info">
              <h2 className="video-title">{videos[0].title}</h2>
              <div className="play-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7L8 5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section — Kisii + Marathon */}
      <section className="video-section split-section">
        <div className="split-container">
          {/* Left Video — Kisii — FULL COVER, NO OVERLAY */}
          <div className="video-container split-video clickable" onClick={() => openFullscreen(1)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[1].id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
              title={videos[1].title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            {/* Play Button Only — No Background */}
            <div className="play-indicator-only">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7L8 5z"/>
              </svg>
            </div>
          </div>

          {/* Right Video — Marathon — With Title */}
          <div className="video-container split-video clickable" onClick={() => openFullscreen(2)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[2].id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
              title={videos[2].title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="video-overlay">
              <div className="video-info">
                <h2 className="video-title">{videos[2].title}</h2>
                <div className="play-indicator">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7L8 5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section — Showreel */}
      <section className="video-section bottom-section" style={{ marginTop: '80px' }}>
        <div className="video-container full-width clickable" onClick={() => openFullscreen(3)}>
          <iframe
            className="showcase-video"
            src="https://www.youtube.com/embed/LSEVMAv5zb8?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0"
            title="SJ Films Showreel"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <div className="video-info">
              <h2 className="video-title">SJ Films Showreel</h2>
              <div className="play-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7L8 5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;