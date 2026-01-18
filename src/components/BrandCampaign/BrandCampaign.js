// src/components/BrandCampaigns/BrandCampaigns.js
import React, { useState } from 'react';
import './BrandCampaign.css';

const BrandCampaigns = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: 'kEQPkT6Gk-E',
      title: 'BAWYC HQ',
    },
    {
      id: 'YgG3X8pHI_s',
      title: 'Victor x Cris - Krackles',
    },
    {
      id: 'Yt3wuaA7kI4',
      title: 'Spotify Wrapped 2025 - Maina Mind',
    },
    {
      id: '-NI_Ofq5Wnw',
      title: 'Safaricom @25 with YM',
    }
  ];

  const openFullscreen = (index) => {
    console.log('Opening fullscreen for video:', index);
    setFullscreenVideo(index);
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    console.log('Closing fullscreen');
    setFullscreenVideo(null);
  };

  return (
    <div className="brand-campaigns-page">
      {/* Fullscreen Video Overlay */}
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
          <iframe
            className="fullscreen-video"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videos[fullscreenVideo].id}?autoplay=1&controls=1`}
            title={videos[fullscreenVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Hero Section - Video 0: BAWYC HQ */}
      <section className="video-section hero-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openFullscreen(0)}
        >
          <iframe
            className="showcase-video"
            width="100%"
            height="100%"
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

      {/* Split Section - Video 1: Victor x Cris & Video 2: Spotify Wrapped */}
      <section className="video-section split-section">
        <div className="split-container">
          <div 
            className="video-container split-video clickable" 
            onClick={() => openFullscreen(1)}
          >
            <iframe
              className="showcase-video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videos[1].id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
              title={videos[1].title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="video-overlay">
              <div className="video-info">
                <h2 className="video-title">{videos[1].title}</h2>
                <div className="play-indicator">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7L8 5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="video-container split-video clickable" 
            onClick={() => openFullscreen(2)}
          >
            <iframe
              className="showcase-video"
              width="100%"
              height="100%"
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

      {/* Bottom Section - Video 3: Safaricom @25 */}
      <section className="video-section bottom-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openFullscreen(3)}
        >
          <iframe
            className="showcase-video"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videos[3].id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
            title={videos[3].title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <div className="video-info">
              <h2 className="video-title">{videos[3].title}</h2>
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

export default BrandCampaigns;