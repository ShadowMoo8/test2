import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative z-10 bg-background px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-6 border-t border-border">
      <Logo />
      <span className="text-sm text-muted-foreground font-medium">
        © 2026 Repcontent. Tous droits réservés.
      </span>
      <nav className="flex gap-8">
        <Link
          to="/confidentialite"
          className="text-sm text-muted-foreground font-bold uppercase tracking-wide transition-colors hover:text-accent"
        >
          Confidentialité
        </Link>
        <Link
          to="/conditions"
          className="text-sm text-muted-foreground font-bold uppercase tracking-wide transition-colors hover:text-accent"
        >
          Conditions
        </Link>
        <Link
          to="/contact"
          className="text-sm text-muted-foreground font-bold uppercase tracking-wide transition-colors hover:text-accent"
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
}
