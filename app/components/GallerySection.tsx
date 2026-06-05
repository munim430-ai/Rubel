"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Heavy excavator at sunset",
    col: "col-span-2",
    row: "row-span-2",
    pos: "object-center",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "CAT tracked loader in morning mist",
    col: "col-span-1",
    row: "row-span-1",
    pos: "object-center",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Road roller compacting asphalt at night",
    col: "col-span-1",
    row: "row-span-1",
    pos: "object-top",
  },
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Bulldozer and dump trucks on site",
    col: "col-span-1",
    row: "row-span-1",
    pos: "object-center",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Bulldozer tracks glowing at sunset",
    col: "col-span-2",
    row: "row-span-1",
    pos: "object-center",
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

        {/* Masonry grid — 3 cols, rows of 260px */}
        <div className="grid grid-cols-3 grid-rows-[260px_260px_260px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${photo.col} ${photo.row}`}
              onClick={() => setLightbox(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.pos} group-hover:scale-105 transition-transform duration-700`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* hover scrim */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
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
              {/* gold corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c] transition-colors duration-300 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c] transition-colors duration-300 rounded-br-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl leading-none transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
