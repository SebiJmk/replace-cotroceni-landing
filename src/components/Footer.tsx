import { Instagram, Facebook } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const placeholderImages = [
  "Brunch plate cu ouă și avocado",
  "Latte art cafea de specialitate",
  "Interior minimalist restaurant",
  "Toast cu somon afumat",
  "Cappuccino pe masă de marmură",
  "Desert cu fructe de sezon",
];

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <footer className="bg-foreground text-background">
      {/* Social Section */}
      <div ref={ref} className="section-reveal py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h3 className="font-serif italic text-center text-2xl md:text-3xl text-background/90 mb-10 tracking-wide">
            Follow Us
          </h3>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="https://instagram.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-background/30 rounded-full text-background hover:bg-background hover:text-foreground transition-none"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/replacecotroceni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-background/30 rounded-full text-background hover:bg-background hover:text-foreground transition-none"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-3 gap-2 mb-20 max-w-3xl mx-auto">
            {placeholderImages.map((alt, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-background/8 hover:bg-background/15 transition-none flex items-center justify-center overflow-hidden"
              >
                <span className="text-[10px] text-background/20 font-heading uppercase tracking-wider text-center px-2">
                  {alt}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Logo */}
            <div className="flex flex-col items-start leading-none">
              <span className="font-heading text-2xl font-black tracking-tight uppercase text-background">
                replace
              </span>
              <span className="block w-full h-[1.5px] bg-background mt-0.5" />
              <span className="font-serif text-[9px] tracking-[0.2em] uppercase mt-1 text-background/60">
                The Brunch Club
              </span>
            </div>

            {/* Center: Copyright */}
            <p className="text-[10px] text-background/30 font-heading uppercase tracking-[0.15em]">
              © 2026 Replace – The Brunch Club
            </p>

            {/* Right: Credit */}
            <p className="text-[11px] text-background/50 font-heading tracking-wide">
              Made with ❤️ by Bit & Form
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
