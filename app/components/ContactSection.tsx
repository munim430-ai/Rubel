"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#12121a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Contact <span className="text-[#c9a84c]">Us</span>
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Let&apos;s Build Something Together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a business enquiry, want to explore a
                partnership, or simply want to learn more about what RR
                Enterprise can offer — we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-[#c9a84c] font-medium min-w-[80px] text-sm">Email</span>
                <a
                  href="mailto:Aponrubel480@gmail.com"
                  className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors"
                >
                  Aponrubel480@gmail.com
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#c9a84c] font-medium min-w-[80px] text-sm">Phone</span>
                <a
                  href="tel:+8801641155054"
                  className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors"
                >
                  +880 1641-155054
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#c9a84c] font-medium min-w-[80px] text-sm">Location</span>
                <span className="text-gray-300 text-sm">
                  Rajendrapur, Gazipur, Dhaka
                </span>
              </div>
            </div>

            {/* Quick call CTA */}
            <a
              href="tel:+8801641155054"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#c9a84c]/40 rounded-lg hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300 group"
            >
              <span className="text-[#c9a84c] text-lg">📞</span>
              <div>
                <p className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">
                  Call Us Now
                </p>
                <p className="text-gray-400 text-xs">+880 1641-155054</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#c9a84c] text-black font-semibold text-sm tracking-wide rounded-lg hover:bg-[#e8c97a] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
