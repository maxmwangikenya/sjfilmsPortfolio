import React, { useEffect, useRef, useState } from "react";
import "./CooperativeEvents.css";

const CorporateEvents = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const videos = [
    {
      id: "orSkwGpcc70",
      title: "Wildlife and Training Institute Conference 2025 - Day 1 Set Up",
      preview: "https://videos.sjfilmworks.com/previews/wrti-set-up-mp4-preview.mp4",
    },
    {
      id: "DqTsWadIHW0",
      title: "YM Stanchart Marathon with Savannah X Heineken",
      preview:
        "https://videos.sjfilmworks.com/previews/ym-stanchart-marathon-with-savannah-x-heineken-1-mp4-preview.mp4",
    },
    {
      id: "KCq66d00-tc",
      title: "Gigiri Social Club - Launch",
      // ✅ FIXED: use the real file that exists on the server
      preview: "https://videos.sjfilmworks.com/previews/gigirisocialclublaunchpreview.mp4",
    },
    {
      id: "AxwpTJWI7ZU",
      title: "YM@ NANAI'S CAFE PARTY",
      preview:
        "https://videos.sjfilmworks.com/previews/ym-nanai-s-cafe-party-1-mp4-preview.mp4",
    },
    {
      id: "gdXG2XXJ0t4",
      title: "Wildlife Research and Training Institute - Exhibitors Day 2 2025",
      preview:
        "https://videos.sjfilmworks.com/previews/wrti-day-2-exhibitors-interviews-mp4-preview.mp4",
    },
  ];

  const openFullscreen = (index) => setFullscreenVideo(index);

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenVideo(null);
  };

  const buildFullscreenSrc = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&controls=1` +
    `&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`;

  // ✅ autoplay nudge (helps mobile Safari/Chrome)
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
          if (p && typeof p.catch === "function") await p;
        } catch {
          // ignore autoplay policy
        }
      };

      tryPlay();
    }, [src]);

    const nudge = () => {
      const v = ref.current;
      if (!v) return;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    return (
      <video
        ref={ref}
        className="corporate-preview"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={nudge}
        onLoadedData={nudge}
        aria-label={title}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onError={() => console.error("Preview failed:", src)}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  const VideoStage = ({ video, className, onClick }) => (
    <div className={className} onClick={onClick} role="button" tabIndex={0}>
      <div className="video-stage">
        <div className="video-stage-inner">
          <MP4Preview src={video.preview} title={video.title} />
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
            ✕
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

      <section className="video-section top-section">
        <VideoStage
          video={videos[0]}
          className="video-container full-width clickable top-video"
          onClick={() => openFullscreen(0)}
        />
      </section>

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
