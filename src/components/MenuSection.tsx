import { useScrollReveal } from "@/hooks/useScrollReveal";
import eggsBenedict from "@/assets/eggs-benedict.jpg";
import burger from "@/assets/burger.jpg";
import coffee from "@/assets/coffee.jpg";

const items = [
  {
    image: eggsBenedict,
    title: "Eggs Benedict",
    description: "Ouă poșate pe english muffin, cu sos hollandaise proaspăt și spanac wilted.",
    price: "38 LEI",
  },
  {
    image: burger,
    title: "Replace Burger",
    description: "Burger artizanal cu carne de vită Black Angus, brânză cheddar maturată și sos signature.",
    price: "45 LEI",
  },
  {
    image: coffee,
    title: "Specialty Coffee",
    description: "Cafea de specialitate, prăjită local, preparată cu grijă de barista noștri experimentați.",
    price: "18 LEI",
  },
];

const MenuSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="meniu" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-serif italic text-accent text-sm md:text-base tracking-wide mb-3">
            Selecția noastră
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Selecția Brunch Club
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                <span className="font-heading text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
