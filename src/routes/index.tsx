import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { StickyCTA } from "@/components/StickyCTA";
import { Marquee } from "@/components/Marquee";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Home,
});

function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-display text-sm md:text-base tracking-[0.2em] uppercase text-accent mb-5 px-3 py-1 bg-accent/10 border-l-4 border-accent clip-action ${center ? "self-center" : ""}`}
    >
      {children}
    </div>
  );
}

function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-normal text-5xl md:text-6xl lg:text-7xl tracking-wider leading-[0.95] uppercase mb-4 text-shadow-hard ${className}`}
    >
      {children}
    </h2>
  );
}

function PrimaryCTA({ children, href = "/book" }: { children: React.ReactNode; href?: string }) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 bg-accent text-white font-extrabold uppercase tracking-wider text-sm md:text-base px-8 py-4 clip-action transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[oklch(0.66_0.22_25)]"
        style={{ filter: "drop-shadow(4px 4px 0 var(--gold))" }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to="/book"
      className="inline-flex items-center gap-2 bg-accent text-white font-extrabold uppercase tracking-wider text-sm md:text-base px-8 py-4 clip-action transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[oklch(0.66_0.22_25)]"
      style={{ filter: "drop-shadow(4px 4px 0 var(--gold))" }}
    >
      {children}
    </Link>
  );
}

