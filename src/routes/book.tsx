import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Réserver un appel — RepContent" },
      {
        name: "description",
        content:
          "Réservez votre appel découverte avec RepContent. 30 minutes pour analyser votre situation et lancer votre opération contenu court-format.",
      },
      { property: "og:title", content: "Réserver un appel — RepContent" },
      {
        property: "og:description",
        content: "30 minutes, sans engagement, pour lancer votre Content Bulk.",
      },
    ],
  }),
});

function BookPage() {
  useEffect(() => {
    const id = "cal-embed-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.type = "text/javascript";
    s.text = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "short-form-content-for-entrepreneurs", {origin:"https://app.cal.com"});
      Cal.ns["short-form-content-for-entrepreneurs"]("inline", {
        elementOrSelector:"#cal-embed-target",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "riadh-attafi-upquoe/short-form-content-for-entrepreneurs",
      });
      Cal.ns["short-form-content-for-entrepreneurs"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <Navbar variant="back" />
      <div className="relative z-[2] min-h-screen flex flex-col">
        {/* HEADER */}
        <div className="px-6 md:px-10 pt-32 pb-14 text-center flex flex-col items-center gap-5 relative overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-1.5 bg-accent" />
          <span className="fade-up inline-flex items-center gap-2 bg-accent text-white text-xs font-extrabold tracking-[0.13em] uppercase px-5 py-1.5 clip-action">
            <i className="fa-solid fa-calendar-check" /> Appel Découverte Gratuit
          </span>
          <h1
            className="fade-up font-display font-normal text-5xl md:text-7xl tracking-wider leading-[0.95] uppercase text-shadow-accent"
            style={{ animationDelay: "0.12s" }}
          >
            Choisissez
            <br />
            votre <em className="not-italic text-gold" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>créneau.</em>
          </h1>
          <p
            className="fade-up text-base md:text-lg text-ink-2 max-w-xl leading-relaxed font-medium"
            style={{ animationDelay: "0.24s" }}
          >
            30 minutes pour analyser votre situation et voir si le Content Bulk est fait pour vous.
            Sans engagement, sans pression.
          </p>
          <div
            className="fade-up flex items-center gap-4 flex-wrap justify-center"
            style={{ animationDelay: "0.36s" }}
          >
            {[
              ["fa-clock", "30 minutes"],
              ["fa-shield-halved", "Sans engagement"],
              ["fa-video", "Visio ou téléphone"],
            ].map(([i, t]) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 bg-surface border-2 border-border-strong text-sm font-bold text-ink-2 tracking-wide px-4 py-1.5 clip-action"
              >
                <i className={`fa-solid ${i} text-gold`} /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* CAL EMBED */}
        <div className="flex-1 px-4 md:px-10 pb-16 fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="max-w-5xl mx-auto bg-surface border-2 border-border-strong shadow-comic-md overflow-hidden clip-action-lg min-h-[700px]">
            <div id="cal-embed-target" style={{ width: "100%", height: "100%", minHeight: 700, overflow: "scroll" }} />
          </div>
        </div>

        <p className="text-center py-8 text-sm text-muted-foreground font-medium border-t border-border relative z-[2]">
          Une question avant de réserver ?{" "}
          <a href="/#faq" className="text-accent hover:underline">
            Consultez la FAQ
          </a>
          {" · "}© 2026 RepContent
        </p>
      </div>
    </>
  );
}
