"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Video — z-index 0, covers the whole section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Very light scrim so text stays readable — z-index 1 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.45) 100%)",
          zIndex: 1,
        }}
      />

      {/* Gold accent lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)", zIndex: 2 }} />

      {/* Content — z-index 2 */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 1.5rem", maxWidth: "56rem", margin: "0 auto" }}>
        <p className="fade-up fade-up-delay-1 text-[#c9a84c] text-sm tracking-[0.4em] uppercase font-medium mb-4"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
          Welcome to
        </p>
        <h1
          className="fade-up fade-up-delay-2 font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.9)",
          }}
        >
          RR{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Enterprise
          </span>
        </h1>
        <div className="fade-up fade-up-delay-2 flex justify-center mb-6">
          <div className="gold-divider" />
        </div>
        <p
          className="fade-up fade-up-delay-3 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "#f0f0f0", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
        >
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
            href="tel:+8801641155054"
            className="px-8 py-3 border border-white/70 text-white font-semibold text-sm tracking-wide rounded hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            style={{ backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.2)" }}
          >
            📞 +880 1641-155054
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.7, zIndex: 2 }}>
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
