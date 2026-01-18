// src/components/CooperativeEvents/CooperativeEvents.js
import React, { useState } from 'react';
import './CooperativeEvents.css';

const CooperativeEvents = () => {
  const [zoomedVideo, setZoomedVideo] = useState(null);

  const openZoom = (index) => {
    setZoomedVideo(index);
  };

  const closeZoom = () => {
    setZoomedVideo(null);
  };

const videos = [
  {
    id: 'utmHWPygcJo',
    title: 'WRTI - Set-up'
  },
  {
    id: 'K6q1KatBG9k',
    title: 'WRTI Day 2 - Exhibitors'
  },
  {
    id: 'f5Atpu22GEI',
    title: 'YM Stanchart Marathon'
  },
  {
    id: '5GWVF4lffn4',
    title: "YM@ Nanai's Cafe Party"
  }
];

  return (
    <div className="cooperative-events-page">
      <section className="video-section hero-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openZoom(0)}
        >
          {zoomedVideo === 0 && (
            <div className="custom-zoom-overlay" onClick={closeZoom}>
              <button 
                className="zoom-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  closeZoom();
                }}
              >
                ✕
              </button>
              <div className="zoom-video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&controls=1`}
                  title={videos[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
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

      <section className="video-section split-section">
        <div className="split-container">
          <div 
            className="video-container split-video clickable" 
            onClick={() => openZoom(1)}
          >
            {zoomedVideo === 1 && (
              <div className="custom-zoom-overlay" onClick={closeZoom}>
                <button 
                  className="zoom-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeZoom();
                  }}
                >
                  ✕
                </button>
                <div className="zoom-video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&controls=1`}
                    title={videos[1].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
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
            onClick={() => openZoom(2)}
          >
            {zoomedVideo === 2 && (
              <div className="custom-zoom-overlay" onClick={closeZoom}>
                <button 
                  className="zoom-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeZoom();
                  }}
                >
                  ✕
                </button>
                <div className="zoom-video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videos[2].id}?autoplay=1&controls=1`}
                    title={videos[2].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
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

      <section className="video-section bottom-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openZoom(3)}
        >
          {zoomedVideo === 3 && (
            <div className="custom-zoom-overlay" onClick={closeZoom}>
              <button 
                className="zoom-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  closeZoom();
                }}
              >
                ✕
              </button>
              <div className="zoom-video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos[3].id}?autoplay=1&controls=1`}
                  title={videos[3].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
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

export default CooperativeEvents;