import { createFileRoute, Link } from "@tanstack/react-router";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    ...pageSeo("/coming-soon", "Grab your copy right now! — Bloodstone", "Bloodstone is available now. Indian mythology meets mathematics and physics."),
    meta: [
      ...pageSeo("/coming-soon", "Grab your copy right now! — Bloodstone", "Bloodstone is available now. Indian mythology meets mathematics and physics.").meta,
      { title: "Grab your copy right now! — Bloodstone" },
      {
        name: "description",
        content:
          "Indian mythology meets the raw might of mathematics and physics. Bloodstone launched end August 2026.",
      },
      { property: "og:title", content: "Grab your copy right now! — Bloodstone" },
      {
        property: "og:description",
        content:
          "The Monster group, Riemann zeta zeros, and a 6.2 Hz geomagnetic pulse beneath Kamakhya — woven into Assamese Tantra. Bloodstone launched end August 2026.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center text-foreground">
      <PageFallback title="Grab your copy right now! — Bloodstone">
        <p>Bloodstone launched at the end of August 2026. Indian mythology meets mathematics and physics in a novel woven into Assamese Tantra and 7th-century Kamarupa.</p>
      </PageFallback>
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-artwork-wash" aria-hidden="true" />

      <div className="relative z-10 flex max-w-xl flex-col items-center">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          Bloodstone
        </p>
        <h1 className="mt-6 font-heading text-5xl text-cream lg:text-7xl">
          Grab your copy right now!
        </h1>
        <p className="mt-6 text-muted-foreground">
          Indian mythology meets the raw might of mathematics and physics — the Monster group,
          Riemann zeta zeros, and a 6.2&nbsp;Hz geomagnetic pulse beneath Kamakhya, woven into
          Assamese Tantra and 7th-century Kamarupa. Bloodstone launched end August 2026.
        </p>

        <Link
          to="/"
          className="mt-10 rounded-md border border-gold/40 px-6 py-3 font-body text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
