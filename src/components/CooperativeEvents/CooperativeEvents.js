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
      id: 'K6q1KatBG9k',
      title: 'WRTI Day 2 - Exhibitors'
    },
    {
      id: 'utmHWPygcJo',
      title: 'WRTI - Set-up'
    },
    {
      id: '5GWVF4lffn4',
      title: "YM@ Nanai's Cafe Party"
    },
    {
      id: 'f5Atpu22GEI',
      title: 'YM Stanchart Marathon'
    }
  ];

  // track iframe load states for nicer UI
  const [loaded, setLoaded] = useState(() => Array(videos.length).fill(false));

  const onIframeLoad = (index) => {
    setLoaded(prev => { const copy = [...prev]; copy[index] = true; return copy; });
  };

  return (
    <div className="cooperative-events-page">
      {/* Hero Full-Width Video - WRTI Day 2 - Exhibitors */}
      <section className="video-section hero-section">
        <div className={`video-container full-width clickable ${loaded[0] ? 'loaded' : ''}`} onClick={() => openZoom(0)}>
          {zoomedVideo === 0 && (
            <div className="custom-zoom-overlay" onClick={closeZoom}>
              <button className="zoom-close-btn" onClick={(e) => { e.stopPropagation(); closeZoom(); }}>
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
            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[0].title}
            frameBorder="0"
            onLoad={() => onIframeLoad(0)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="video-overlay">
            <h2 className="video-title">{videos[0].title}</h2>
          </div>
        </div>
      </section>

      {/* Split Section - WRTI Set-up (left) & YM@ Nanai's Cafe Party (right) */}
      <section className="video-section split-section">
        <div className="split-container">
          <div className={`video-container split-video clickable ${loaded[1] ? 'loaded' : ''}`} onClick={() => openZoom(1)}>
            {zoomedVideo === 1 && (
              <div className="custom-zoom-overlay" onClick={closeZoom}>
                <button className="zoom-close-btn" onClick={(e) => { e.stopPropagation(); closeZoom(); }}>
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
              className="showcase-video split-video-zoom-out"
              src={`https://www.youtube.com/embed/${videos[1].id}?autoplay=1&mute=1&loop=1&playlist=${videos[1].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[1].title}
              frameBorder="0"
              onLoad={() => onIframeLoad(1)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="video-overlay">
              <h2 className="video-title">{videos[1].title}</h2>
            </div>
          </div>
          <div className={`video-container split-video clickable ${loaded[2] ? 'loaded' : ''}`} onClick={() => openZoom(2)}>
            {zoomedVideo === 2 && (
              <div className="custom-zoom-overlay" onClick={closeZoom}>
                <button className="zoom-close-btn" onClick={(e) => { e.stopPropagation(); closeZoom(); }}>
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
              className="showcase-video split-video-zoom-out"
              src={`https://www.youtube.com/embed/${videos[2].id}?autoplay=1&mute=1&loop=1&playlist=${videos[2].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={videos[2].title}
              frameBorder="0"
              onLoad={() => onIframeLoad(2)}
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

      {/* Bottom Full-Width Video - YM Stanchart Marathon */}
      <section className="video-section bottom-section">
        <div className={`video-container full-width clickable ${loaded[3] ? 'loaded' : ''}`} onClick={() => openZoom(3)}>
          {zoomedVideo === 3 && (
            <div className="custom-zoom-overlay" onClick={closeZoom}>
              <button className="zoom-close-btn" onClick={(e) => { e.stopPropagation(); closeZoom(); }}>
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
            src={`https://www.youtube.com/embed/${videos[3].id}?autoplay=1&mute=1&loop=1&playlist=${videos[3].id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            title={videos[3].title}
            frameBorder="0"
            onLoad={() => onIframeLoad(3)}
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

export default CooperativeEvents;