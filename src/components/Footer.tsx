import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-sm font-black uppercase tracking-[0.2em] mb-6">
            Follow Us
          </h3>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-heading uppercase tracking-[0.15em] bg-transparent text-background border border-background/30 rounded-full hover:bg-background hover:text-foreground transition-none"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href="https://facebook.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-heading uppercase tracking-[0.15em] bg-transparent text-background border border-background/30 rounded-full hover:bg-background hover:text-foreground transition-none"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <span className="font-heading text-xl font-black tracking-tight uppercase">
            replace
          </span>
          <span className="block w-16 h-[1.5px] bg-background mt-0.5" />
          <span className="font-serif text-[9px] tracking-[0.2em] uppercase mt-1">
            The Brunch Club
          </span>
        </div>

        {/* Made with love */}
        <p className="text-center text-[11px] text-background/50 font-heading tracking-[0.1em]">
          Made with ❤️ by Bit & Form
        </p>
      </div>
    </footer>
  );
};

export default Footer;
