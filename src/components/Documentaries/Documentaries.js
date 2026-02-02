import { useState } from 'react';
import './Documentaries.css';


function Documentaries() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const documentaries = [
    {
      id: 1,
      title: 'AJiry Kisii',
      youtubeId: '_QDNf5Hme3k',
      isFeatured: true
    },
    {
      id: 2,
      title: 'AJiry Machakos',
      youtubeId: 'TOGXnJUkteA',
      isFeatured: false
    },
    {
      id: 3,
      title: 'The Story Of Janny Marangu',
      youtubeId: 'cN9sgUwkIms',
      isFeatured: false
    }
  ];

  // track iframe load state keyed by youtubeId
  const [loaded, setLoaded] = useState({});

  const onIframeLoad = (youtubeId) => {
    setLoaded(prev => ({ ...prev, [youtubeId]: true }));
  };

  const handleVideoClick = (doc) => {
    setFullscreenVideo(doc);
    
    // Request fullscreen after a brief delay to ensure DOM is ready
    setTimeout(() => {
      const fullscreenContainer = document.querySelector('.fullscreen-overlay');
      if (fullscreenContainer) {
        if (fullscreenContainer.requestFullscreen) {
          fullscreenContainer.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
          });
        } else if (fullscreenContainer.webkitRequestFullscreen) {
          fullscreenContainer.webkitRequestFullscreen();
        } else if (fullscreenContainer.mozRequestFullScreen) {
          fullscreenContainer.mozRequestFullScreen();
        } else if (fullscreenContainer.msRequestFullscreen) {
          fullscreenContainer.msRequestFullscreen();
        }
      }
    }, 100);
  };

  const handleKey = (e, doc) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleVideoClick(doc);
    }
  }; 

  const featuredDoc = documentaries.find(doc => doc.isFeatured);
  const regularDocs = documentaries.filter(doc => !doc.isFeatured);

  return (
    <div className="documentaries-container">
      <div className="docs-wrapper">
        {/* Featured Video - Large */}
        <div className="featured-video">
          <div 
            className={`video-container ${loaded[featuredDoc.youtubeId] ? 'loaded' : ''}`}
            onClick={() => handleVideoClick(featuredDoc)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => handleKey(e, featuredDoc)}
          >
            <iframe
              className="video-player"
              src={`https://www.youtube.com/embed/${featuredDoc.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${featuredDoc.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
              title={featuredDoc.title}
              frameBorder="0"
              onLoad={() => onIframeLoad(featuredDoc.youtubeId)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            <div className="video-overlay">
              <h2 className="video-title">{featuredDoc.title}</h2>
            </div>
          </div>
        </div>

        {/* Regular Videos - Two Below */}
        <div className="regular-videos">
          {regularDocs.map((doc) => (
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
                  <h3 className="video-title">{doc.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenVideo && (
        <div 
          className="fullscreen-overlay"
          onClick={() => {
            // Exit fullscreen
            if (document.fullscreenElement) {
              document.exitFullscreen().catch(err => {
                console.log('Exit fullscreen failed:', err);
              });
            } else if (document.webkitFullscreenElement) {
              document.webkitExitFullscreen();
            } else if (document.mozFullScreenElement) {
              document.mozCancelFullScreen();
            } else if (document.msFullscreenElement) {
              document.msExitFullscreen();
            }
            
            setFullscreenVideo(null);
          }}
        >
          <button 
            className="close-fullscreen-top-right"
            onClick={(e) => {
              e.stopPropagation();
              
              // Exit fullscreen
              if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => {
                  console.log('Exit fullscreen failed:', err);
                });
              } else if (document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
              } else if (document.mozFullScreenElement) {
                document.mozCancelFullScreen();
              } else if (document.msFullscreenElement) {
                document.msExitFullscreen();
              }
              
              setFullscreenVideo(null);
            }}
          >
            ✕
          </button>
          
          <div className="fullscreen-video-container">
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