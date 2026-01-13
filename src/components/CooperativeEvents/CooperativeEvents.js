// src/components/CooperativeEvents/CooperativeEvents.js
import React, { useRef, useState } from 'react';
import './CooperativeEvents.css';

const CooperativeEvents = () => {
  const videoRefs = useRef([]);
  const [videosLoaded, setVideosLoaded] = useState([false, false, false, false]);
  const [zoomedVideo, setZoomedVideo] = useState(null);

  const handleVideoLoad = (index) => {
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Handle click to open zoomed video (with sound)
  const openZoom = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      // Ensure video is ready
      video.muted = false; // ✅ Enable sound
      video.play().catch(err => console.log('Play failed:', err));
    }
    setZoomedVideo(index);
  };

  // Handle close: stop video and mute
  const closeZoom = () => {
    if (zoomedVideo !== null) {
      const video = videoRefs.current[zoomedVideo];
      if (video) {
        video.pause();
        video.muted = true; // ✅ Mute immediately
        video.currentTime = 0; // Optional: rewind
      }
    }
    setZoomedVideo(null);
  };

  const videos = [
    {
      src: '/images/CooperativeEvents/WRTI - Set-up.mp4',
      title: 'WRTI - Set-up'
    },
    {
      src: '/images/CooperativeEvents/WRTI Day 2 - Exhibitors Interviews.mp4',
      title: 'WRTI Day 2 - Exhibitors'
    },
    {
      src: '/images/CooperativeEvents/YM Stanchart Marathon with Savannah X Heineken (4).mp4',
      title: 'YM Stanchart Marathon'
    },
    {
      src: '/images/CooperativeEvents/YM@ NANAI\'S CAFE PARTY.mp4',
      title: "YM@ Nanai's Cafe Party"
    }
  ];

  return (
    <div className="cooperative-events-page">
      {/* Hero */}
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
                <video
                  autoPlay
                  muted={false}
                  className="zoom-video"
                  src={videos[0].src}
                  controls
                />
              </div>
            </div>
          )}
          {!videosLoaded[0] && (
            <div className="video-loader">
              <div className="loader-spinner"></div>
              <p>Loading...</p>
            </div>
          )}
          <video
            ref={el => videoRefs.current[0] = el}
            className="showcase-video"
            muted={true} // ✅ Always muted in thumbnail
            loop
            playsInline
            onLoadedData={() => handleVideoLoad(0)}
          >
            <source src={videos[0].src} type="video/mp4" />
          </video>
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

      {/* Split */}
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
                  <video
                    autoPlay
                    muted={false}
                    className="zoom-video"
                    src={videos[1].src}
                    controls
                  />
                </div>
              </div>
            )}
            {!videosLoaded[1] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[1] = el}
              className="showcase-video"
              muted={true}
              loop
              playsInline
              onLoadedData={() => handleVideoLoad(1)}
            >
              <source src={videos[1].src} type="video/mp4" />
            </video>
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
                  <video
                    autoPlay
                    muted={false}
                    className="zoom-video"
                    src={videos[2].src}
                    controls
                  />
                </div>
              </div>
            )}
            {!videosLoaded[2] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[2] = el}
              className="showcase-video"
              muted={true}
              loop
              playsInline
              onLoadedData={() => handleVideoLoad(2)}
            >
              <source src={videos[2].src} type="video/mp4" />
            </video>
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

      {/* Bottom */}
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
                <video
                  autoPlay
                  muted={false}
                  className="zoom-video"
                  src={videos[3].src}
                  controls
                />
              </div>
            </div>
          )}
          {!videosLoaded[3] && (
            <div className="video-loader">
              <div className="loader-spinner"></div>
              <p>Loading...</p>
            </div>
          )}
          <video
            ref={el => videoRefs.current[3] = el}
            className="showcase-video"
            muted={true}
            loop
            playsInline
            onLoadedData={() => handleVideoLoad(3)}
          >
            <source src={videos[3].src} type="video/mp4" />
          </video>
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