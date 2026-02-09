import { useState } from 'react';
import './Documentaries.css';

function Documentaries() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const documentaries = [
    {
      id: 1,
      title: 'AJiry by Mastercard Foundation - Kisii, County',
      youtubeId: '_QDNf5Hme3k',
    },
    {
      id: 2,
      title: 'The Story Of Janny Marangu - Tumaini Trust Kenya',
      youtubeId: 'qwU35GGST1E',
    }
  ];

  // track iframe load state keyed by youtubeId
  const [loaded, setLoaded] = useState({});

  const onIframeLoad = (youtubeId) => {
    setLoaded(prev => ({ ...prev, [youtubeId]: true }));
  };

  const requestFs = () => {
    const fullscreenContainer = document.querySelector('.fullscreen-overlay');
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

    // request fullscreen after DOM paint
    setTimeout(() => {
      requestFs();
    }, 100);
  };

  const handleKey = (e, doc) => {
    if (e.key === 'Enter' || e.key === ' ') {
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
          {documentaries.map((doc) => (
            <div key={doc.id} className="video-item">
              <div
                className={`video-container ${loaded[doc.youtubeId] ? 'loaded' : ''}`}
                onClick={() => handleVideoClick(doc)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => handleKey(e, doc)}
              >
                <iframe
                  className="video-player"
                  src={`https://www.youtube.com/embed/${doc.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${doc.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
                  title={doc.title}
                  frameBorder="0"
                  onLoad={() => onIframeLoad(doc.youtubeId)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-fullscreen-top-right" onClick={closeFullscreen}>
            ✕
          </button>

          <div className="fullscreen-video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${fullscreenVideo.youtubeId}?autoplay=1&controls=1`}
              title={fullscreenVideo.title}
              frameBorder="0"
              onLoad={() => onIframeLoad(fullscreenVideo.youtubeId)}
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
