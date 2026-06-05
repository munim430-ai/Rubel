"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    alt: "Heavy excavator at construction site",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Tower crane over building",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Bulldozer on dirt road",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    alt: "Dump truck on mine site",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80",
    alt: "Industrial crane lifting steel",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    alt: "Road roller compacting asphalt",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Forklift in warehouse",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Concrete mixer truck",
    span: "",
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${item.span}`}
              onClick={() => setLightbox(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full border-2 border-[#c9a84c] flex items-center justify-center">
                  <span className="text-[#c9a84c] text-xl leading-none">+</span>
                </div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/80 transition-colors duration-300 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/80 transition-colors duration-300 rounded-br-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={lightbox}
              alt="Gallery preview"
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
