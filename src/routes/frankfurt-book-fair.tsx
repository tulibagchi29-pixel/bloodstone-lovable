import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Copy, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";


import coverPortrait from "../assets/frankfurt-cover-portrait.jpeg.asset.json";
import signedBook from "../assets/frankfurt-signed-book.jpeg.asset.json";
import signingCloseup from "../assets/frankfurt-signing-closeup.jpeg.asset.json";
import signingWide from "../assets/frankfurt-signing-wide.jpeg.asset.json";
import authorPortrait from "../assets/frankfurt-author-portrait.jpeg.asset.json";
import kevinMissal from "../assets/frankfurt-kevin-missal-portrait.jpeg.asset.json";
import friendYogesh from "../assets/frankfurt-friend-yogesh.jpeg.asset.json";
import coverDetail from "../assets/frankfurt-cover-detail.jpeg.asset.json";
import shelfDisplay from "../assets/frankfurt-shelf-display.jpeg.asset.json";

export const Route = createFileRoute("/frankfurt-book-fair")({
  head: () => ({
    ...pageSeo("/frankfurt-book-fair", "Bloodstone at Frankfurt Book Fair 2026 — Shamit Bagchi", "Photographs and reflections from Bloodstone’s Frankfurt Book Fair launch."),
    meta: [
      ...pageSeo("/frankfurt-book-fair", "Bloodstone at Frankfurt Book Fair 2026 — Shamit Bagchi", "Photographs and reflections from Bloodstone’s Frankfurt Book Fair launch.").meta,
      { title: "Bloodstone at Frankfurt Book Fair 2026 — Shamit Bagchi" },
      { name: "description", content: "Shamit Bagchi celebrates Bloodstone: A Novel at Frankfurt Book Fair 2026, with book signing photos, a Hubhawks interview and a meeting with Kevin Missal." },
      { property: "og:title", content: "Bloodstone at Frankfurt Book Fair 2026" },
      { property: "og:description", content: "A milestone for Bloodstone: photographs and reflections from Shamit Bagchi’s Frankfurt Book Fair launch, interview and author encounters." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
  }),
  component: FrankfurtBookFairPage,
});

const photographs = [
  { image: signingCloseup, title: "A story becomes a signed copy", caption: "Signing Bloodstone at the fair — a quiet, personal moment amid the energy of a global literary gathering.", alt: "Shamit Bagchi signing the title page of Bloodstone at Frankfurt Book Fair" },
  { image: signedBook, title: "From manuscript to milestone", caption: "Holding up a freshly signed title page: Bloodstone: A Novel, now part of the Frankfurt Book Fair story.", alt: "Shamit Bagchi displaying the signed title page of Bloodstone" },
  { image: signingWide, title: "In conversation with Hubhawks", caption: "A glimpse of the signing and filming at the Hubhawks stand. I also sat down for an interview with the @hubhawksevents_ team — the interview is coming soon.", alt: "Shamit Bagchi signing Bloodstone while a member of the team films at the stand" },
  { image: authorPortrait, title: "A moment to take it all in", caption: "At the stand with Bloodstone on display — a chance to pause and appreciate how far an idea on a page can travel.", alt: "Shamit Bagchi seated at the Frankfurt Book Fair stand with Bloodstone books on the table" },
  { image: kevinMissal, title: "An unexpected highlight: Kevin Missal", caption: "Meeting reputed author Kevin Missal at the fair was a wonderful bonus — one more memorable connection in a gathering built around stories.", alt: "Shamit Bagchi with author Kevin Missal, wearing his Frankfurt Book Fair badge, at the Emerging Indian Authors stand" },
  { image: friendYogesh, title: "A friend at the fair: Yogesh", caption: "My friend Yogesh at the stand with Bloodstone on display — the people who show up are what make a milestone feel real.", alt: "Shamit Bagchi seated at the Frankfurt Book Fair stand with his friend Yogesh" },
  { image: coverDetail, title: "The artwork, up close", caption: "Bloodstone’s distinctive cover, with artwork by Charbak Dipta, brings the novel’s meeting of Indian mythology and hard science fiction into view.", alt: "Close-up of Bloodstone’s illustrated cover among books at the fair" },
  { image: shelfDisplay, title: "Bloodstone on the world’s bookshelf", caption: "Seeing Bloodstone on the shelves at Frankfurt made the milestone tangible: a story rooted in Assam, finding its place in an international literary setting.", alt: "Bloodstone displayed on a bookshelf at Frankfurt Book Fair" },
];

const SHARE_URL = "https://bloodstone.lovable.app/frankfurt-book-fair";
const SHARE_TEXT = "Bloodstone at Frankfurt Book Fair 2026 — photos and reflections from Shamit Bagchi’s launch of Bloodstone: A Novel.";

function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (e.g. insecure context) — the URL is shown in the address bar as fallback
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {shareLinks.map((share) => (
        <Button asChild key={share.label} variant="outline" size="sm">
          <a href={share.href} target="_blank" rel="noopener noreferrer">
            {share.icon}
            {share.label.replace("Share on ", "")}
          </a>
        </Button>
      ))}
      <Button variant="outline" size="sm" onClick={copyLink}>
        {copied ? <Check /> : <Copy />}
        {copied ? "Link copied!" : "Copy link"}
      </Button>
    </div>
  );
}

