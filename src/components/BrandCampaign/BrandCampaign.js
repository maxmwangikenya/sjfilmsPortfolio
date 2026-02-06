import React, { useState } from 'react';
import './BrandCampaign.css';

const BrandCampaigns = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: 'iHEZTMiZJkI',
      title: 'Indulgence with Baileys (Campaign) Tara Nicole',
    },
    {
      id: 'LtocS1MO9mE',
      title: 'Taji by Darling Kenya Campaign',
    },
    {
      id: 'EspgpfnoqGg',
      title: 'Multi-currency card with KCB (Campaign) Stephanie Ng\'ang\'a',
    },
    {
      id: 'EBsIT-m69yI',
      title: 'Safaricom @25 with YM',
    },
    {
      id: '18EJ65_vyaY',
      title: 'Say YES with Carrefour (Campaign) Stephanie Ng\'ang\'a',
    },
    {
      id: 'EspgpfnoqGg',
      title: 'Multi-currency card with KCB (Campaign) Stephanie Ng\'ang\'a',
    },
    {
      id: 'jbFRaaizmpU',
      title: 'Spotify Wrapped 2025 (Campaign) Maina Mind',
    },
    {
      id: 'A4jA8__RTqM',
      title: 'Krackles (Campaign) Victor Karanja x Cris Njoki',
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
    <div className="brand-campaigns-page">
      {/* Fullscreen Overlay */}
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
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

      {/* Video 1 - Baileys (Full Width) */}
      <section className="video-section">
        <div className="video-container full-width clickable" onClick={() => openFullscreen(0)}>
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[0].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-overlay">
            <p className="video-title">{videos[0].title}</p>
          </div>
        </div>
      </section>

      {/* Videos 2, 3 & 4 - Darling Kenya, KCB Stephanie, Safaricom (Three Column Split) */}
      <section className="video-section">
        <div className="triple-container">
          <div className="video-container triple-video clickable" onClick={() => openFullscreen(1)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&loop=1&playlist=${videos[1].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[1].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[1].title}</p>
            </div>
          </div>

          <div className="video-container triple-video clickable" onClick={() => openFullscreen(2)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[2].id}?autoplay=1&mute=1&loop=1&playlist=${videos[2].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[2].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[2].title}</p>
            </div>
          </div>

          <div className="video-container triple-video clickable" onClick={() => openFullscreen(3)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[3].id}?autoplay=1&mute=1&loop=1&playlist=${videos[3].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[3].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[3].title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video 5 - Carrefour (Full Width) */}
      <section className="video-section">
        <div className="video-container full-width clickable" onClick={() => openFullscreen(4)}>
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[4].id}?autoplay=1&mute=1&loop=1&playlist=${videos[4].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[4].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-overlay">
            <p className="video-title">{videos[4].title}</p>
          </div>
        </div>
      </section>

      {/* Videos 6, 7 & 8 - KCB, Spotify, Krackles (Three Column Split) */}
      <section className="video-section">
        <div className="triple-container">
          <div className="video-container triple-video clickable" onClick={() => openFullscreen(5)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[5].id}?autoplay=1&mute=1&loop=1&playlist=${videos[5].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[5].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[5].title}</p>
            </div>
          </div>

          <div className="video-container triple-video clickable" onClick={() => openFullscreen(6)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[6].id}?autoplay=1&mute=1&loop=1&playlist=${videos[6].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[6].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[6].title}</p>
            </div>
          </div>

          <div className="video-container triple-video clickable" onClick={() => openFullscreen(7)}>
            <iframe
              className="showcase-video"
              src={`https://www.youtube.com/embed/${videos[7].id}?autoplay=1&mute=1&loop=1&playlist=${videos[7].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[7].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-overlay">
              <p className="video-title">{videos[7].title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandCampaigns;