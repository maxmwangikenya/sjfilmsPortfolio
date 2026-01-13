// src/components/Documentaries/Documentaries.js
import { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';
import './Documentaries.css';

function Documentaries() {
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const videoRefs = useRef({});

  const documentaries = [
    {
      id: 1,
      title: 'AJiry Kisii',
      // subtitle: 'Landscape Trailer',
      videoUrl: '/images/Documentaries/AJiry Kisii, Landscape Trailer.mp4',
      isFeatured: true
    },
    {
      id: 2,
      title: 'AJiry Machakos',
      // subtitle: 'Landscape Trailer',
      videoUrl: '/images/Documentaries/AJiry Machakos, Landscape Trailer.mp4',
      isFeatured: false
    },
    {
      id: 3,
      title: 'The Story Of Janny Marangu',
      // subtitle: 'Personal Journey',
      videoUrl: '/images/Documentaries/The Story Of Janny Marangu.mp4',
      isFeatured: false
    }
  ];

  const handlePlayPause = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (isPlaying[id]) {
      video.pause();
      setIsPlaying(prev => ({ ...prev, [id]: false }));
    } else {
      video.play();
      setIsPlaying(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleMuteToggle = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFullscreen = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
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
            <video
              ref={el => videoRefs.current[featuredDoc.id] = el}
              className="video-player"
              src={featuredDoc.videoUrl}
              loop
              playsInline
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
              <button 
                className="control-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFullscreen(featuredDoc.id);
                }}
              >
                <Maximize2 size={22} />
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
                <video
                  ref={el => videoRefs.current[doc.id] = el}
                  className="video-player"
                  src={doc.videoUrl}
                  loop
                  playsInline
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
                  <button 
                    className="control-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFullscreen(doc.id);
                    }}
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fullscreen Overlay with TOP-RIGHT Close Button */}
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
            <video
              autoPlay
              muted={!!isMuted[fullscreenVideo.id]} // ✅ Not muted by default
              onPlay={() => setIsPlaying(prev => ({ ...prev, [fullscreenVideo.id]: true }))}
              onPause={() => setIsPlaying(prev => ({ ...prev, [fullscreenVideo.id]: false }))}
              onEnded={() => setIsPlaying(prev => ({ ...prev, [fullscreenVideo.id]: false }))}
              onClick={(e) => e.stopPropagation()}
              className="fullscreen-video"
              src={fullscreenVideo.videoUrl}
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Documentaries;