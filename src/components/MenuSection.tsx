import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import eggsBenedict from "@/assets/eggs-benedict.jpg";
import burger from "@/assets/burger.jpg";
import coffee from "@/assets/coffee.jpg";

const items = [
  {
    image: eggsBenedict,
    title: "Eggs Benedict",
    description: "Ouă Benedict cu sos hollandaise artizanal, spanac proaspăt și english muffin.",
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
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="meniu" className="py-24 md:py-32 bg-background">
        <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <p className="font-serif italic text-accent text-sm md:text-base tracking-wide mb-3">
              Selecția noastră
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
              Brunch Selection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setSelected(i)}
                className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-background bg-foreground/80 px-3 py-1.5">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground rounded-full transition-none"
              aria-label="Închide"
            >
              <X size={16} />
            </button>
            <img
              src={items[selected].image}
              alt={items[selected].title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-8">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-foreground">
                  {items[selected].title}
                </h3>
                <span className="font-heading text-sm font-bold tracking-[0.1em] text-foreground">
                  {items[selected].price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                {items[selected].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSection;
