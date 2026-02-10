import React, { useState } from "react";
import "./BrandCampaign.css";

const BrandCampaigns = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // ✅ VPS previews + YouTube fullscreen
  const videos = [
    {
      id: "iHEZTMiZJkI",
      title: "Indulgence with Baileys (Campaign) Tara Nicole",
      preview: "https://videos.sjfilmworks.com/previews/indulgence-preview.mp4",
    },
    {
      id: "LtocS1MO9mE",
      title: "Taji by Darling Kenya Campaign",
      preview:
        "https://videos.sjfilmworks.com/previews/taji-by-darling-kenya-campaign-mp4-preview.mp4",
    },
    {
      id: "pPi4hI1EjpU",
      title: "Artcaffe Baileys (Campaign) Tara Nicole",
      preview: "https://videos.sjfilmworks.com/previews/artcaffe-preview.mp4",
    },
    {
      id: "EBsIT-m69yI",
      title: "Safaricom @25 with YM",
      preview:
        "https://videos.sjfilmworks.com/previews/safaricom-25-with-ym-1-mp4-preview.mp4",
    },
    {
      id: "18EJ65_vyaY",
      title: "Say YES with Carrefour (Campaign) Stephanie Ng'ang'a",
      preview:
        "https://videos.sjfilmworks.com/previews/yes-campaign-carrefour-kenya-mp4-preview.mp4",
    },
    {
      id: "EspgpfnoqGg",
      title: "Multi-currency card with KCB (Campaign) Stephanie Ng'ang'a",
      preview:
        "https://videos.sjfilmworks.com/previews/stephanie-lfw-with-kcb-mp4-preview.mp4",
    },
    {
      id: "jbFRaaizmpU",
      title: "Spotify Wrapped 2025 (Campaign) Maina Mind",
      preview:
        "https://videos.sjfilmworks.com/previews/spotify-wrapped-2025-maina-mind-mp4-preview.mp4",
    },
    {
      id: "A4jA8__RTqM",
      title: "Krackles (Campaign) Victor Karanja x Cris Njoki",
      preview:
        "https://videos.sjfilmworks.com/previews/victor-x-cris-krackles-v2-1-mp4-preview.mp4",
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

  const VideoTile = ({ index, className }) => (
    <div
      className={`video-container clickable ${className}`}
      onClick={() => openFullscreen(index)}
    >
      <video
        className="campaign-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={(e) => {
          console.log("VIDEO ERROR:", videos[index].preview, e?.target?.error);
        }}
      >
        <source src={videos[index].preview} type="video/mp4" />
      </video>

      <div className="video-overlay">
        <p className="video-title">{videos[index].title}</p>
      </div>
    </div>
  );

  return (
    <div className="brand-campaigns-page">
      {fullscreenVideo !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            ✕
          </button>

          <iframe
            className="fullscreen-video"
            src={buildFullscreenSrc(videos[fullscreenVideo].id)}
            title={videos[fullscreenVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* HERO */}
      <section className="video-section hero-section">
        <VideoTile index={0} className="full-width hero-video hero-first" />
      </section>

      {/* TRIPLE */}
      <section className="video-section triple-section">
        <div className="triple-container">
          {[1, 2, 3].map((i) => (
            <VideoTile key={i} index={i} className="triple-video" />
          ))}
        </div>
      </section>

      {/* FULL */}
      <section className="video-section full-section">
        <VideoTile index={4} className="full-width" />
      </section>

      {/* TRIPLE */}
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
