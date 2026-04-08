import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Follow Us */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-sm font-black uppercase tracking-[0.2em] mb-6">
            Follow Us
          </h3>
          <a
            href="https://instagram.com/replacecotroceni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-heading uppercase tracking-[0.15em] text-background/70 hover:text-background transition-colors"
          >
            <Instagram size={18} />
            @replacecotroceni
          </a>
        </div>

        {/* Instagram grid placeholder */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-1 mb-12 max-w-3xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-background/10 hover:bg-background/20 transition-colors"
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-background/10">
          {/* Logo */}
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-xl font-black tracking-tight uppercase">
              replace
            </span>
            <span className="block w-full h-[1.5px] bg-background mt-0.5" />
            <span className="font-serif text-[9px] tracking-[0.2em] uppercase mt-1">
              The Brunch Club
            </span>
          </div>

          <p className="text-[10px] text-background/40 font-heading uppercase tracking-[0.15em]">
            © 2026 Replace – The Brunch Club.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
