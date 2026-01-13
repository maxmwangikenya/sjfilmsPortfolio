// src/components/BrandCampaigns/BrandCampaigns.js
import React, { useState, useRef, useEffect } from 'react';
import './BrandCampaign.css';

const BrandCampaigns = () => {
  const [videosLoaded, setVideosLoaded] = useState([false, false, false, false, false, false]);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const videoRefs = useRef([]);

  const videos = [
    {
      src: '/images/BrandCampaignsVideos/BAWYC HQ.mp4',
      title: 'BAWYC HQ',
    },
    {
      src: '/images/BrandCampaignsVideos/Jason - Yes with Carrefour.mp4',
      title: 'Jason - Yes with Carrefour',
    },
    {
      src: '/images/BrandCampaignsVideos/Safaricom @25 with YM (1).mp4',
      title: 'Safaricom @25 with YM',
    },
    {
      src: '/images/BrandCampaignsVideos/Spotify Wrapped 2025 - Maina Mind.mp4',
      title: 'Spotify Wrapped 2025 - Maina Mind',
    },
    {
      src: '/images/BrandCampaignsVideos/Stephanie LFW with KCB.mp4',
      title: 'Stephanie LFW with KCB',
    },
    {
      src: '/images/BrandCampaignsVideos/Victor x Cris - Krackles V2.mp4',
      title: 'Victor x Cris - Krackles',
    }
  ];

  useEffect(() => {
    // Auto-play all videos when they're loaded
    videoRefs.current.forEach((video, index) => {
      if (video && videosLoaded[index]) {
        video.play().catch(err => console.log('Autoplay prevented:', err));
      }
    });
  }, [videosLoaded]);

  const openFullscreen = (index) => {
    console.log('Opening fullscreen for video:', index);
    setFullscreenVideo(index);
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    console.log('Closing fullscreen');
    setFullscreenVideo(null);
  };

  const handleVideoLoad = (index) => {
    console.log('Video loaded:', index);
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
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
          <video
            className="fullscreen-video"
            controls
            autoPlay
            loop
            playsInline
            onClick={(e) => e.stopPropagation()}
            src={videos[fullscreenVideo].src}
          >
            <source src={videos[fullscreenVideo].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Hero Section - Video 0 */}
      <section className="video-section hero-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openFullscreen(0)}
        >
          {!videosLoaded[0] && (
            <div className="video-loader">
              <div className="loader-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          <video
            ref={el => videoRefs.current[0] = el}
            className="showcase-video"
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => handleVideoLoad(0)}
            poster=""
          >
            <source src={videos[0].src} type="video/mp4" />
            Your browser does not support the video tag.
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

      {/* Split Section - Videos 1 & 2 */}
      <section className="video-section split-section">
        <div className="split-container">
          <div 
            className="video-container split-video clickable" 
            onClick={() => openFullscreen(1)}
          >
            {!videosLoaded[1] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[1] = el}
              className="showcase-video"
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => handleVideoLoad(1)}
              poster=""
            >
              <source src={videos[1].src} type="video/mp4" />
              Your browser does not support the video tag.
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
            onClick={() => openFullscreen(2)}
          >
            {!videosLoaded[2] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[2] = el}
              className="showcase-video"
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => handleVideoLoad(2)}
              poster=""
            >
              <source src={videos[2].src} type="video/mp4" />
              Your browser does not support the video tag.
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

      {/* Bottom Section - Video 3 */}
      <section className="video-section bottom-section">
        <div 
          className="video-container full-width clickable" 
          onClick={() => openFullscreen(3)}
        >
          {!videosLoaded[3] && (
            <div className="video-loader">
              <div className="loader-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          <video
            ref={el => videoRefs.current[3] = el}
            className="showcase-video"
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => handleVideoLoad(3)}
            poster=""
          >
            <source src={videos[3].src} type="video/mp4" />
            Your browser does not support the video tag.
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

      {/* Second Split Section - Videos 4 & 5 */}
      <section className="video-section split-section">
        <div className="split-container">
          <div 
            className="video-container split-video clickable" 
            onClick={() => openFullscreen(4)}
          >
            {!videosLoaded[4] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[4] = el}
              className="showcase-video"
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => handleVideoLoad(4)}
              poster=""
            >
              <source src={videos[4].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <div className="video-info">
                <h2 className="video-title">{videos[4].title}</h2>
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
            onClick={() => openFullscreen(5)}
          >
            {!videosLoaded[5] && (
              <div className="video-loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            )}
            <video
              ref={el => videoRefs.current[5] = el}
              className="showcase-video"
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => handleVideoLoad(5)}
              poster=""
            >
              <source src={videos[5].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <div className="video-info">
                <h2 className="video-title">{videos[5].title}</h2>
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
    </div>
  );
};

export default BrandCampaigns;