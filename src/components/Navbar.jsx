import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Verification", href: "#identity" },
  { label: "Process", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-xl font-semibold text-cyan-300 shadow-soft">
            SV
          </div>
          <div>
            <p className="font-display text-2xl font-semibold leading-none text-slate-100">
              Shri Radhe
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Verification
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Request Demo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-2xl text-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