function FrankfurtBookFairPage() {

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageFallback title="Bloodstone at Frankfurt Book Fair 2026">
        <p>Shamit Bagchi launched Bloodstone: A Novel at Frankfurt Book Fair 2026. The photo story includes signed copies, Charbak Dipta’s cover art, and the book on display.</p>
        <p>Shamit sat down for an interview with the Hubhawks team; the interview is coming soon. He also met author Kevin Missal and welcomed his friend Yogesh at the stand.</p>
      </PageFallback>
      <nav aria-label="Book Fair navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="font-heading text-lg text-gold">Bloodstone</Link>
        <Button asChild variant="ghost"><Link to="/"><ArrowLeft /> Home</Link></Button>
      </nav>

      <article className="mx-auto max-w-6xl px-6 pb-20">
        <header className="border-t border-border pb-8 pt-10 text-center md:pt-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Bloodstone on the world stage · 2026</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-4xl leading-tight tracking-normal text-cream md:text-6xl">Frankfurt Book Fair</h1>
          <p className="mt-5 font-heading text-xl leading-relaxed tracking-normal text-gold md:text-2xl">A milestone moment for Bloodstone! 🚀📚</p>
          <p className="mt-3 text-sm text-muted-foreground">Words and photographs from Shamit Bagchi</p>
        </header>

        <figure>
          <img src={coverPortrait.url} alt="Shamit Bagchi holding Bloodstone: A Novel at the Hubhawks stand at Frankfurt Book Fair 2026" width={1366} height={768} fetchPriority="high" className="h-auto w-full rounded-md" />
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">Bloodstone: A Novel at Frankfurt Book Fair 2026 — a proud moment with the book in hand.</figcaption>
        </figure>

        <section aria-label="A milestone moment" className="mx-auto max-w-3xl space-y-6 py-12 text-lg leading-relaxed md:py-16">
          <p className="font-heading text-xl leading-relaxed tracking-normal text-cream md:text-2xl">Launched my hard sci-fi novel, <em>Bloodstone: A Novel</em>, at the Frankfurt Book Fair 2026 — a surreal feeling to see my book take the stage at one of the world’s biggest literary gatherings! 🌍✨</p>
          <p>Bloodstone began with a meeting of worlds: real mathematics and physics, Indian mythology, and the layered history of Assam. To bring that story to Frankfurt — the city I call home — and see it among books from across the world felt like a new chapter beyond the pages.</p>
          <p>There is something extraordinary about holding the finished book in a place where so many stories meet. The ideas that once lived in a manuscript were now on a shelf, in my hands, and part of conversations that reached beyond borders. Charbak Dipta’s artwork gave those ideas a visible presence of their own.</p>
          <div className="border-l-2 border-sage pl-6">
            <h2 className="font-heading text-2xl tracking-normal text-cream">An interview, and a wonderful encounter</h2>
            <p className="mt-4">🎤 I also sat down for an interview with the amazing <a href="https://www.instagram.com/hubhawksevents_/" target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">@hubhawksevents_</a> team. Another chance to talk about the book and the journey behind it. Stay tuned — the interview is coming soon!</p>
            <p className="mt-4">🤝 And a wonderful bonus: getting to meet reputed author Kevin Missal at the fair. Moments like these make a literary gathering feel personal — not just a place for books, but a place for the people who bring them into being. The same goes for having my friend Yogesh beside me at the stand: a familiar face in a city full of new ones.</p>
          </div>
        </section>

        <section aria-labelledby="fair-video-title" className="mx-auto max-w-4xl border-t border-border py-12">
          <h2 id="fair-video-title" className="mb-6 text-center font-heading text-3xl tracking-normal text-cream">
            From the Frankfurt Book Fair
          </h2>
          <div className="aspect-video overflow-hidden rounded-md border border-gold/20 bg-background">
            <iframe
              src="https://www.youtube-nocookie.com/embed/F2S-D4E5Ty4"
              title="Bloodstone at Frankfurt Book Fair — YouTube video"
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="photo-title" className="border-t border-border pt-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 id="photo-title" className="font-heading text-3xl tracking-normal text-cream">Moments from the fair</h2>
            <p className="text-sm text-muted-foreground">The signing. The conversations. The book.</p>
          </div>
          <div className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
            {photographs.map((photo, index) => (
              <figure key={photo.image.asset_id} className={index === 7 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}>
                <img src={photo.image.url} alt={photo.alt} loading="lazy" className="h-auto w-full rounded-md" />
                <figcaption className="mt-5">
                  <h3 className="font-heading text-xl leading-snug tracking-normal text-cream">{photo.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{photo.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-label="Bloodstone in the press" className="mt-16 rounded-lg border border-gold/20 bg-gold/5 p-6 text-center lg:p-8">
          <h2 className="font-heading text-2xl tracking-normal text-cream">Bloodstone in the press</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">The fair appearance made national news — The Tribune, The Wire and PTI covered Bloodstone’s Frankfurt moment.</p>
          <Button asChild variant="outline" className="mt-5"><Link to="/press-coverage">Read the press coverage <ArrowUpRight /></Link></Button>
        </section>

        <section aria-label="Share this story" className="mt-16 text-center">
          <h2 className="font-heading text-2xl tracking-normal text-cream">Enjoyed the story? Share it!</h2>
          <p className="mt-3 text-sm text-muted-foreground">Spread the word about Bloodstone’s Frankfurt milestone.</p>
          <div className="mt-6">
            <ShareButtons />
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-12 text-center">

          <h2 className="font-heading text-2xl leading-relaxed tracking-normal text-cream md:text-3xl">From ideas on a page to conversations that cross worlds.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Grateful to the Hubhawks team, to the people I met, and to everyone who has been part of Bloodstone’s journey. Frankfurt was a milestone — and there is more to come! 🪨🚀</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild><a href="https://www.amazon.in/dp/B0HG1MG8V4" target="_blank" rel="noopener noreferrer">Get your copy <ArrowUpRight /></a></Button>
            <Button asChild variant="outline"><a href="https://www.instagram.com/shamitbagchi/" target="_blank" rel="noopener noreferrer"><Instagram /> Follow Shamit</a></Button>
          </div>
        </section>
      </article>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">Bloodstone: A Novel · Shamit Bagchi · Art by Charbak Dipta</footer>
    </main>
  );
}