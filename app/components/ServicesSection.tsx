const services = [
  {
    icon: "◈",
    title: "Business Consulting",
    desc: "Strategic guidance to help your business grow, adapt, and thrive in competitive markets.",
  },
  {
    icon: "◉",
    title: "Enterprise Solutions",
    desc: "End-to-end enterprise services tailored to the unique needs of large-scale operations.",
  },
  {
    icon: "◇",
    title: "Supply & Logistics",
    desc: "Reliable supply chain management and logistics solutions ensuring timely, efficient delivery.",
  },
  {
    icon: "◆",
    title: "Investment & Finance",
    desc: "Sound financial advisory and investment strategies to maximize returns and minimize risk.",
  },
  {
    icon: "○",
    title: "Partnerships & Alliances",
    desc: "Building meaningful, long-lasting partnerships that create mutual value and opportunity.",
  },
  {
    icon: "●",
    title: "Quality Assurance",
    desc: "Rigorous standards and oversight to ensure every deliverable meets the highest benchmarks.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            What We Do
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Our <span className="text-[#c9a84c]">Services</span>
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#12121a] border border-white/5 rounded-xl p-8 hover:border-[#c9a84c]/30 hover:bg-[#1c1c28] transition-all duration-300"
            >
              <div className="text-[#c9a84c] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
