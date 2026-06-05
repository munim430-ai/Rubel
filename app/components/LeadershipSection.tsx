import Image from "next/image";

const leaders = [
  {
    name: "Billal Hossain",
    title: "Founder & Chairman",
    role: "founder",
    image: "/images/founder.jpg",
    bio: "The visionary force behind RR Enterprise, our Founder built this organization from the ground up with unwavering dedication and a passion for excellence. His decades of experience and entrepreneurial spirit have shaped the very foundation of what we stand for today.",
    tag: "Founder",
  },
  {
    name: "A. R. Rubel",
    title: "Chairman of the Board",
    role: "chairman",
    image: "/images/chairman.jpg",
    bio: "Carrying forward his father's legacy with innovation and drive, our Chairman brings a modern perspective to our time-honored values. His leadership steers RR Enterprise into new frontiers while preserving the trust and integrity at the heart of our business.",
    tag: "Chairman",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-6 bg-[#12121a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Our People
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Meet the <span className="text-[#c9a84c]">Leadership</span>
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider" />
          </div>
        </div>

        {/* Leaders */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.role}
              className="group bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a84c]/5"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#c9a84c] text-black text-xs font-bold tracking-widest uppercase rounded">
                  {leader.tag}
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#c9a84c] text-sm font-medium tracking-wide mb-4">
                  {leader.title}
                </p>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
