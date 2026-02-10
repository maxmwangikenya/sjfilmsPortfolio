import { useMemo, useState } from "react";
import "./Documentaries.css";

function Documentaries() {
  const documentaries = useMemo(
    () => [
      {
        id: 1,
        title: "AJiry by Mastercard Foundation - Kisii, County",
        youtubeId: "_QDNf5Hme3k",
        // ✅ VPS preview mp4 (10 sec is fine)
        previewMp4:
          "https://videos.sjfilmworks.com/previews/ajiry-kisii-landscape-trailer-1-mp4-preview.mp4",
      },
      {
        id: 2,
        title: "The Story Of Janny Marangu - Tumaini Trust Kenya",
        youtubeId: "qwU35GGST1E",
        previewMp4:
          "https://videos.sjfilmworks.com/previews/the-story-of-janny-marangu-mp4-preview.mp4",
      },
    ],
    []
  );

  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const requestFs = () => {
    const fullscreenContainer = document.querySelector(".fullscreen-overlay");
    if (!fullscreenContainer) return;

    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen().catch(() => {});
    } else if (fullscreenContainer.webkitRequestFullscreen) {
      fullscreenContainer.webkitRequestFullscreen();
    } else if (fullscreenContainer.mozRequestFullScreen) {
      fullscreenContainer.mozRequestFullScreen();
    } else if (fullscreenContainer.msRequestFullscreen) {
      fullscreenContainer.msRequestFullscreen();
    }
  };

  const exitFs = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else if (document.msFullscreenElement) {
      document.msExitFullscreen();
    }
  };

  const handleVideoClick = (doc) => {
    setFullscreenVideo(doc);
    setTimeout(() => requestFs(), 100);
  };

  const handleKey = (e, doc) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleVideoClick(doc);
    }
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    exitFs();
    setFullscreenVideo(null);
  };

  return (
    <div className="documentaries-container">
      <div className="docs-wrapper">
        <div className="videos-row">
          {documentaries.map((doc, index) => (
            <div key={doc.id} className="video-item">
              <div
                className={`video-container ${index === 0 ? "first-tile" : ""}`}
                onClick={() => handleVideoClick(doc)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => handleKey(e, doc)}
                aria-label={`Open ${doc.title}`}
              >
                {/* ✅ VPS PREVIEW MP4 (autoplay loop muted) */}
                <video
                  className="video-player"
                  src={doc.previewMp4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="video-overlay">
                  <p className="video-title">{doc.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullscreenVideo && (
        <div
          className="fullscreen-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeFullscreen}
        >
          <button
            className="close-fullscreen-top-right"
            onClick={closeFullscreen}
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="fullscreen-video-container"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${fullscreenVideo.youtubeId}?autoplay=1&controls=1`}
              title={fullscreenVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Documentaries;
