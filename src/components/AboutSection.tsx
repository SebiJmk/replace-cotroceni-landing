import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImage from "@/assets/about.jpg";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="povestea" className="py-24 md:py-32 bg-background-alt">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              src={aboutImage}
              alt="Interiorul Replace Cotroceni"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif italic text-accent text-sm tracking-wide mb-3">
              Povestea noastră
            </h3>
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground mb-8">
              Cotroceni Mood
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide mb-6">
              Suntem mai mult decât un brunch club. Suntem locul unde timpul se oprește în cel mai frumos cartier al Bucureștiului.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide mb-10">
              Te așteptăm pe Strada Nicolae Paulescu 61 pentru o experiență senzorială completă.
            </p>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
