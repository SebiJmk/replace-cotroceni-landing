import { useScrollReveal } from "@/hooks/useScrollReveal";

const specialtyCoffee = [
  { name: "Espresso", origin: "Blend House", price: "12 LEI" },
  { name: "Flat White", origin: "Ethiopia Yirgacheffe", price: "18 LEI" },
  { name: "V60 Pour Over", origin: "Colombia Huila", price: "22 LEI" },
];

const brunchDrinks = [
  { name: "Mimosa", detail: "Prosecco & suc de portocale proaspăt", price: "28 LEI" },
  { name: "Bloody Mary", detail: "Vodka, suc de roșii, condimente house", price: "32 LEI" },
  { name: "Fresh Orange Juice", detail: "Stors la minut", price: "16 LEI" },
  { name: "Limonadă cu Busuioc", detail: "Homemade, lămâi proaspete & busuioc", price: "18 LEI" },
];

const DrinksSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background-alt">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-serif italic text-accent text-sm md:text-base tracking-wide mb-3">
            Băuturile noastre
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
            Liquid Energy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Specialty Coffee */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.2em] text-foreground mb-8 pb-3 border-b border-border">
              Specialty Coffee
            </h3>
            <div className="space-y-6">
              {specialtyCoffee.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="font-heading text-base font-bold text-foreground">
                      {item.name}
                    </span>
                    <span className="ml-3 text-xs text-muted-foreground tracking-wide font-serif italic">
                      {item.origin}
                    </span>
                  </div>
                  <span className="font-heading text-xs font-semibold tracking-[0.1em] text-muted-foreground whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brunch Specials */}
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.2em] text-foreground mb-8 pb-3 border-b border-border">
              Brunch Specials
            </h3>
            <div className="space-y-6">
              {brunchDrinks.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-heading text-base font-bold text-foreground">
                      {item.name}
                    </span>
                    <span className="font-heading text-xs font-semibold tracking-[0.1em] text-muted-foreground whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;
