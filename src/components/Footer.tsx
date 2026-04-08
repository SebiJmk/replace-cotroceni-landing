import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-xl font-black tracking-tight uppercase">
              replace
            </span>
            <span className="block w-full h-[1.5px] bg-primary-foreground mt-0.5" />
            <span className="font-serif text-[9px] tracking-[0.2em] uppercase mt-1">
              The Brunch Club
            </span>
          </div>

          {/* Social */}
          <a
            href="https://instagram.com/replacecotroceni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.15em] text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={16} />
            @replacecotroceni
          </a>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/50 tracking-wide">
            © 2026 Replace – The Brunch Club.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
