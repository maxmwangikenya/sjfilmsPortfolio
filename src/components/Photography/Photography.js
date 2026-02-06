import React, { useMemo, useState } from "react";
import "./Photography.css";

const Photography = () => {
  // ✅ Your three categories + files (exact names)
  const categories = useMemo(
    () => [
      {
        title: "WRTI Conference",
        folder: "WRTI conference",
        photos: [
          "WRTI Conference-258.jpg",
          "WRTI Conference-381.jpg",
          "WRTI Conference-401.jpg",
          "WRTI Conference-414.jpg",
        ],
      },
            {
        title: "University Fund",
        folder: "University Fund",
        photos: [
          "20251014100746_IMG_9168.jpg",
          "The Universites funds-143.jpg",
          "The Universites funds-281.jpg",
          "The Universites funds-55.jpg",
        ],
      },
      {
        title: "Gigiri Social",
        folder: "Gigiri Social",
        photos: [
          "Padel Kenya_Wesanza photos-120.jpg",
          "Padel Kenya_Wesanza photos-156.jpg",
          "Padel Kenya_Wesanza photos-168.jpg",
          "Padel Kenya_Wesanza photos-215.jpg",
          "Padel Kenya_Wesanza photos-223.jpg",
          "Padel Kenya_Wesanza photos-235.jpg",
          "Padel Kenya_Wesanza photos-5.jpg",
          "Padel Tournament-118.jpg",
          "Padel Tournament-489.jpg",
          "Padel Tournament-522.jpg",
          "Padel Tournament-584.jpg",
          "Padel Tournament-74.jpg",
        ],
      },
    ],
    []
  );

  // ✅ Lightbox (click any image)
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const buildPublicUrl = (categoryFolder, filename) => {
    // Images are in: public/Images/Photography/<folder>/<file>
    // encodeURI fixes spaces in folder & filenames
    const rawPath = `/Images/Photography/${categoryFolder}/${filename}`;
    return encodeURI(rawPath);
  };

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || "Photo");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxAlt("");
    document.body.style.overflow = "";
  };

  return (
    <div className="photo-page">
      {/* Page Header */}
      <header className="photo-header">
        <h1 className="photo-title">Photography</h1>
        <p className="photo-subtitle">
          Explore our work across events, storytelling, and documentary-style coverage.
        </p>
      </header>

      {/* Categories */}
      <main className="photo-content">
        {categories.map((cat) => (
          <section className="photo-section" key={cat.title}>
            <div className="photo-section-head">
              <h2 className="photo-section-title">{cat.title}</h2>
              <div className="photo-divider" />
            </div>

            <div className="photo-grid">
              {cat.photos.map((file) => {
                const src = buildPublicUrl(cat.folder, file);
                const alt = `${cat.title} - ${file}`;

                return (
                  <button
                    type="button"
                    key={`${cat.title}-${file}`}
                    className="photo-tile"
                    onClick={() => openLightbox(src, alt)}
                    aria-label={`Open ${alt}`}
                  >
                    <img
                      className="photo-img"
                      src={src}
                      alt={alt}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            ✕
          </button>

          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={lightboxSrc} alt={lightboxAlt} />
            <p className="lightbox-caption">{lightboxAlt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
