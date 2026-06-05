export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Who We Are
            </p>
            <h2 className="text-white text-4xl font-bold mb-5 leading-tight">
              A Legacy Built on{" "}
              <span className="text-[#c9a84c]">Trust & Excellence</span>
            </h2>
            <div className="gold-divider mb-8" />
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                RR Enterprise has been a cornerstone of quality and reliability
                in the business landscape. Founded on the principles of hard
                work, integrity, and a deep commitment to our clients, we have
                grown into a trusted name across multiple industries.
              </p>
              <p>
                Our journey began with a single vision — to deliver unmatched
                value and build lasting relationships. Today, that vision drives
                every decision we make, every partnership we form, and every
                project we undertake.
              </p>
              <p>
                With a leadership team that combines decades of experience with
                fresh, innovative thinking, RR Enterprise stands poised for a
                future of continued growth and impact.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "20+", label: "Years of Excellence" },
              { value: "500+", label: "Projects Delivered" },
              { value: "200+", label: "Trusted Clients" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#12121a] border border-white/5 rounded-lg p-8 text-center hover:border-[#c9a84c]/30 transition-colors duration-300"
              >
                <p className="text-[#c9a84c] text-4xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
