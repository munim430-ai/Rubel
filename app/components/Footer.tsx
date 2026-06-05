import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c]/30">
              <Image
                src="/images/logo.jpg"
                alt="RR Enterprise"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">RR Enterprise</p>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                Excellence in Business
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            {["Home", "About", "Leadership", "Services", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>

          {/* Copyright */}
          <p className="text-gray-600 text-xs text-center">
            &copy; {new Date().getFullYear()} RR Enterprise. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
