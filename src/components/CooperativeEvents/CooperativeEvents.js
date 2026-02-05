import React, { useState } from 'react';
import './CooperativeEvents.css';

const CorporateEvents = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: 'orSkwGpcc70',
      title: 'Wildlife and Training Institute Conference 2025 - Day 1 Set Up',
    },
    {
      id: 'DqTsWadIHW0',
      title: 'YM Stanchart Marathon with Savannah X Heineken',
    },
    {
      id: 'AxwpTJWI7ZU',
      title: 'YM@ NANAI\'S CAFE PARTY',
    },
    {
      id: 'tChoAg2Q7VU',
      title: 'Tukutane Aftermovie Life Of Solo SjFilms',
    },
    {
      id: 'gdXG2XXJ0t4',
      title: 'Wildlife Research and Training Institute - Exhibitors Day 2 2025',
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
    <div className="corporate-events-page">
      {/* Fullscreen Overlay */}
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

      {/* Video 1 - Wildlife Institute Day 1 (Full Width) */}
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

      {/* Videos 2, 3 & 4 - YM Marathon, Nanai's Cafe, Tukutane (Three Column Split) */}
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

      {/* Video 5 - Wildlife Institute Day 2 (Full Width) */}
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
    </div>
  );
};

export default CorporateEvents;