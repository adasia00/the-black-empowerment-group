"use client";

import Image from "next/image";
import { useState } from "react";

type GallerySlide = {
  src: string;
  alt: string;
  caption: string;
};

const gallerySlides: GallerySlide[] = [];

export default function GallerySlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (gallerySlides.length === 0) {
    return (
      <section className="gallery-carousel" aria-label="Photo gallery slideshow">
        <div className="gallery-frame gallery-empty" role="status">
          <span className="gallery-index">00 / 00</span>
          <div>
            <p className="eyebrow">The Black Empowerment Group</p>
            <h2>Gallery images coming soon</h2>
          </div>
          <span className="gallery-empty-rule" aria-hidden="true" />
        </div>
        <div className="gallery-controls" aria-label="Slideshow controls">
          <button type="button" aria-label="Previous image" disabled>←</button>
          <span>No images yet</span>
          <button type="button" aria-label="Next image" disabled>→</button>
        </div>
      </section>
    );
  }

  const activeSlide = gallerySlides[activeIndex];
  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + gallerySlides.length) % gallerySlides.length);
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % gallerySlides.length);
  };

  return (
    <section className="gallery-carousel" aria-label="Photo gallery slideshow">
      <div className="gallery-frame">
        <Image src={activeSlide.src} alt={activeSlide.alt} fill sizes="(max-width: 760px) 92vw, 80vw" />
        <p className="gallery-caption" aria-live="polite">{activeSlide.caption}</p>
      </div>
      <div className="gallery-controls">
        <button type="button" onClick={showPrevious} aria-label="Previous image">←</button>
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(gallerySlides.length).padStart(2, "0")}</span>
        <button type="button" onClick={showNext} aria-label="Next image">→</button>
      </div>
    </section>
  );
}
