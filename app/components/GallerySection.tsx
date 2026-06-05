"use client";

import { useState } from "react";

const photos = [
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Heavy excavator at sunset",
    col: "col-span-2",
    row: "row-span-2",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "CAT tracked loader in morning mist",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Road roller compacting asphalt at night",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Bulldozer and dump trucks on site",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Bulldozer tracks glowing at sunset",
    col: "col-span-2",
    row: "row-span-1",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Our Work
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Project <span className="text-[#c9a84c]">Gallery</span>
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider" />
          </div>
        </div>

        {/* Grid — inline styles for guaranteed row heights in production */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "260px 260px 260px",
            gap: "12px",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                gridColumn: photo.col === "col-span-2" ? "span 2" : "span 1",
                gridRow: photo.row === "row-span-2" ? "span 2" : "span 1",
              }}
              onClick={() => setLightbox(photo.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "transform 0.7s ease",
                }}
                className="group-hover:scale-105"
              />
              {/* hover scrim */}
              <div
                style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.3s ease" }}
                className="group-hover:bg-black/35"
              />
              {/* expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-[#c9a84c] flex items-center justify-center backdrop-blur-sm bg-black/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl leading-none transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Gallery preview"
            style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", borderRadius: 8 }}
          />
        </div>
      )}
    </section>
  );
}
