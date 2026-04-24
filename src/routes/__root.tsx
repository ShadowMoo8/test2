import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RepContent — Le Content Bulk de 12 Semaines" },
      {
        name: "description",
        content:
          "Du contenu vidéo court-format clé en main pour entrepreneurs. 3 à 5 reels par semaine, 12 semaines d'affilée.",
      },
      { property: "og:title", content: "RepContent — Le Content Bulk de 12 Semaines" },
      {
        property: "og:description",
        content: "Contenu court, impact massif. 50+ vidéos en 12 semaines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RepContent — Le Content Bulk de 12 Semaines" },
      { name: "description", content: "Landing Page Polish refines your website's design and optimizes it for lead generation." },
      { property: "og:description", content: "Landing Page Polish refines your website's design and optimizes it for lead generation." },
      { name: "twitter:description", content: "Landing Page Polish refines your website's design and optimizes it for lead generation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/413eaa20-5dda-404c-9a9c-9a8fb89e91b1/id-preview-9ff20640--8e6b1fe3-456c-48af-80f9-1acc7d91daac.lovable.app-1776913499830.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/413eaa20-5dda-404c-9a9c-9a8fb89e91b1/id-preview-9ff20640--8e6b1fe3-456c-48af-80f9-1acc7d91daac.lovable.app-1776913499830.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
