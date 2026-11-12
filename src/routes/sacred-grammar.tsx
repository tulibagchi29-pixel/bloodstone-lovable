import { createFileRoute, Link } from "@tanstack/react-router";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

export const Route = createFileRoute("/sacred-grammar")({
  head: () => ({
    ...pageSeo("/sacred-grammar", "The Sacred Grammar — Bloodstone", "Bloodstone in conversation with Carl Sagan’s Contact and Liu Cixin’s The Three-Body Problem."),
    meta: [
      ...pageSeo("/sacred-grammar", "The Sacred Grammar — Bloodstone", "Bloodstone in conversation with Carl Sagan’s Contact and Liu Cixin’s The Three-Body Problem.").meta,
      { title: "The Sacred Grammar — Bloodstone" },
      {
        name: "description",
        content:
          "Bloodstone in conversation with Carl Sagan's Contact and Liu Cixin's The Three-Body Problem: how mathematics becomes the actual grammar of the sacred.",
      },
      {
        property: "og:title",
        content: "The Sacred Grammar — Bloodstone",
      },
      {
        property: "og:description",
        content:
          "Bloodstone in conversation with Carl Sagan's Contact and Liu Cixin's The Three-Body Problem.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SacredGrammarPage,
});

function SacredGrammarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageFallback title="The Sacred Grammar — Bloodstone">
        <p>An essay placing Bloodstone in conversation with Carl Sagan’s Contact and Liu Cixin’s The Three-Body Problem: mathematics as signal, rigorous science as narrative engine, and cultural history as the foundation of speculative fiction.</p>
      </PageFallback>
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-artwork-wash" aria-hidden="true" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link to="/" className="font-heading text-lg tracking-tight text-gold transition-colors hover:text-gold-light">
          Bloodstone
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <a
            href="/#preorder"
            className="rounded-md bg-gold px-4 py-2 text-ink transition-colors hover:bg-gold-light"
          >
            Pre-order
          </a>
        </div>
      </nav>

      <article className="relative z-10 px-6 pb-24 pt-12 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <header className="mb-16 text-center">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Essay
            </p>
            <h1 className="font-heading text-4xl leading-[1.1] text-cream lg:text-6xl">
              The Sacred Grammar
            </h1>
            <p className="mt-4 font-heading text-xl italic text-gold-light lg:text-2xl">
              Bloodstone in Conversation with Sagan and Liu Cixin
            </p>
          </header>

          <p className="mb-16 text-center font-heading text-2xl leading-relaxed text-cream lg:text-3xl">
            Two of speculative fiction’s most enduring achievements share a premise most novels never
            dare: that mathematics isn’t a metaphor for the sacred — it’s the sacred’s actual
            grammar.
          </p>

          <section className="mb-16">
            <p className="mb-6 font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Contact: The Number as Signal
            </p>
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90 lg:text-xl">
              <p>
                Carl Sagan’s <em>Contact</em> begins with prime numbers arriving from deep space — a
                code chosen precisely because it needs no shared language, no shared biology, nothing
                but the fact of intelligence itself. Ellie Arroway, the novel’s rationalist
                astronomer, spends the book chasing verifiable proof, and ends it changed by an
                experience she cannot verify at all. The tension Sagan built his career on — between
                what science can confirm and what a person comes to know is true — is the engine of
                the whole book.
              </p>
              <p>
                <em>Bloodstone</em> runs the same engine on different fuel. The Monster group’s 194
                irreducible representations and its 196,883-dimensional representation aren’t invented
                — they’re real, peer-reviewed mathematics, decades of actual work by actual
                mathematicians. The novel treats that structure as a literal census of civilizations,
                the same way Sagan treated primes as a literal, unambiguous signal. In both books the
                proof is real even when what it points to isn’t provable in the ordinary sense —
                which is exactly where the Kamakhya temple’s geomagnetic field and its 6.2 Hz carrier
                wave enter <em>Bloodstone</em>: hard, measurable phenomena doing the work a lesser
                book would hand-wave.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <p className="mb-6 font-body text-sm font-semibold uppercase tracking-widest text-gold">
              The Three-Body Problem: Rigor as the Price of Entry
            </p>
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90 lg:text-xl">
              <p>
                Liu Cixin’s <em>The Three-Body Problem</em> took an unsolved problem in classical
                mechanics — the genuine chaos of three gravitating bodies — and used it as both plot
                engine and civilizational metaphor, then paired it with a specifically Chinese
                historical wound, the Cultural Revolution, that most Western SF had never gone near.
                It won the Hugo in English translation partly because the science was
                uncompromising, and partly because the cultural material underneath it was too. It
                proved a non-Western scientific and historical imagination could carry full weight for
                a global readership, as long as the rigor never slipped.
              </p>
            </div>
          </section>

          <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-border pt-12 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-gold/30 px-6 py-3 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5"
            >
              Back to Bloodstone
            </Link>
            <a
              href="/#preorder"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Pre-order now
            </a>
          </div>
        </div>
      </article>

      <footer className="relative z-10 border-t border-border px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg text-gold">Bloodstone</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A novel by Shamit Bagchi · Art by Charbak Dipta
            </p>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Shamit Bagchi</p>
        </div>
      </footer>
    </main>
  );
}
