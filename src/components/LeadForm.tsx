import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

const WEB3FORMS_KEY = "f09dde2f-3b67-4af2-b629-41f30eea4887";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Nom et email requis");
      return;
    }
    setSubmitting(true);

    try {
      sessionStorage.setItem(
        "rc_lead",
        JSON.stringify({ name, email, instagram, ts: Date.now() })
      );
    } catch {
      /* ignore */
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau lead RepContent — ${name}`,
          from_name: "RepContent Landing",
          name,
          email,
          instagram: instagram || "(non renseigné)",
          message: `Nouveau lead via le formulaire d'audit gratuit.\n\nNom: ${name}\nEmail: ${email}\nInstagram: ${instagram || "(non renseigné)"}\n\nIl/elle va être redirigé(e) vers la page de réservation Cal.com.`,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Échec de l'envoi");
      }

      toast.success("Parfait ! Choisissez votre créneau →");
      window.location.href = "/book";
    } catch (err) {
      console.error("LeadForm submit error:", err);
      toast.error("Une erreur est survenue. Réessayez ou allez directement à la réservation.");
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-surface border-2 border-border-strong shadow-comic-md p-6 md:p-8 clip-action-lg ${
        compact ? "" : "max-w-md"
      }`}
    >
      <div className="font-display text-2xl tracking-wider uppercase mb-1 text-foreground">
        Réservez votre <span className="text-accent">audit gratuit</span>
      </div>
      <p className="text-sm text-muted-foreground mb-5 font-medium">
        30 min · Sans engagement · Plan d'attaque personnalisé
      </p>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Votre prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-background border-2 border-border-strong px-4 py-3 text-foreground placeholder:text-muted-foreground/70 font-medium focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email professionnel"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background border-2 border-border-strong px-4 py-3 text-foreground placeholder:text-muted-foreground/70 font-medium focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="text"
          name="instagram"
          placeholder="@instagram (optionnel)"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className="bg-background border-2 border-border-strong px-4 py-3 text-foreground placeholder:text-muted-foreground/70 font-medium focus:outline-none focus:border-accent transition-colors"
        />
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-white font-extrabold uppercase tracking-wider text-sm px-6 py-4 clip-action transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-60"
          style={{ filter: "drop-shadow(4px 4px 0 var(--gold))" }}
        >
          {submitting ? "Envoi..." : "Réserver mon créneau →"}
        </button>
        <div className="flex items-center justify-center gap-4 text-[0.7rem] text-muted-foreground font-bold uppercase tracking-wider mt-1">
          <span><i className="fa-solid fa-lock text-gold mr-1" /> 100% Privé</span>
          <span><i className="fa-solid fa-bolt text-gold mr-1" /> Réponse &lt; 24h</span>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        Préfèrez voir le calendrier ?{" "}
        <Link to="/book" className="text-accent font-bold hover:underline">
          Voir directement les créneaux
        </Link>
      </p>
    </form>
  );
}
