import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="font-display" aria-label="Repcontent">
      <span className="text-xl md:text-2xl tracking-wider leading-none text-foreground">
        Repcontent
      </span>
    </Link>
  );
}
