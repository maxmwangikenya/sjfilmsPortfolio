// src/components/Documentaries/Documentaries.js
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './Documentaries.css';

function Documentaries() {
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

const documentaries = [
  {
    id: 1,
    title: 'AJiry Kisii',
    youtubeId: 'JbF37EToGWg',
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
  const handlePlayPause = (id) => {
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMuteToggle = (id) => {
    setIsMuted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVideoClick = (doc) => {
    setFullscreenVideo(doc);
  };

  const featuredDoc = documentaries.find(doc => doc.isFeatured);
  const regularDocs = documentaries.filter(doc => !doc.isFeatured);

  return (
    <div className="documentaries-container">
      <div className="docs-wrapper">
        {/* Featured Video - Large */}
        <div className="featured-video">
          <div 
            className="video-container"
            onClick={() => handleVideoClick(featuredDoc)}
          >
            <iframe
              className="video-player"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${featuredDoc.youtubeId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
              title={featuredDoc.title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            
            <div className="video-overlay">
              <button 
                className="play-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause(featuredDoc.id);
                }}
              >
                {isPlaying[featuredDoc.id] ? (
                  <Pause size={50} />
                ) : (
                  <Play size={50} />
                )}
              </button>
            </div>

            <div className="video-info">
              <h2 className="video-title">{featuredDoc.title}</h2>
              <p className="video-subtitle">{featuredDoc.subtitle}</p>
            </div>

            <div className="video-controls">
              <button 
                className="control-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMuteToggle(featuredDoc.id);
                }}
              >
                {isMuted[featuredDoc.id] ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Regular Videos - Two Below */}
        <div className="regular-videos">
          {regularDocs.map((doc) => (
            <div key={doc.id} className="video-item">
              <div 
                className="video-container"
                onClick={() => handleVideoClick(doc)}
              >
                <iframe
                  className="video-player"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${doc.youtubeId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title={doc.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                
                <div className="video-overlay">
                  <button 
                    className="play-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPause(doc.id);
                    }}
                  >
                    {isPlaying[doc.id] ? (
                      <Pause size={40} />
                    ) : (
                      <Play size={40} />
                    )}
                  </button>
                </div>

                <div className="video-info">
                  <h3 className="video-title">{doc.title}</h3>
                  <p className="video-subtitle">{doc.subtitle}</p>
                </div>

                <div className="video-controls">
                  <button 
                    className="control-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMuteToggle(doc.id);
                    }}
                  >
                    {isMuted[doc.id] ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fullscreen Overlay */}
      {fullscreenVideo && (
        <div 
          className="fullscreen-overlay"
          onClick={() => setFullscreenVideo(null)}
        >
          {/* ✅ Close button in TOP-RIGHT */}
          <button 
            className="close-fullscreen-top-right"
            onClick={(e) => {
              e.stopPropagation();
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