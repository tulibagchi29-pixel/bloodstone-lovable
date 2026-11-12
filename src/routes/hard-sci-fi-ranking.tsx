import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import rankingAnnouncement from "@/assets/bloodstone-ranking-10-october-2026.png.asset.json";
import { latestBookRanking } from "@/lib/book-ranking";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

export const Route = createFileRoute("/hard-sci-fi-ranking")({
  head: () => ({
    ...pageSeo("/hard-sci-fi-ranking", "Bloodstone #13 in Hard Science Fiction — 10 October 2026", "Bloodstone ranked #13 in Amazon India Hard Science Fiction Bestsellers in the 10 October 2026 announcement."),
    meta: [
      ...pageSeo("/hard-sci-fi-ranking", "Bloodstone #13 in Hard Science Fiction — 10 October 2026", "Bloodstone ranked #13 in Amazon India Hard Science Fiction Bestsellers in the 10 October 2026 announcement.").meta,
      { title: "Bloodstone #13 in Hard Science Fiction — 10 October 2026" },
      {
        name: "description",
        content:
          "Bloodstone: A Novel by Shamit Bagchi ranked #13 in Amazon India's Hard Science Fiction Bestsellers in the announcement dated 10 October 2026.",
      },
      {
        property: "og:title",
        content: "Bloodstone #13 in Hard Science Fiction — 10 October 2026",
      },
      {
        property: "og:description",
        content:
          "The 10 October 2026 announcement: Bloodstone is #13 in Amazon India's Hard Science Fiction Bestsellers.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RankingPage,
});

interface RankedBook {
  rank: number;
  title: string;
  author: string;
  url?: string;
}

const RANKING: RankedBook[] = [
  { rank: 1, title: "Project Hail Mary", author: "Andy Weir" },
  { rank: 2, title: "The Three-Body Problem Boxset", author: "Cixin Liu" },
  { rank: 3, title: "The Three-Body Problem", author: "Cixin Liu" },
  { rank: 4, title: "All Systems Red (The Murderbot Diaries #1)", author: "Martha Wells" },
  { rank: 5, title: "Artemis", author: "Andy Weir" },
  { rank: 6, title: "Children of Time", author: "Adrian Tchaikovsky" },
  { rank: 7, title: "Neuromancer", author: "William Gibson" },
  { rank: 8, title: "Foundation", author: "Isaac Asimov" },
  { rank: 9, title: "Stories of Your Life and Others", author: "Ted Chiang" },
  { rank: 10, title: "Leviathan Wakes (The Expanse #1)", author: "James S. A. Corey" },
  { rank: 11, title: "We", author: "Yevgeny Zamyatin" },
  { rank: 12, title: "I, Robot", author: "Isaac Asimov" },
  { rank: 13, title: "Acts of God", author: "Kanan Gill" },
  { rank: 14, title: "Dune Messiah", author: "Frank Herbert" },
  { rank: 15, title: "Rendezvous with Rama", author: "Arthur C. Clarke" },
  {
    rank: 16,
    title: "Bloodstone: A Novel",
    author: "Shamit Bagchi",
    url: "https://www.amazon.in/dp/B0HG1MG8V4",
  },
  { rank: 17, title: "When the Light Died (The Ark Book 1)", author: "Joshua T. Calvert" },
  { rank: 18, title: "Silo Series Boxed Set (Wool, Shift, Dust)", author: "Hugh Howey" },
];

function RankingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageFallback title="Bloodstone: Ranked #13">
        <p>As of {latestBookRanking.date}, Bloodstone: A Novel by Shamit Bagchi ranked #{latestBookRanking.rank} in {latestBookRanking.market} {latestBookRanking.category}, according to the author’s announcement.</p>
        <p>The earlier full ranking from 29 September 2026 is preserved on this page, with Bloodstone at #16. Amazon rankings change over time.</p>
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
          <Button asChild>
          <a
            href="https://www.amazon.in/dp/B0HG1MG8V4"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-4 py-2 text-ink transition-colors hover:bg-gold-light"
          >
            Order now
          </a>
          </Button>
        </div>
      </nav>

      <article className="relative z-10 px-6 pb-24 pt-12 lg:px-12 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-gold">
              The Indian Market
            </p>
            <h1 className="font-heading text-4xl leading-[1.1] text-cream lg:text-6xl">
              Bloodstone: Ranked #{latestBookRanking.rank}
            </h1>
            <p className="mt-4 font-heading text-xl italic text-gold-light lg:text-2xl">
              As of {latestBookRanking.date}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {latestBookRanking.category} · {latestBookRanking.market}
            </p>
          </header>

          <figure className="mx-auto mb-10 max-w-xl">
            <a href="https://www.amazon.in/dp/B0HG1MG8V4" target="_blank" rel="noopener noreferrer">
              <img
                src={rankingAnnouncement.url}
                alt="Bloodstone: A Novel by Shamit Bagchi — ranked #13 in Amazon India Hard Science Fiction Bestsellers, alongside Andy Weir, Liu Cixin and Isaac Asimov."
                width={768}
                height={1152}
                className="h-auto w-full rounded-lg"
              />
            </a>
            <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
              Ranking announcement dated {latestBookRanking.date}. Amazon rankings change over time.
            </figcaption>
          </figure>

          <a
            href="https://www.amazon.in/Hard-Science-Fiction/b?ie=UTF8&node=202413285031"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-12 flex items-center gap-5 rounded-lg border-2 border-gold bg-earth-card p-6 shadow-lg transition-colors hover:border-gold-light lg:p-8"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gold font-heading text-2xl font-bold text-ink lg:h-20 lg:w-20 lg:text-3xl">
              #{latestBookRanking.rank}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold lg:text-sm">
                Amazon India · Bestsellers
              </p>
              <h2 className="mt-1 font-heading text-2xl leading-tight text-cream lg:text-3xl">
                Bloodstone: A Novel — #13 in Hard Science Fiction Bestsellers
              </h2>
              <p className="mt-2 font-body text-sm text-foreground/80 lg:text-base">
                {latestBookRanking.date} · View the category on Amazon →
              </p>
            </div>
          </a>

          <section aria-labelledby="historical-ranking" className="mb-6 border-t border-border pt-10">
            <h2 id="historical-ranking" className="font-heading text-2xl text-cream">
              Earlier ranking: 29 September 2026
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The earlier 18-title list is preserved below, with Bloodstone at #16. The 10 October
              announcement updates Bloodstone’s position to #13; it does not supply a revised full list.
            </p>
          </section>

          <ol className="space-y-3">
            {RANKING.map((book) =>
              book.rank === 16 ? (
                <li key={book.rank}>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 rounded-xl border-2 border-gold/60 bg-earth-card p-5 shadow-lg transition-colors hover:border-gold lg:p-6"
                  >
                    <span className="font-heading text-3xl font-bold text-gold lg:text-4xl">
                      {book.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-heading text-xl text-cream lg:text-2xl">
                        {book.title}
                      </h2>
                      <p className="mt-1 font-body text-sm text-foreground/80 lg:text-base">
                        {book.author}
                      </p>
                      <p className="mt-2 font-body text-xs font-semibold uppercase tracking-widest text-gold">
                        #16 on 29 September 2026 · Order now →
                      </p>
                    </div>
                  </a>
                </li>
              ) : (
                <li
                  key={book.rank}
                  className="flex items-center gap-5 rounded-lg border border-gold/10 bg-background/40 px-5 py-4 transition-colors hover:border-gold/30"
                >
                  <span className="w-8 shrink-0 font-heading text-lg text-muted-foreground lg:text-xl">
                    {book.rank}
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-base text-cream/90 lg:text-lg">{book.title}</p>
                    <p className="font-body text-sm text-muted-foreground">{book.author}</p>
                  </div>
                </li>
              ),
            )}
          </ol>

          <div className="mt-16 flex flex-col items-center justify-center gap-6 border-t border-border pt-12 sm:flex-row">
            <Button asChild variant="outline" className="h-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-gold/30 px-6 py-3 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5"
            >
              Back to Bloodstone
            </Link>
            </Button>
            <Button asChild className="h-auto">
            <a
              href="https://www.amazon.in/dp/B0HG1MG8V4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Order now on Amazon
            </a>
            </Button>
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
