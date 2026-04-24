import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Repcontent" },
      {
        name: "description",
        content:
          "Une question, un projet, un partenariat ? Écrivez-nous à contact@repcontent.co — on répond sous 24h ouvrées.",
      },
      { property: "og:title", content: "Contact — Repcontent" },
      {
        property: "og:description",
        content: "Écrivez-nous à contact@repcontent.co. Réponse sous 24h ouvrées.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <Navbar variant="back" />
      <main className="relative z-[2] min-h-screen">
        <section className="px-6 md:px-10 pt-32 pb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent text-white text-xs font-extrabold tracking-[0.13em] uppercase px-4 py-1.5 clip-action mb-6">
            <i className="fa-solid fa-envelope" /> Contact
          </span>
          <h1 className="font-display font-normal text-5xl md:text-7xl tracking-wider leading-[0.95] uppercase text-shadow-accent mb-6">
            Parlons de <em className="not-italic text-gold">votre projet.</em>
          </h1>
          <p className="text-base md:text-lg text-ink-2 max-w-xl leading-relaxed font-medium mb-10">
            Une question, un brief, un partenariat ? Écrivez-nous directement. On lit tout, on
            répond sous 24h ouvrées.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <a
              href="mailto:contact@repcontent.co"
              className="group bg-surface border-2 border-border-strong shadow-comic-md p-6 clip-action-lg transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:shadow-[10px_10px_0_var(--accent)]"
            >
              <div className="w-12 h-12 bg-accent text-white flex items-center justify-center text-xl mb-4 clip-octagon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-gold mb-1">
                Email
              </div>
              <div className="font-display text-xl tracking-wider uppercase text-foreground group-hover:text-accent transition-colors">
                contact@repcontent.co
              </div>
              <p className="text-sm text-muted-foreground font-medium mt-2">
                Réponse sous 24h ouvrées.
              </p>
            </a>

            <a
              href="/book"
              className="group bg-surface border-2 border-border-strong shadow-comic-md p-6 clip-action-lg transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-accent hover:shadow-[10px_10px_0_var(--accent)]"
            >
              <div className="w-12 h-12 bg-accent text-white flex items-center justify-center text-xl mb-4 clip-octagon">
                <i className="fa-solid fa-calendar-check" />
              </div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-gold mb-1">
                Audit gratuit
              </div>
              <div className="font-display text-xl tracking-wider uppercase text-foreground group-hover:text-accent transition-colors">
                Réserver un appel →
              </div>
              <p className="text-sm text-muted-foreground font-medium mt-2">
                30 min, sans engagement.
              </p>
            </a>
          </div>

          <div className="mt-10 bg-surface border-l-4 border-gold px-5 py-4">
            <div className="text-xs font-extrabold uppercase tracking-widest text-gold mb-1">
              Pour la presse & partenariats
            </div>
            <p className="text-sm text-foreground font-medium">
              Utilisez la même adresse{" "}
              <a href="mailto:contact@repcontent.co" className="text-accent font-bold hover:underline">
                contact@repcontent.co
              </a>{" "}
              en précisant le sujet en objet.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
