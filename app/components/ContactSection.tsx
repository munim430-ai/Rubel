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
            <a
              href="https://wa.me/8801641155054"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-[#20bc5a] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
