import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none">
          <span className="font-heading text-2xl font-black tracking-tight uppercase text-foreground">
            replace
          </span>
          <span className="block w-full h-[2px] bg-foreground mt-0.5" />
          <span className="font-serif text-[10px] tracking-[0.2em] uppercase mt-1 text-foreground">
            The Brunch Club
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "#meniu", label: "Meniu" },
            { href: "#povestea", label: "Povestea Noastră" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-foreground bg-background px-3 py-1.5 border border-transparent hover:bg-foreground hover:text-background transition-all duration-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-foreground text-background text-xs font-heading font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-background hover:text-foreground border border-foreground transition-all duration-0"
          >
            Rezervă o masă
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
          {[
            { href: "#meniu", label: "Meniu" },
            { href: "#povestea", label: "Povestea Noastră" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-heading font-semibold uppercase tracking-[0.15em] text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 bg-foreground text-background text-sm font-heading font-semibold uppercase tracking-[0.15em] rounded-full text-center border border-foreground"
          >
            Rezervă o masă
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
