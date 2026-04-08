import heroImage from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interiorul restaurantului Replace din Cotroceni"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-primary-foreground tracking-tighter">
            Simplu.
            <br />
            Autentic.
            <br />
            <span className="font-serif italic font-normal normal-case text-3xl md:text-5xl lg:text-6xl">
              Replace.
            </span>
          </h1>
          <p className="mt-6 text-sm md:text-base font-body text-primary-foreground/80 max-w-md leading-relaxed tracking-wide">
            Brunch, cafea de specialitate și atmosfera inconfundabilă a cartierului Cotroceni.
          </p>
          <a
            href="#meniu"
            className="inline-block mt-8 px-8 py-3.5 bg-foreground text-background text-xs font-heading font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-background hover:text-foreground border border-primary-foreground transition-all duration-0"
          >
            Descoperă Meniul
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
