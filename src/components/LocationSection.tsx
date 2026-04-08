import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock } from "lucide-react";
import { useState } from "react";

const LocationSection = () => {
  const ref = useScrollReveal();
  const [mapHover, setMapHover] = useState(false);

  return (
    <section id="contact" className="bg-background">
      {/* Info Row */}
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="font-serif italic text-accent text-sm tracking-wide mb-3">
            Unde ne găsești
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
            Vizitează-ne în Cotroceni
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-2">
                Adresă
              </h3>
              <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                Strada Nicolae Paulescu 61,
                <br />
                București, România (Zona Cotroceni)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-2">
                Program
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm text-muted-foreground tracking-wide max-w-[260px]">
                  <span>Luni – Vineri</span>
                  <span>09:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground tracking-wide max-w-[260px]">
                  <span>Sâmbătă – Duminică</span>
                  <span>09:00 – 19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Massive Map */}
      <div
        className="relative w-full h-[50vh] md:h-[60vh]"
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.3!2d26.07!3d44.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzQ4LjAiTiAyNsKwMDQnMTIuMCJF!5e0!3m2!1sen!2sro!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Replace Cotroceni location"
          className="w-full h-full"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            mapHover
              ? "opacity-100 bg-foreground/30"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="https://maps.google.com/?q=Strada+Nicolae+Paulescu+61+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-foreground text-background text-sm font-heading font-black uppercase tracking-[0.2em] rounded-full hover:bg-background hover:text-foreground border-2 border-background transition-none"
          >
            Vezi Harta
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
