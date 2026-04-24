export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-background border-y-2 border-border-strong py-5">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
      >
        {loop.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 font-display text-xl tracking-wider uppercase text-muted-foreground"
          >
            <span className="text-accent">★</span>
            {s}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
