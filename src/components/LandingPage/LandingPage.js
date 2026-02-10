// LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // ✅ VPS previews (MP4) + YouTube fullscreen on click
  const videos = [
    {
      id: '78n8VpI1x3w',
      title: "Mama`s House",
      previewType: 'mp4',
      previewSrc: 'https://videos.sjfilmworks.com/previews/mamas-house-preview.mp4',
    },
    {
      id: 'KLF-16EwrKk',
      title: 'Gigiri Social Club',
      previewType: 'mp4',
      previewSrc: 'https://videos.sjfilmworks.com/previews/gigiri-social-club-v2-mp4-preview.mp4',
    },
    {
      id: '0or1Q3YCDv8',
      title: '2025 Cohort Launch - Densu',
      previewType: 'mp4',
      previewSrc: 'https://videos.sjfilmworks.com/previews/densu-preview.mp4',
    },
    {
      id: 'nQ1kJvSL8mw',
      title: 'Farova by Savara',
      previewType: 'mp4',
      previewSrc: 'https://videos.sjfilmworks.com/previews/farova-forever-sj-films-website-version-mp4-preview.mp4',
    },
  ];

  const openFullscreen = (index) => setFullscreenVideo(index);

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  // Fullscreen URL (YouTube)
  const buildFullscreenSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&controls=1` +
    `&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`;

  // ✅ autoplay helper (some browsers need a play() nudge)
  const MP4Preview = ({ src, title }) => {
    const ref = useRef(null);

    useEffect(() => {
      const v = ref.current;
      if (!v) return;

      const tryPlay = async () => {
        try {
          v.muted = true;
          v.playsInline = true;
          const p = v.play();
          if (p && typeof p.catch === 'function') await p;
        } catch {
          // ignore (autoplay policies / buffering)
        }
      };

      tryPlay();
    }, [src]);

    const nudge = () => {
      const v = ref.current;
      if (!v) return;
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    return (
      <video
        ref={ref}
        className="preview-video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={nudge}
        onLoadedData={nudge}
        aria-label={title}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
      />
    );
  };

  const VideoStage = ({ video, className, onClick }) => (
    <div className={className} onClick={onClick}>
      <div className="video-stage">
        <div className="video-stage-inner">
          {video.previewType === 'mp4' ? (
            <MP4Preview src={video.previewSrc} title={video.title} />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&showinfo=0`}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>

      <div className="video-overlay">
        <p className="video-title">{video.title}</p>
      </div>
    </div>
  );

  return (
    <div className="landing-page">
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

      {/* HERO (full screen) */}
      <section className="video-section hero-section">
        <VideoStage
          video={videos[0]}
          className="video-container full-width clickable hero-video"
          onClick={() => openFullscreen(0)}
        />
      </section>

      {/* MIDDLE (full screen section) */}
      <section className="video-section split-section">
        <div className="split-container">
          {[1, 2].map((i) => (
            <VideoStage
              key={i}
              video={videos[i]}
              className="video-container split-video clickable"
              onClick={() => openFullscreen(i)}
            />
          ))}
        </div>
      </section>

      {/* BOTTOM (full screen) */}
      <section className="video-section bottom-section">
        <VideoStage
          video={videos[3]}
          className="video-container full-width clickable bottom-video"
          onClick={() => openFullscreen(3)}
        />
      </section>
    </div>
  );
};

export default LandingPage;
