import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Navbar({ variant = "home" }: { variant?: "home" | "back" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-background border-b-2 border-accent shadow-comic-sm"
          : "bg-background/85 border-b border-border"
      }`}
    >
      <Logo />
      {variant === "home" ? (
        <Link
          to="/book"
          className="inline-flex items-center gap-2 bg-foreground text-background font-extrabold uppercase tracking-wider text-xs md:text-sm px-5 py-2.5 clip-action transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-gold hover:shadow-[4px_4px_0_var(--accent)]"
        >
          Commencer →
        </Link>
      ) : (
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground border-2 border-border-strong font-bold uppercase tracking-wider text-xs md:text-sm px-5 py-2 clip-action transition-colors hover:text-foreground hover:border-foreground"
        >
          ← Retour
        </Link>
      )}
    </header>
  );
}
