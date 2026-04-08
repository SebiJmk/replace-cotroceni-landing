import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";

import eggsBenedict from "@/assets/eggs-benedict.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import burger from "@/assets/burger.jpg";
import shakshuka from "@/assets/shakshuka.jpg";
import pancakes from "@/assets/pancakes.jpg";
import croissant from "@/assets/croissant.jpg";

import flatWhite from "@/assets/flat-white.jpg";
import v60 from "@/assets/v60.jpg";
import matcha from "@/assets/matcha.jpg";
import espressoTonic from "@/assets/espresso-tonic.jpg";
import mimosa from "@/assets/mimosa.jpg";
import lemonade from "@/assets/lemonade.jpg";

type MenuItem = {
  image: string;
  title: string;
  description: string;
  price: string;
};

const foodItems: MenuItem[] = [
  { image: eggsBenedict, title: "Eggs Benedict cu Somon", description: "Chiflă artizanală, somon afumat, ouă poșate, sos hollandaise infuzat.", price: "42 RON" },
  { image: avocadoToast, title: "Avocado Smash Toast", description: "Pâine cu maia, guacamole fin, roșii cherry confiate, ou poșat, microplante.", price: "38 RON" },
  { image: burger, title: "Replace Truffle Burger", description: "Vită maturată, brânză cheddar maturată, dulceață de ceapă, mayo cu trufe, cartofi prăjiți.", price: "55 RON" },
  { image: shakshuka, title: "Shakshuka Cotroceni", description: "Ouă gătite lent în sos de roșii picant, ardei copt, brânză feta, servit cu maia prăjită.", price: "39 RON" },
  { image: pancakes, title: "Pancakes cu Fructe de Pădure", description: "Clătite pufoase americane, sirop de arțar pur, mascarpone, fructe proaspete.", price: "35 RON" },
  { image: croissant, title: "Croissant Fistic Supreme", description: "Croissant franțuzesc untos, copt zilnic, umplut generos cu cremă fină de fistic.", price: "28 RON" },
];

const drinkItems: MenuItem[] = [
  { image: flatWhite, title: "Flat White", description: "Dublu shot de espresso de specialitate (Etiopia) și cremă de lapte perfect texturată.", price: "18 RON" },
  { image: v60, title: "V60 Filter Coffee", description: "Cafea de filtru preparată manual, note florale și fructate, single origin Columbia.", price: "22 RON" },
  { image: matcha, title: "Matcha Latte", description: "Pudră de matcha ceremonială din Japonia, lapte de ovăz, ușor îndulcit.", price: "24 RON" },
  { image: espressoTonic, title: "Espresso Tonic", description: "Espresso dublu, apă tonică premium, gheață și un twist de grapefruit.", price: "20 RON" },
  { image: mimosa, title: "Mimosa Brunch", description: "Prosecco rece și fresh de portocale stors pe loc. Perfect pentru weekend.", price: "30 RON" },
  { image: lemonade, title: "Limonadă cu Busuioc", description: "Lămâi proaspete, sirop de zahăr brut și frunze de busuioc proaspăt.", price: "22 RON" },
];

const MenuSection = () => {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState<"food" | "drinks">("food");
  const [selected, setSelected] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const items = activeTab === "food" ? foodItems : drinkItems;

  const switchTab = (tab: "food" | "drinks") => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 200);
  };

  return (
    <>
      <section id="meniu" className="py-24 md:py-32 bg-background">
        <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-serif italic text-accent text-sm md:text-base tracking-wide mb-3">
              Selecția noastră
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
              Meniul Replace
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-14">
            <button
              onClick={() => switchTab("food")}
              className={`px-8 py-3 text-xs font-heading font-black uppercase tracking-[0.2em] rounded-full border border-foreground active:scale-95 transition-transform duration-100 ${
                activeTab === "food"
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-foreground hover:text-background"
              }`}
              style={{ transitionProperty: "transform" }}
            >
              Mâncare
            </button>
            <button
              onClick={() => switchTab("drinks")}
              className={`px-8 py-3 text-xs font-heading font-black uppercase tracking-[0.2em] rounded-full border border-foreground active:scale-95 transition-transform duration-100 ${
                activeTab === "drinks"
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-foreground hover:text-background"
              }`}
              style={{ transitionProperty: "transform" }}
            >
              Băuturi
            </button>
          </div>

          {/* Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 transition-opacity duration-200 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            {items.map((item, i) => (
              <button
                key={`${activeTab}-${i}`}
                onClick={() => setSelected(i)}
                className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none active:scale-[0.97] transition-transform duration-150"
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
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-background bg-foreground/80 px-3 py-1.5 inline-block">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background max-w-lg w-full relative animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground rounded-full transition-none active:scale-90"
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
              <div className="flex items-baseline justify-between mb-4 gap-4">
                <h3 className="font-heading text-lg md:text-xl font-black uppercase tracking-tight text-foreground">
                  {items[selected].title}
                </h3>
                <span className="font-heading text-sm font-bold tracking-[0.1em] text-foreground whitespace-nowrap">
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
