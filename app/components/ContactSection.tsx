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
              {[
                { label: "Email", value: "info@rrenterprisebd.com" },
                { label: "Phone", value: "+880 1XXX-XXXXXX" },
                { label: "Location", value: "Dhaka, Bangladesh" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-[#c9a84c] font-medium min-w-[80px] text-sm">
                    {item.label}
                  </span>
                  <span className="text-gray-300 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
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
