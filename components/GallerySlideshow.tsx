"use client";

import Image from "next/image";
import { useState } from "react";

type GallerySlide = {
  src: string;
  alt: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const gallerySlides: GallerySlide[] = [
  { src: `${basePath}/gallery/e68af31d-17f7-4766-9447-b106bd16207d.JPG`, alt: "Gallery photo 1" },
  { src: `${basePath}/gallery/dbcb52e0-5c24-4f31-8ead-d7a9b67a90d2.JPG`, alt: "Gallery photo 2" },
  { src: `${basePath}/gallery/c9373742-e27f-4c11-8f05-993e067f34b1.JPG`, alt: "Gallery photo 3" },
  { src: `${basePath}/gallery/c3c577a7-716e-4217-8b6f-81455fad73ee.JPG`, alt: "Gallery photo 4" },
  { src: `${basePath}/gallery/bcca9e0b-d5ee-4253-924a-bfb7e167b547.JPG`, alt: "Gallery photo 5" },
  { src: `${basePath}/gallery/a4e8bdf4-c125-446f-a09c-bf2a8ad9cd9c.JPG`, alt: "Gallery photo 6" },
  { src: `${basePath}/gallery/a2f04c0c-76f5-4c34-b5c6-e97679930aa9.JPG`, alt: "Gallery photo 7" },
  { src: `${basePath}/gallery/6caff5b3-a965-424f-9d21-12b26e3d0755.JPG`, alt: "Gallery photo 8" },
  { src: `${basePath}/gallery/69bc7502-e0e4-4e94-b89f-21b0d7bab19d.JPG`, alt: "Gallery photo 9" },
  { src: `${basePath}/gallery/67e34baf-7b62-466d-a9ce-cdac5f18a4b2.JPG`, alt: "Gallery photo 10" },
];

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
      </div>
      <div className="gallery-controls">
        <button type="button" onClick={showPrevious} aria-label="Previous image">←</button>
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(gallerySlides.length).padStart(2, "0")}</span>
        <button type="button" onClick={showNext} aria-label="Next image">→</button>
      </div>
    </section>
  );
}
