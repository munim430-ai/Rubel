"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Fallback gradient — always behind the video */}
      <div className="animated-bg absolute inset-0" />

      {/* Video background — always visible, no JS opacity gate */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay — just enough for text contrast */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="fade-up fade-up-delay-1 text-[#c9a84c] text-sm tracking-[0.4em] uppercase font-medium mb-4">
          Welcome to
        </p>
        <h1
          className="fade-up fade-up-delay-2 text-white font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          RR{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)",
            }}
          >
            Enterprise
          </span>
        </h1>
        <div className="fade-up fade-up-delay-2 flex justify-center mb-6">
          <div className="gold-divider" />
        </div>
        <p className="fade-up fade-up-delay-3 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Building trust through excellence. A legacy of dedication, integrity,
          and forward-thinking leadership.
        </p>
        <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-[#c9a84c] text-black font-semibold text-sm tracking-wide rounded hover:bg-[#e8c97a] transition-colors duration-300"
          >
            Discover More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/60 text-white font-semibold text-sm tracking-wide rounded hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