function Home() {
  useReveal();

  return (
    <>
      {/* HONEST TOP BAR — founder offer, no fake scarcity */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-accent text-white text-center py-1.5 text-[0.72rem] md:text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 px-4">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white pulse-dot" />
        <span className="truncate">
          Offre de lancement · Premiers clients à tarif fondateur
        </span>
      </div>

      <Navbar />
      <Toaster />
      <StickyCTA />

      <main className="relative z-[2] pt-7">
        {/* HERO */}
        <section
          id="hero"
          className="min-h-svh flex flex-col justify-center px-6 md:px-10 pt-28 pb-16"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
              <div className="flex flex-col gap-5 items-start">
                <span className="fade-up inline-flex items-center gap-2 bg-accent text-white text-xs font-extrabold tracking-[0.13em] uppercase px-4 py-1.5 clip-action">
                  <i className="fa-solid fa-bolt" /> Programme 12 semaines
                </span>
                <h1
                  className="fade-up font-display font-normal text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[0.92] tracking-wider uppercase text-shadow-accent"
                  style={{ animationDelay: "0.15s" }}
                >
                  Format court.
                  <br />
                  <em className="not-italic text-gold" style={{ textShadow: "4px 4px 0 rgb(255 255 255 / 0.1)" }}>
                    Impact massif.
                  </em>
                </h1>
                <p
                  className="fade-up text-base md:text-lg text-ink-2 max-w-xl leading-relaxed font-medium"
                  style={{ animationDelay: "0.3s" }}
                >
                  On produit <strong className="text-foreground">50+ vidéos courtes</strong> pour
                  vous en 12 semaines. Idéation, scripts, montage, publication. Vous tournez{" "}
                  <strong className="text-foreground">1 à 2 jours</strong> pour 4 semaines de contenu. C'est tout.
                </p>

                <ul
                  className="fade-up flex flex-col gap-2 text-sm md:text-base text-ink-2 font-medium"
                  style={{ animationDelay: "0.4s" }}
                >
                  {[
                    "Scripts écrits pour votre audience cible",
                    "Montage premium avec sous-titres dynamiques",
                    "Publication 3-5×/semaine sur TikTok, Reels & Shorts",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 bg-accent text-white text-[0.65rem] flex items-center justify-center clip-octagon shrink-0">
                        <i className="fa-solid fa-check" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div
                  className="fade-up flex items-center gap-4 flex-wrap max-md:w-full"
                  style={{ animationDelay: "0.5s" }}
                >
                  <PrimaryCTA>Réserver mon audit gratuit</PrimaryCTA>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors"
                  >
                    Voir comment ça marche →
                  </a>
                </div>

                {/* HONEST FOUNDER NOTE — replaces fake social proof */}
                <div
                  className="fade-up flex items-center gap-3 mt-2 bg-surface border-l-4 border-gold px-4 py-3 max-w-md"
                  style={{ animationDelay: "0.6s" }}
                >
                  <i className="fa-solid fa-flag text-gold text-lg shrink-0" />
                  <div className="text-xs md:text-sm text-ink-2 font-medium leading-snug">
                    <strong className="text-foreground">Studio en lancement.</strong> On prend un
                    nombre limité de clients fondateurs pour garantir une qualité d'exécution
                    irréprochable.
                  </div>
                </div>
              </div>

              {/* RIGHT: LEAD FORM */}
              <div
                className="fade-up w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end"
                style={{ animationDelay: "0.4s" }}
              >
                <LeadForm compact />
              </div>
            </div>

            {/* HERO STATS — honest deliverable-based numbers only */}
            <div
              className="fade-up grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-4xl"
              style={{ animationDelay: "0.7s" }}
            >
              {[
                ["50+", "Vidéos livrées"],
                ["12 sem.", "Du brief au scale"],
                ["1-2 jours", "De tournage / 4 semaines"],
                ["100%", "Délégué à nous"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="text-center px-4 py-4 bg-surface border-2 border-border-strong shadow-comic-sm clip-action"
                >
                  <div
                    className="font-display text-2xl md:text-3xl text-accent leading-none"
                    style={{ textShadow: "2px 2px 0 black" }}
                  >
                    {n}
                  </div>
                  <div className="text-[0.65rem] md:text-[0.7rem] text-ink-2 font-bold uppercase tracking-wide mt-1.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE — niches we work with */}
        <Marquee
          items={[
            "Coachs business",
            "Consultants",
            "Agences",
            "E-commerce",
            "SaaS founders",
            "Avocats & experts",
            "Formateurs",
            "Créateurs",
          ]}
        />

        {/* PROBLEM — Netflix analogy */}
        <section className="px-6 md:px-10 py-24 bg-surface">
          <div className="max-w-6xl mx-auto">
            <div className="text-center flex flex-col items-center mb-14">
              <SectionLabel center>La méthode Netflix</SectionLabel>
              <Heading className="reveal reveal-d1 text-center max-w-4xl">
                Faites du contenu comme Netflix fait des{" "}
                <em className="not-italic text-accent">séries.</em>
              </Heading>
              <p className="reveal reveal-d2 text-base md:text-lg text-ink-2 max-w-2xl leading-relaxed font-medium">
                Netflix ne publie pas "des vidéos". Ils construisent des franchises. Voilà
                pourquoi on les regarde en boucle — et pourquoi votre marque devrait fonctionner
                exactement pareil.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "fa-clapperboard",
                  title: "Des shows, pas des posts",
                  desc: "Tout est une série. Un format prévisible crée une habitude. Un seul bon format vaut mieux que 100 posts au hasard. Votre audience sait quoi attendre — et revient pour ça.",
                },
                {
                  icon: "fa-link",
                  title: "Construit pour le binge",
                  desc: "Chaque vidéo amène à la suivante. Cliffhangers, boucles ouvertes, thèmes récurrents. L'audience ne décroche pas — elle enchaîne épisode après épisode.",
                },
                {
                  icon: "fa-chart-simple",
                  title: "Validé par la data",
                  desc: "On ne devine pas. On regarde la rétention, le taux de complétion, les drop-offs. On tue vite les idées faibles. On double la mise sur ce que les gens regardent jusqu'au bout.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${i + 1} group bg-background p-8 border-2 border-border-strong shadow-comic-md transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--accent)] hover:border-accent clip-action-lg`}
                >
                  <div className="w-14 h-14 bg-surface-2 border-2 border-border-strong flex items-center justify-center text-2xl text-accent mb-6 transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:scale-110 group-hover:-rotate-6 clip-action">
                    <i className={`fa-solid ${c.icon}`} />
                  </div>
                  <h3 className="font-display text-xl tracking-wider uppercase text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SWITCH */}
        <section className="px-6 md:px-10 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <SectionLabel>L'erreur classique</SectionLabel>
              <Heading className="reveal reveal-d1 max-w-3xl">
                Publier "quand on a le temps" ne marche{" "}
                <em className="not-italic text-accent">jamais.</em>
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="reveal reveal-d1 bg-surface p-10 border-2 border-border-strong shadow-comic-md clip-action-lg">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 mb-8 clip-action bg-surface-2 text-foreground border-2 border-border-strong">
                  Faire seul
                </span>
                <ul className="flex flex-col gap-6">
                  {[
                    ["Irrégularité totale", "Vous postez quand vous avez le temps. L'algorithme vous oublie."],
                    ["L'air occupé, zéro impact", "4h pour un Reel. Aucune autorité construite."],
                    ["Burn-out en 3 semaines", "La page blanche tue la motivation. Vous abandonnez."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-surface-2 border-2 border-border-strong text-muted-foreground flex items-center justify-center text-sm font-extrabold shrink-0 mt-0.5 clip-octagon">
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <div>
                        <span className="block font-extrabold uppercase text-ink-2/80 mb-1">{t}</span>
                        <p className="text-base text-muted-foreground/90 leading-relaxed font-medium">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal reveal-d2 relative p-10 border-2 border-accent shadow-comic-md clip-action-lg bg-gradient-to-br from-[#1A0000] to-black">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 mb-8 clip-action bg-accent text-white border-2 border-accent">
                  Avec RepContent
                </span>
                <ul className="flex flex-col gap-6">
                  {[
                    ["Volume massif et régulier", "12 semaines de publication militaire. Vous devenez inévitable."],
                    ["Qualité premium standardisée", "Montage pro, sous-titres dynamiques, hooks travaillés."],
                    ["Votre seul job : parler", "Vous lisez les scripts. On gère 100% du reste."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-accent text-white flex items-center justify-center text-sm font-extrabold shrink-0 mt-0.5 clip-octagon shadow-[0_0_16px_rgba(226,54,54,0.4)]">
                        <i className="fa-solid fa-check" />
                      </span>
                      <div>
                        <span className="block font-extrabold uppercase text-white mb-1">{t}</span>
                        <p className="text-base text-white/80 leading-relaxed font-medium">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="px-6 md:px-10 py-24 bg-surface border-y-2 border-border-strong"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center flex flex-col items-center mb-12">
              <SectionLabel center>Notre processus</SectionLabel>
              <Heading className="reveal reveal-d1 text-center">
                4 étapes. <em className="not-italic text-accent">Zéro friction.</em>
              </Heading>
            </div>
            <div className="reveal reveal-d2 bg-gradient-to-br from-[#111] to-background border-2 border-border-strong p-10 md:p-14 shadow-comic-md clip-action-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full relative">
                <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-1 bg-white/10 z-0">
                  <div
                    className="absolute top-0 left-0 h-full bg-accent"
                    style={{ animation: "pipe-fill 2s ease-out forwards 1s", width: 0 }}
                  />
                </div>
                {[
                  { icon: "fa-crosshairs", t: "Stratégie & scripts", d: "On cible les hooks qui parlent à votre audience." },
                  { icon: "fa-camera", t: "Tournage groupé", d: "1 à 2 jours de tournage. 4 semaines de contenu en boîte." },
                  { icon: "fa-bolt", t: "Montage premium", d: "Coupures nettes, sous-titres, b-roll percutant." },
                  { icon: "fa-rocket", t: "Publication & suivi", d: "3-5 vidéos/semaine. Reporting hebdo." },
                ].map((s, i) => (
                  <div key={i} className="group flex flex-col items-center text-center relative z-10">
                    <div className="w-[72px] h-[72px] bg-background border-[3px] border-border-strong flex items-center justify-center text-2xl text-foreground mb-5 clip-octagon transition-all group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 group-hover:-translate-y-1.5">
                      <i className={`fa-solid ${s.icon}`} />
                    </div>
                    <div className="font-display text-lg tracking-wider uppercase text-white mb-2">
                      {i + 1}. {s.t}
                    </div>
                    <div className="text-sm text-white/70 leading-snug max-w-[200px] font-medium">
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OFFER / WHAT'S INCLUDED — kept, deliverables are factual commitments */}
        <section className="px-6 md:px-10 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center flex flex-col items-center mb-12">
              <SectionLabel center>L'offre complète</SectionLabel>
              <Heading className="reveal reveal-d1 text-center">
                Tout est inclus. <em className="not-italic text-accent">Vraiment tout.</em>
              </Heading>
            </div>
            <div className="reveal reveal-d2 max-w-4xl mx-auto bg-surface border-2 border-accent shadow-comic-md p-8 md:p-12 clip-action-lg">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 mb-10">
                {[
                  "Audit stratégique de votre marché",
                  "50+ scripts écrits sur-mesure",
                  "Direction artistique de chaque vidéo",
                  "Montage premium avec sous-titres animés",
                  "B-roll & motion design inclus",
                  "Calendrier éditorial 12 semaines",
                  "Publication multi-plateforme",
                  "Reporting hebdomadaire des performances",
                  "Optimisation continue basée data",
                  "Slack privé · Réponse < 4h",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent text-white flex items-center justify-center text-[0.7rem] font-extrabold shrink-0 mt-0.5 clip-octagon">
                      <i className="fa-solid fa-check" />
                    </span>
                    <span className="text-base text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-border-strong pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-extrabold tracking-widest uppercase text-gold mb-1">
                    Engagement client fondateur
                  </div>
                  <div className="font-display text-xl md:text-2xl tracking-wider uppercase text-foreground">
                    Vous n'êtes pas satisfait des livrables ?<br />
                    On <span className="text-accent">retravaille gratuitement</span> jusqu'à ce que oui.
                  </div>
                </div>
                <PrimaryCTA>Discuter de mon projet →</PrimaryCTA>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 md:px-10 py-24 bg-surface border-t-2 border-border-strong">
          <div className="max-w-6xl mx-auto">
            <div className="text-center flex flex-col items-center mb-12">
              <SectionLabel center>Vos questions</SectionLabel>
              <Heading className="reveal reveal-d1 text-center">
                Avant de <em className="not-italic text-accent">réserver.</em>
              </Heading>
            </div>
            <Faq />
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-5 font-medium">
                Une autre question ? Posez-la directement pendant l'audit.
              </p>
              <PrimaryCTA>Réserver mon audit gratuit</PrimaryCTA>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="relative bg-accent px-6 md:px-10 py-28 md:py-36 text-center overflow-hidden -mt-[4vw] z-10"
          style={{ clipPath: "polygon(0 6vw, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
          <div className="absolute -top-40 -left-20 w-[480px] h-[480px] rounded-full bg-black/30 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-16 w-[360px] h-[360px] rounded-full bg-gold/15 blur-[90px] pointer-events-none" />

          <span className="reveal font-display text-lg md:text-xl tracking-[0.25em] uppercase text-black/60 mb-5 block relative z-10">
            Tarif fondateur · Places limitées
          </span>
          <h2 className="reveal reveal-d1 font-display font-normal text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white max-w-4xl mx-auto mb-8 relative z-10 text-shadow-hard-lg">
            Votre audience vous attend.
            <br />
            <em className="not-italic text-gold text-shadow-hard-lg">On commence quand ?</em>
          </h2>
          <p className="reveal reveal-d2 text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-10 font-semibold relative z-10">
            30 minutes au téléphone. On audite votre situation, on construit un plan d'attaque
            personnalisé. Sans engagement.
          </p>
          <div className="reveal reveal-d2 flex justify-center gap-4 flex-wrap relative z-10">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-white text-black font-extrabold uppercase tracking-wider text-base md:text-lg px-10 py-5 clip-action transition-all hover:bg-gold hover:-translate-x-1 hover:-translate-y-1"
              style={{ filter: "drop-shadow(6px 6px 0 rgba(0,0,0,0.85))" }}
            >
              Réserver mon créneau →
            </Link>
          </div>
          <p className="reveal reveal-d3 text-sm text-white/85 mt-8 font-semibold relative z-10">
            <i className="fa-solid fa-shield-halved mr-1" /> Sans engagement · Sans CB demandée
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
