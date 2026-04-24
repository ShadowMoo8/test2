import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/confidentialite")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Repcontent" },
      {
        name: "description",
        content:
          "Comment Repcontent collecte, utilise et protège vos données personnelles. Conforme RGPD.",
      },
      { property: "og:title", content: "Politique de confidentialité — Repcontent" },
      {
        property: "og:description",
        content: "Comment nous traitons vos données. Conforme RGPD.",
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

function PrivacyPage() {
  return (
    <>
      <Navbar variant="back" />
      <main className="relative z-[2] min-h-screen">
        <section className="px-6 md:px-10 pt-32 pb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent text-white text-xs font-extrabold tracking-[0.13em] uppercase px-4 py-1.5 clip-action mb-6">
            <i className="fa-solid fa-shield-halved" /> Légal
          </span>
          <h1 className="font-display font-normal text-4xl md:text-6xl tracking-wider leading-[0.95] uppercase text-shadow-accent mb-4">
            Politique de <em className="not-italic text-gold">confidentialité.</em>
          </h1>
          <p className="text-sm text-muted-foreground font-medium mb-12">
            Dernière mise à jour : 24 avril 2026
          </p>

          <Section title="1. Qui sommes-nous">
            <p>
              Repcontent est un studio de production de contenu court-format. Pour toute question
              relative à vos données, contactez-nous à{" "}
              <a href="mailto:contact@repcontent.co" className="text-accent font-bold hover:underline">
                contact@repcontent.co
              </a>
              .
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Compte Instagram (optionnel)</li>
              <li>Toute information partagée pendant un appel découverte</li>
            </ul>
          </Section>

          <Section title="3. Finalités">
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vous recontacter suite à une demande d'audit</li>
              <li>Préparer et exécuter notre prestation</li>
              <li>Vous envoyer des informations strictement liées à votre projet</li>
            </ul>
            <p>Nous ne vendons, ne louons et ne partageons jamais vos données à des tiers.</p>
          </Section>

          <Section title="4. Durée de conservation">
            <p>
              Vos données sont conservées pendant la durée de la relation commerciale, puis
              archivées pendant 3 ans à des fins de prospection, ou supprimées à votre demande.
            </p>
          </Section>

          <Section title="5. Vos droits (RGPD)">
            <p>Conformément au RGPD, vous disposez d'un droit :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>D'accès, de rectification et de suppression</li>
              <li>D'opposition et de limitation du traitement</li>
              <li>À la portabilité de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, écrivez-nous à{" "}
              <a href="mailto:contact@repcontent.co" className="text-accent font-bold hover:underline">
                contact@repcontent.co
              </a>
              . Nous répondons sous 30 jours maximum.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Notre site utilise uniquement des cookies techniques strictement nécessaires à son
              fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans
              votre consentement explicite.
            </p>
          </Section>

          <Section title="7. Sécurité">
            <p>
              Nous appliquons des mesures techniques et organisationnelles pour protéger vos
              données contre tout accès non autorisé, perte ou divulgation.
            </p>
          </Section>
        </section>
      </main>
      <Footer />
    </>
  );
}
