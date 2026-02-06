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
      id: 'KCq66d00-tc',
      title: 'Gigiri Social Club - Launch',
    },
    {
      id: 'AxwpTJWI7ZU',
      title: "YM@ NANAI'S CAFE PARTY",
    },
    {
      id: 'gdXG2XXJ0t4',
      title: 'Wildlife Research and Training Institute - Exhibitors Day 2 2025',
    },
  ];

  const openFullscreen = (index) => setFullscreenVideo(index);

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  // Preview URL (minimize hover UI)
  const buildPreviewSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}` +
    `&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&showinfo=0`;

  // Fullscreen URL (keep controls, still reduce branding/related)
  const buildFullscreenSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&controls=1` +
    `&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`;

  // Reusable stage wrapper to prevent cropping (contain behavior from CSS)
  const VideoStage = ({ video, className, onClick }) => (
    <div className={className} onClick={onClick}>
      <div className="video-stage">
        <div className="video-stage-inner">
          <iframe
            src={buildPreviewSrc(video.id)}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="video-overlay">
        <p className="video-title">{video.title}</p>
      </div>
    </div>
  );

  return (
    <div className="corporate-events-page">
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

      {/* TOP (full screen) */}
      <section className="video-section top-section">
        <VideoStage
          video={videos[0]}
          className="video-container full-width clickable top-video"
          onClick={() => openFullscreen(0)}
        />
      </section>

      {/* MIDDLE (full screen) - 3 videos */}
      <section className="video-section triple-section">
        <div className="triple-container">
          {[1, 2, 3].map((i) => (
            <VideoStage
              key={i}
              video={videos[i]}
              className="video-container triple-video clickable"
              onClick={() => openFullscreen(i)}
            />
          ))}
        </div>
      </section>

      {/* BOTTOM (full screen) */}
      <section className="video-section bottom-section">
        <VideoStage
          video={videos[4]}
          className="video-container full-width clickable bottom-video"
          onClick={() => openFullscreen(4)}
        />
      </section>
    </div>
  );
};

export default CorporateEvents;
