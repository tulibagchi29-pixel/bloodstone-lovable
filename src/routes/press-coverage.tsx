import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

export const Route = createFileRoute("/press-coverage")({
  head: () => {
    const seo = pageSeo(
      "/press-coverage",
      "Bloodstone in the Press — Shamit Bagchi",
      "Press coverage of Bloodstone: A Novel — national outlets including The Tribune, The Wire and PTI covered the novel’s appearance at Frankfurt Book Fair 2026.",
    );
    return {
      ...seo,
      meta: [
        ...seo.meta,
        { title: "Bloodstone in the Press — Shamit Bagchi" },
        { name: "description", content: "Press coverage of Bloodstone: A Novel by Shamit Bagchi — The Tribune, The Wire and PTI covered the novel’s appearance at Frankfurt Book Fair 2026." },
        { property: "og:title", content: "Bloodstone in the Press" },
        { property: "og:description", content: "From ancient Indian wisdom to quantum mysteries: national media coverage of Bloodstone at Frankfurt Book Fair 2026." },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PressCoveragePage,
});

const outlets = [
  {
    name: "The Tribune",
    section: "Business",
    date: "17 October 2026",
    description:
      "One of India’s leading English-language dailies, founded in 1881, covered Bloodstone’s Frankfurt appearance in its Business section — introducing readers to a novel where ancient Indian wisdom meets quantum mysteries.",
    href: "https://www.tribuneindia.com/news/business/from-ancient-indian-wisdom-to-quantum-mysteries-hubhawks-presents-shamit-bagchis-bloodstone-at-frankfurt-2026/",
    linkLabel: "Read on The Tribune",
  },
  {
    name: "The Wire",
    section: "News",
    date: "17 October 2026",
    description:
      "The independent news publication carried the story of Bloodstone’s Frankfurt Book Fair appearance, live on 17 October 2026.",
    href: "https://thewire.in/ptiprnews/from-ancient-indian-wisdom-to-quantum-mysteries-hubhawks-presents-shamit-bagchis-bloodstone-at-frankfurt-2026",
    linkLabel: "Read on The Wire",
  },
  {
    name: "PTI",
    section: "News agency",
    date: "17 October 2026",
    description:
      "The Press Trust of India, the country’s largest news agency, reported on the novel’s appearance at the fair — a story that travelled from Frankfurt to readers across India.",
    href: "https://www.ptinews.com/press-release/from-ancient-indian-wisdom-to-quantum-mysteries-hubhawks-presents-shamit-bagchis-bloodstone-at-frankfurt-2026/4174252",
    linkLabel: "Read on PTI",
  },
];

function PressCoveragePage() {
  return (
    <div className="min-h-screen bg-ink">
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-12">
        <nav className="mb-12 flex items-center justify-between text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-muted-foreground transition-colors hover:text-gold"
          >
            ← Back to Bloodstone
          </Link>
          <a
            href="https://www.amazon.in/dp/B0HG1MG8V4"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-4 py-2 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Order now!
          </a>
        </nav>

        <article>
          <header className="border-b border-gold/20 pb-10">
            <p className="font-body text-sm font-medium uppercase tracking-widest text-gold">
              Press coverage
            </p>
            <h1 className="mt-3 font-heading text-3xl leading-tight text-cream lg:text-5xl">
              Bloodstone in the news
            </h1>
            <p className="mt-4 font-body text-sm uppercase tracking-wide text-muted-foreground">
              Frankfurt Book Fair 2026 · October 2026
            </p>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground lg:text-lg">
              When Bloodstone: A Novel appeared at the Frankfurt Book Fair 2026, national media
              took notice. Leading Indian outlets covered the novel’s arrival on one of the
              world’s biggest literary stages — a story where ancient Indian wisdom meets
              quantum mysteries, told through real mathematics and the history of Assam.
            </p>
          </header>

          <section aria-labelledby="theme-title" className="mt-12">
            <h2 id="theme-title" className="sr-only">
              The story that travelled
            </h2>
            <blockquote className="rounded-lg border border-gold/20 bg-gold/5 p-6 lg:p-8">
              <p className="font-heading text-lg leading-snug text-cream lg:text-xl">
                “From ancient Indian wisdom to quantum mysteries.”
              </p>
              <footer className="mt-4 font-body text-sm text-muted-foreground">
                The theme that ran through the coverage — a hard sci-fi novel from an Indian
                voice, presented to an international audience at Frankfurt.
              </footer>
            </blockquote>
            <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground lg:text-base">
              The coverage introduced Bloodstone as a story that blends mythology, history and
              rigorous science — with the author present in person at the fair to bring the
              book’s ideas into the wider publishing conversation.
            </p>
          </section>

          <section aria-labelledby="outlets-title" className="mt-14">
            <h2 id="outlets-title" className="font-heading text-2xl text-cream">
              As covered by
            </h2>
            <ul className="mt-8 space-y-6">
              {outlets.map((outlet) => (
                <li
                  key={outlet.name}
                  className="rounded-lg border border-gold/20 bg-background/40 p-6 transition-colors hover:border-gold/50 lg:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-xl text-gold">{outlet.name}</h3>
                    <span className="rounded-full border border-gold/30 px-3 py-0.5 font-body text-xs text-muted-foreground">
                      {outlet.section}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {outlet.date}
                    </span>
                  </div>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {outlet.description}
                  </p>
                  <a
                    href={outlet.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold transition-colors hover:text-gold-light"
                  >
                    {outlet.linkLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-gold/20 pt-10 text-center">
            <p className="font-heading text-xl text-cream">
              Read the story the press is talking about
            </p>
            <a
              href="https://www.amazon.in/dp/B0HG1MG8V4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Order Bloodstone now!
            </a>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Also available from{" "}
              <a
                href="https://direct.notionpress.com/in/read/bloodstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-light"
              >
                Notion Press
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <PageFallback title="Bloodstone in the Press — summary">
        <p>
          National media covered Bloodstone: A Novel by Shamit Bagchi at the Frankfurt Book
          Fair 2026. The Tribune (Business), The Wire and the Press Trust of India reported on
          the novel’s appearance at the fair on 17 October 2026, describing a story where
          ancient Indian wisdom meets quantum mysteries.
        </p>
        <ul>
          {outlets.map((outlet) => (
            <li key={outlet.name}>
              <a href={outlet.href}>{outlet.linkLabel}</a>
            </li>
          ))}
        </ul>
      </PageFallback>
    </div>
  );
}
