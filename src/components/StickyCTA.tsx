import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur-md border-t-2 border-accent transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        to="/book"
        className="block w-full text-center bg-accent text-white font-extrabold uppercase tracking-wider text-sm py-4 clip-action"
        style={{ filter: "drop-shadow(3px 3px 0 var(--gold))" }}
      >
        Réserver mon audit gratuit →
      </Link>
    </div>
  );
}
