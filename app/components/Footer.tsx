import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c9a84c]/30 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="RR Enterprise"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-bold">RR Enterprise</p>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                Excellence in Business
              </p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                Rajendrapur, Gazipur, Dhaka
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
              Quick Links
            </p>
            {["Home", "About", "Leadership", "Services", "Gallery", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
              Contact
            </p>
            <a
              href="tel:+8801641155054"
              className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors"
            >
              +880 1641-155054
            </a>
            <a
              href="mailto:Aponrubel480@gmail.com"
              className="text-gray-500 text-xs hover:text-[#c9a84c] transition-colors"
            >
              Aponrubel480@gmail.com
            </a>
            <p className="text-gray-500 text-xs">
              Rajendrapur, Gazipur, Dhaka
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} RR Enterprise. All rights reserved.
          </p>
          <a
            href="tel:+8801641155054"
            className="text-[#c9a84c] text-xs hover:text-[#e8c97a] transition-colors font-medium"
          >
            📞 +880 1641-155054
          </a>
        </div>
      </div>
    </footer>
  );
}
