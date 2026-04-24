import { useState } from "react";

const FAQS = [
  {
    q: "Combien de temps dois-je consacrer au tournage ?",
    a: "Environ 2 à 3 heures par mois pour filmer en lots (batching). On s'occupe de la pré-production (idéation, scripts) et de toute la post-production technique.",
  },
  {
    q: "Et si je ne suis pas très à l'aise en vidéo ?",
    a: "C'est normal. Nos scripts sont conçus pour être lus via un prompteur, et notre montage dynamique masquera les hésitations. Vous paraîtrez confiant et percutant à l'écran.",
  },
  {
    q: "Ai-je besoin d'un équipement studio ?",
    a: "Non. Un smartphone récent face à une fenêtre suffit pour l'image. Si besoin, nous vous recommanderons un petit micro-cravate abordable pour un son digne d'un pro.",
  },
  {
    q: "À quelle vitesse vais-je voir l'algorithme bouger ?",
    a: "C'est un marathon, pas un sprint. Cependant, avec notre volume de 3 à 5 vidéos par semaine, la plupart des algorithmes commencent à pousser votre contenu de manière significative autour de la semaine 4 à 6.",
  },
  {
    q: "Dois-je danser sur des musiques trend ?",
    a: "Jamais. Nous bâtissons des marques d'autorité, pas du divertissement éphémère. Vous partagez de la valeur brute, face caméra, avec un style professionnel et engagé.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`reveal reveal-d${Math.min(i + 1, 4)} bg-background px-6 cursor-pointer border-b-2 border-border-strong ${i === 0 ? "border-t-2" : ""} hover:bg-surface-2 transition-colors`}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <div className="flex justify-between items-center gap-4 py-6 select-none">
              <span
                className={`font-display text-lg md:text-xl tracking-wider uppercase transition-colors ${isOpen ? "text-accent" : "text-foreground"}`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 border-2 flex items-center justify-center font-bold text-base clip-octagon transition-all duration-300 ${
                  isOpen
                    ? "bg-accent border-accent text-background rotate-45"
                    : "border-border-strong text-foreground"
                }`}
              >
                +
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-400 ease-out"
              style={{ maxHeight: isOpen ? 300 : 0 }}
            >
              <p className="pb-6 text-base text-muted-foreground leading-relaxed font-medium">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
