import React, { useState } from 'react';
import './CooperativeEvents.css';

const CorporateEvents = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // Add type: "short" for Shorts videos
  const videos = [
    {
      id: 'orSkwGpcc70',
      title: 'Wildlife and Training Institute Conference 2025 - Day 1 Set Up',
      type: 'video',
    },
    {
      id: 'DqTsWadIHW0',
      title: 'YM Stanchart Marathon with Savannah X Heineken',
      type: 'video',
    },
    {
      id: 'KCq66d00-tc',
      title: 'Gigiri Social Club - Launch',
      type: 'video', 
    },
    {
      id: 'AxwpTJWI7ZU',
      title: "YM@ NANAI'S CAFE PARTY",
      type: 'video',
    },
    {
      id: 'gdXG2XXJ0t4',
      title: 'Wildlife Research and Training Institute - Exhibitors Day 2 2025',
      type: 'video',
    }
  ];

  // Handle click logic
  const handleVideoClick = (index) => {
    const video = videos[index];

    if (video.type === 'short') {
      window.open(
        `https://www.youtube.com/shorts/${video.id}`,
        '_blank'
      );
    } else {
      setFullscreenVideo(index);
    }
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  return (
    <div className="corporate-events-page">

      {/* ---------- FULLSCREEN OVERLAY ---------- */}
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
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

      {/* ---------- VIDEO 1 (FULL WIDTH) ---------- */}
      <section className="video-section">
        <div
          className="video-container full-width clickable"
          onClick={() => handleVideoClick(0)}
        >
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&controls=0&modestbranding=1&rel=0`}
            title={videos[0].title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <div className="video-overlay">
            <p className="video-title">{videos[0].title}</p>
          </div>
        </div>
      </section>

      {/* ---------- VIDEOS 2,3,4 ---------- */}
      <section className="video-section">
        <div className="triple-container">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="video-container triple-video clickable"
              onClick={() => handleVideoClick(i)}
            >
              <iframe
                className="showcase-video"
                src={`https://www.youtube.com/embed/${videos[i].id}?autoplay=1&mute=1&loop=1&playlist=${videos[i].id}&controls=0&modestbranding=1&rel=0`}
                title={videos[i].title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              <div className="video-overlay">
                <p className="video-title">{videos[i].title}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ---------- VIDEO 5 (FULL WIDTH) ---------- */}
      <section className="video-section">
        <div
          className="video-container full-width clickable"
          onClick={() => handleVideoClick(4)}
        >
          <iframe
            className="showcase-video"
            src={`https://www.youtube.com/embed/${videos[4].id}?autoplay=1&mute=1&loop=1&playlist=${videos[4].id}&controls=0&modestbranding=1&rel=0`}
            title={videos[4].title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <div className="video-overlay">
            <p className="video-title">{videos[4].title}</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CorporateEvents;
