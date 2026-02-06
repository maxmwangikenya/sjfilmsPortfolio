import React, { useState } from 'react';
import './BrandCampaign.css';

const BrandCampaigns = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    { id: 'iHEZTMiZJkI', title: 'Indulgence with Baileys (Campaign) Tara Nicole' },
    { id: 'LtocS1MO9mE', title: 'Taji by Darling Kenya Campaign' },
    { id: 'pPi4hI1EjpU', title: 'Artcaffe Baileys (Campaign) Tara Nicole' },
    { id: 'EBsIT-m69yI', title: 'Safaricom @25 with YM' },
    { id: '18EJ65_vyaY', title: "Say YES with Carrefour (Campaign) Stephanie Ng'ang'a" },
    { id: 'EspgpfnoqGg', title: "Multi-currency card with KCB (Campaign) Stephanie Ng'ang'a" },
    { id: 'jbFRaaizmpU', title: 'Spotify Wrapped 2025 (Campaign) Maina Mind' },
    { id: 'A4jA8__RTqM', title: 'Krackles (Campaign) Victor Karanja x Cris Njoki' }
  ];

  const openFullscreen = (index) => setFullscreenVideo(index);

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  // Preview URL (minimize UI)
  const buildPreviewSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}` +
    `&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&showinfo=0`;

  // Fullscreen URL (controls on)
  const buildFullscreenSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&controls=1` +
    `&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`;

  const VideoTile = ({ index, className }) => (
    <div
      className={`video-container clickable ${className}`}
      onClick={() => openFullscreen(index)}
    >
      <iframe
        className="campaign-video"
        src={buildPreviewSrc(videos[index].id)}
        title={videos[index].title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading="lazy"
      />
      <div className="video-overlay">
        <p className="video-title">{videos[index].title}</p>
      </div>
    </div>
  );

  return (
    <div className="brand-campaigns-page">
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen} aria-label="Close">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>

          <iframe
            className="fullscreen-video"
            src={buildFullscreenSrc(videos[fullscreenVideo].id)}
            title={videos[fullscreenVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* 1) HERO (first video) */}
      <section className="video-section hero-section">
        {/* ✅ hero-first makes ONLY the first video force-fill edge-to-edge */}
        <VideoTile index={0} className="full-width hero-video hero-first" />
      </section>

      {/* 2) TRIPLE */}
      <section className="video-section triple-section">
        <div className="triple-container">
          {[1, 2, 3].map((i) => (
            <VideoTile key={i} index={i} className="triple-video" />
          ))}
        </div>
      </section>

      {/* 3) FULL WIDTH */}
      <section className="video-section full-section">
        <VideoTile index={4} className="full-width" />
      </section>

      {/* 4) TRIPLE */}
      <section className="video-section triple-section">
        <div className="triple-container">
          {[5, 6, 7].map((i) => (
            <VideoTile key={i} index={i} className="triple-video" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandCampaigns;
