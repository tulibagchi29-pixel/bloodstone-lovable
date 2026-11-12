import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

import {
  book,
  buildUtmLinks,
  generateInstagramReelSpec,
  generateReviewerPitch,
  generateRedditPost,
  generateXThread,
  routeUser,
  type BuyerIntent,
} from "@/lib/promo-agents";

export const Route = createFileRoute("/promo")({
  head: () => ({
    ...pageSeo("/promo", "Promo Agents — Bloodstone Campaign Studio", "Bloodstone campaign drafts, X threads, reel storyboards, reviewer outreach and order links."),
    meta: [
      ...pageSeo("/promo", "Promo Agents — Bloodstone Campaign Studio", "Bloodstone campaign drafts, X threads, reel storyboards, reviewer outreach and order links.").meta,
      { title: "Promo Agents — Bloodstone Campaign Studio" },
      {
        name: "description",
        content:
          "Run the Bloodstone multi-agent promotion framework: Reddit drafts, X threads, reel storyboards, reviewer pitches, and UTM traffic routing.",
      },
      { property: "og:title", content: "Promo Agents — Bloodstone Campaign Studio" },
      {
        property: "og:description",
        content:
          "Generate Reddit posts, X threads, reel scripts, reviewer outreach, and smart order links for Bloodstone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Promo,
});

function Promo() {
  const [subreddit, setSubreddit] = useState("printSF");
  const [reviewerName, setReviewerName] = useState("Aarav");
  const [favoriteBook, setFavoriteBook] = useState("The Three-Body Problem");
  const [source, setSource] = useState("twitter");
  const [medium, setMedium] = useState("thread");
  const [campaign, setCampaign] = useState("launch_push");
  const [location, setLocation] = useState("India");
  const [intent, setIntent] = useState<BuyerIntent>("collector");

  const reddit = useMemo(() => generateRedditPost(subreddit || "printSF"), [subreddit]);
  const thread = useMemo(() => generateXThread(), []);
  const reel = useMemo(() => generateInstagramReelSpec(), []);
  const pitch = useMemo(
    () => generateReviewerPitch(reviewerName, favoriteBook),
    [reviewerName, favoriteBook],
  );
  const utm = useMemo(() => buildUtmLinks(source, medium, campaign), [source, medium, campaign]);
  const routed = useMemo(() => routeUser(location, intent), [location, intent]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageFallback title="Bloodstone Campaign Studio">
        <p>Promotional drafts for Bloodstone: Reddit community posts, X threads, Instagram reel storyboards, reviewer pitches, and campaign-tagged order links.</p>
      </PageFallback>
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-artwork-wash" aria-hidden="true" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link to="/" className="font-heading text-lg tracking-tight text-gold">
          Bloodstone
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/sacred-grammar" className="hidden transition-colors hover:text-gold sm:inline">
            Sacred Grammar
          </Link>
          <a
            href={book.paperbackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-4 py-2 text-ink transition-colors hover:bg-gold-light"
          >
            Order now!
          </a>
        </div>
      </nav>

      <header className="relative z-10 px-6 pb-10 pt-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            Campaign Studio
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-cream lg:text-6xl">
            The Promo Agent System
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Five coordinated agents that turn <em>{book.title}</em> into ready-to-post campaign
            assets — lore-driven copy, reel storyboards, reviewer outreach, and intent-aware order
            routing. Tune the inputs, copy the output, ship it.
          </p>
        </div>
      </header>

      <section className="relative z-10 px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6">
          <AgentCard
            number="01"
            name="Content & Lore Architect"
            purpose="Long-form community posts that lead with the mathematics, not the marketing."
          >
            <Field label="Target subreddit" value={subreddit} onChange={setSubreddit} />
            <p className="mt-4 font-body text-xs font-semibold uppercase tracking-wider text-gold">
              {reddit.channel}
            </p>
            <Output text={`${reddit.title}\n\n${reddit.body}`} />
          </AgentCard>

          <AgentCard
            number="02"
            name="Thread Agent (X / Twitter)"
            purpose="A four-beat thread that escalates from hook to hardbound link."
          >
            <div className="space-y-3">
              {thread.map((tweet, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-background/40 p-4 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mr-2 font-body text-xs font-bold text-gold">{i + 1}</span>
                  <span className="whitespace-pre-wrap">{tweet}</span>
                </div>
              ))}
            </div>
            <Output text={thread.join("\n\n")} label="Copy full thread" />
          </AgentCard>

          <AgentCard
            number="03"
            name="Visual & Reel Generator"
            purpose={`${reel.format} · ${reel.durationSeconds}s · ${reel.audioVibe}`}
          >
            <div className="space-y-4">
              {reel.scenes.map((scene) => (
                <div key={scene.timestamp} className="border-l-2 border-gold/40 pl-4">
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-gold">
                    {scene.timestamp}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{scene.visual}</p>
                  <p className="mt-2 whitespace-pre-wrap font-heading text-lg text-cream">
                    {scene.onScreenText}
                  </p>
                </div>
              ))}
            </div>
            <Output text={reel.caption} label="Copy caption" />
          </AgentCard>

          <AgentCard
            number="04"
            name="Outreach & Reviewer Agent"
            purpose="Personalised ARC pitches for reviewers already reading in the genre."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Reviewer name" value={reviewerName} onChange={setReviewerName} />
              <Field label="Their recent review" value={favoriteBook} onChange={setFavoriteBook} />
            </div>
            <Output text={pitch} />
          </AgentCard>

          <AgentCard
            number="05"
            name="Funnel & Traffic Routing"
            purpose="UTM-tagged links plus intent-based routing to the right storefront."
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="utm_source" value={source} onChange={setSource} />
              <Field label="utm_medium" value={medium} onChange={setMedium} />
              <Field label="utm_campaign" value={campaign} onChange={setCampaign} />
            </div>

            <div className="mt-6 space-y-2">
              <LinkRow label="Landing page" url={utm.landingPage} />
              <LinkRow label="Amazon paperback" url={utm.amazonPaperback} />
              <LinkRow label="Notion Press direct" url={utm.notionPressDirect} />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Reader location" value={location} onChange={setLocation} />
              <label className="block">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Buyer intent
                </span>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value as BuyerIntent)}
                  className="mt-2 w-full rounded-md border border-gold/25 bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
                >
                  <option value="collector">collector</option>
                  <option value="direct_publisher">direct_publisher</option>
                  <option value="quick_read">quick_read</option>
                  <option value="default">default</option>
                </select>
              </label>
            </div>

            <div className="mt-6 rounded-lg border border-gold/25 bg-background/40 p-4">
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-gold">
                Routed destination
              </p>
              <a
                href={routed}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-sm text-cream underline decoration-gold/40 underline-offset-4 hover:text-gold"
              >
                {routed}
              </a>
            </div>
          </AgentCard>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Campaign assets for <span className="text-cream">{book.title}</span> · {book.genre}
          </p>
          <Link to="/" className="text-sm text-gold transition-colors hover:text-gold-light">
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}

function AgentCard({
  number,
  name,
  purpose,
  children,
}: {
  number: string;
  name: string;
  purpose: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-xl border border-gold/15 bg-earth-card p-6 lg:p-8">
      <span className="font-body text-xs font-bold uppercase tracking-widest text-gold">
        Agent {number}
      </span>
      <h2 className="mt-2 font-heading text-2xl text-cream lg:text-3xl">{name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{purpose}</p>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-gold/25 bg-background/60 px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
      />
    </label>
  );
}

function Output({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-4">
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-lg border border-border bg-background/50 p-4 font-body text-sm leading-relaxed text-foreground/90">
        {text}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="mt-3 rounded-md border border-gold/40 px-4 py-2 font-body text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        {copied ? "Copied" : label}
      </button>
    </div>
  );
}

function LinkRow({ label, url }: { label: string; url: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/40 p-3">
      <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block break-all text-sm text-cream hover:text-gold"
      >
        {url}
      </a>
    </div>
  );
}
