import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/conditions")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Conditions générales — Repcontent" },
      {
        name: "description",
        content:
          "Conditions générales d'utilisation et de vente des services Repcontent.",
      },
      { property: "og:title", content: "Conditions générales — Repcontent" },
      {
        property: "og:description",
        content: "CGU et CGV des services Repcontent.",
      },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl md:text-3xl tracking-wider uppercase text-foreground mb-4">
        {title}
      </h2>
      <div className="text-base text-ink-2 leading-relaxed font-medium space-y-3">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <>
      <Navbar variant="back" />
      <main className="relative z-[2] min-h-screen">
        <section className="px-6 md:px-10 pt-32 pb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent text-white text-xs font-extrabold tracking-[0.13em] uppercase px-4 py-1.5 clip-action mb-6">
            <i className="fa-solid fa-scale-balanced" /> Légal
          </span>
          <h1 className="font-display font-normal text-4xl md:text-6xl tracking-wider leading-[0.95] uppercase text-shadow-accent mb-4">
            Conditions <em className="not-italic text-gold">générales.</em>
          </h1>
          <p className="text-sm text-muted-foreground font-medium mb-12">
            Dernière mise à jour : 24 avril 2026
          </p>

          <Section title="1. Objet">
            <p>
              Les présentes conditions régissent l'utilisation du site repcontent.co et
              encadrent la prestation de services proposée par Repcontent : production de
              contenu vidéo court-format pour les marques et entrepreneurs.
            </p>
          </Section>

          <Section title="2. Prestations">
            <p>
              Repcontent propose un programme de production sur 12 semaines incluant :
              stratégie éditoriale, écriture des scripts, direction artistique, montage,
              publication multi-plateforme et suivi des performances. Le détail exact des
              livrables est précisé dans le devis remis avant le démarrage.
            </p>
          </Section>

          <Section title="3. Engagement et facturation">
            <p>
              Toute mission démarre après signature d'un devis et règlement d'un acompte. Les
              modalités de facturation (mensuelle ou par tranches) sont précisées au devis. Les
              prix sont indiqués hors taxes.
            </p>
          </Section>

          <Section title="4. Obligations du client">
            <p>Le client s'engage à :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Se rendre disponible pour les sessions de tournage planifiées</li>
              <li>Fournir les éléments nécessaires (logos, couleurs, références) en temps utile</li>
              <li>Valider les livrables dans les délais convenus</li>
              <li>S'assurer de détenir les droits sur tout contenu fourni</li>
            </ul>
          </Section>

          <Section title="5. Propriété intellectuelle">
            <p>
              Les vidéos produites deviennent la propriété pleine et entière du client après
              règlement complet de la prestation. Repcontent conserve le droit d'utiliser les
              livrables comme références dans son portfolio, sauf demande contraire écrite.
            </p>
          </Section>

          <Section title="6. Garantie qualité">
            <p>
              En cas d'insatisfaction sur un livrable, Repcontent s'engage à effectuer les
              corrections nécessaires sans frais supplémentaires jusqu'à validation, dans la
              limite du périmètre initial du brief.
            </p>
          </Section>

          <Section title="7. Confidentialité">
            <p>
              Toute information échangée dans le cadre de la mission est traitée de manière
              strictement confidentielle, des deux côtés.
            </p>
          </Section>

          <Section title="8. Résiliation">
            <p>
              Chaque partie peut mettre fin à la collaboration moyennant un préavis écrit de 30
              jours. Les sommes dues pour les prestations déjà engagées restent exigibles.
            </p>
          </Section>

          <Section title="9. Droit applicable">
            <p>
              Les présentes conditions sont soumises au droit français. Tout litige sera soumis
              à une tentative de résolution amiable avant toute action judiciaire.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Pour toute question relative à ces conditions, contactez-nous à{" "}
              <a href="mailto:contact@repcontent.co" className="text-accent font-bold hover:underline">
                contact@repcontent.co
              </a>
              .
            </p>
          </Section>
        </section>
      </main>
      <Footer />
    </>
  );
}
