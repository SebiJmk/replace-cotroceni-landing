import { Instagram, Facebook } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const gridPlaceholders = [
  "Brunch plate cu ouă",
  "Latte art specialty",
  "Interior minimalist",
  "Toast cu avocado",
  "Cappuccino marble",
  "Desert de sezon",
];

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <footer className="bg-foreground text-background">
      <div ref={ref} className="section-reveal py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Follow Us Title */}
          <h3 className="font-serif italic text-center text-2xl md:text-3xl text-background/90 mb-12 tracking-wide">
            Urmărește-ne
          </h3>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 mb-20">
            <a
              href="https://instagram.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-background/25 rounded-full text-background hover:bg-background hover:text-foreground transition-none"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-background/25 rounded-full text-background hover:bg-background hover:text-foreground transition-none"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Instagram Grid - 3 columns, vertical composition */}
          <div className="grid grid-cols-3 gap-2 mb-24 max-w-3xl mx-auto">
            {gridPlaceholders.map((alt, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-background/[0.06] hover:bg-background/[0.12] transition-none flex items-center justify-center overflow-hidden"
              >
                <span className="text-[9px] text-background/15 font-heading uppercase tracking-[0.15em] text-center px-3 select-none">
                  {alt}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/10 pt-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              {/* Left: Logo */}
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-2xl font-black tracking-tight uppercase text-background">
                  replace
                </span>
                <span className="block w-full h-[1.5px] bg-background mt-0.5" />
                <span className="font-serif text-[9px] tracking-[0.2em] uppercase mt-1.5 text-background/50">
                  The Brunch Club
                </span>
              </div>

              {/* Center: Copyright */}
              <p className="text-[10px] text-background/25 font-heading uppercase tracking-[0.12em] md:text-center">
                © 2026 Replace Bucharest
              </p>

              {/* Right: Credit */}
              <p className="text-[11px] text-background/40 font-heading tracking-wide text-right">
                Made with ❤️ by Bit & Form
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
