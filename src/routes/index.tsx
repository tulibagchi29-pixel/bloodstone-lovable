import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import coverImage from "../assets/bloodstone-cover-new.jpg";
import textureImage from "../assets/bloodstone-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: pageSeo("/", "Bloodstone — A Novel by Shamit Bagchi", "A hard science-fiction novel where real mathematics and ancient Assamese knowledge converge.").links,
    meta: [
      ...pageSeo("/", "Bloodstone — A Novel by Shamit Bagchi", "A hard science-fiction novel where real mathematics and ancient Assamese knowledge converge.").meta,
      { title: "Bloodstone — A Novel by Shamit Bagchi" },
      {
        name: "description",
        content:
          "A hard science-fiction novel where real mathematics, measurable signals, consciousness, and ancient Assamese knowledge converge.",
      },
      {
        property: "og:title",
        content: "Bloodstone — A Novel by Shamit Bagchi",
      },
      {
        property: "og:description",
        content:
          "Real mathematics becomes signal, consciousness becomes physics, and ancient knowledge becomes evidence.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      ...pageSeo("/", "Bloodstone — A Novel by Shamit Bagchi", "A hard science-fiction novel where real mathematics and ancient Assamese knowledge converge.").scripts,
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Bloodstone: A Novel",
          alternateName: "Bloodstone",
          url: "https://bloodstone.lovable.app/",
          description:
            "A hard science-fiction novel in which real number theory, geomagnetism, synchronization, and theories of consciousness become the machinery of a story rooted in Kamakhya and 7th-century Assam. Nearly 50 original illustrations by Charbak Dipta make its hidden architecture visible.",
          genre: ["Hard Science Fiction", "Fiction", "Thriller"],
          inLanguage: "en",
          author: {
            "@type": "Person",
            name: "Shamit Bagchi",
            url: "https://www.instagram.com/shamitbagchi/",
          },
          illustrator: { "@type": "Person", name: "Charbak Dipta" },
          publisher: { "@type": "Organization", name: "Notion Press" },
          mainEntityOfPage: "https://bloodstone.lovable.app/",
          offers: [
            {
              "@type": "Offer",
              url: "https://www.amazon.in/dp/B0HG1MG8V4",
              priceCurrency: "INR",
              price: "449",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
            {
              "@type": "Offer",
              url: "https://direct.notionpress.com/in/read/bloodstone",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageFallback title="Bloodstone: A Novel by Shamit Bagchi">
        <p>A goddess. A signal. And mathematics! A hard science-fiction novel with nearly 50 original illustrations by Charbak Dipta.</p>
        <p>Two timelines: 7th-century Kamarupa and present-day Assam and Frankfurt. Anthropologist Ananya, aided by Aarav, must unlock a centuries-old legacy while facing a shadow agency and a reckless physicist.</p>
        <p>Real mathematics, Tantric cosmology and Assamese history shape the novel’s speculative framework. Published by Notion Press and available worldwide.</p>
      </PageFallback>
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-artwork-wash" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.06] mix-blend-soft-light sepia"
        style={{ backgroundImage: `url(${textureImage})` }}
        aria-hidden="true"
      />


      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <span className="font-heading text-lg tracking-tight text-gold">Bloodstone</span>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground lg:gap-6">
          <a href="#about" className="hidden transition-colors hover:text-gold sm:inline">
            About
          </a>
          <a href="#science" className="hidden transition-colors hover:text-gold sm:inline">
            The Science
          </a>
          <a href="#creators" className="hidden transition-colors hover:text-gold sm:inline">
            Creators
          </a>
          <Link
            to="/sacred-grammar"
            className="hidden transition-colors hover:text-gold sm:inline"
          >
            Sacred Grammar
          </Link>
          <Link
            to="/hard-sci-fi-ranking"
            className="hidden transition-colors hover:text-gold sm:inline"
          >
            Rankings
          </Link>
          <Link
            to="/press-coverage"
            className="hidden transition-colors hover:text-gold sm:inline"
          >
            Press
          </Link>
          <Link to="/treasure-hunt" className="hidden transition-colors hover:text-gold sm:inline">
            Treasure Hunt
          </Link>
          <Link to="/promo" className="hidden transition-colors hover:text-gold sm:inline">
            Promo Agents
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden items-center gap-1 transition-colors hover:text-gold focus-visible:outline-none sm:inline-flex">
              Events
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-56">
              <DropdownMenuLabel>Book events & appearances</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/frankfurt-book-fair">
                  Frankfurt Book Fair 2026
                  <span className="ml-auto pl-4 text-xs text-muted-foreground">Photos</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          <a
            href="https://www.amazon.in/dp/B0HG1MG8V4"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-4 py-2 text-ink transition-colors hover:bg-gold-light"
          >
            Order now!
          </a>
        </div>
      </nav>

      <section className="relative z-10 px-6 pb-20 pt-12 lg:px-12 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Hard Science Fiction
            </p>
            <h1 className="font-heading text-5xl leading-[1.05] text-cream lg:text-7xl">
              Bloodstone
            </h1>
            <p className="mt-4 font-heading text-xl italic text-gold-light lg:text-2xl">
              A goddess. A signal. And mathematics!
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Real number theory, geomagnetism, synchronization, and theories of consciousness become
              the machinery of a story rooted in Kamakhya and 7th-century Assam. Nearly 50 original
              illustrations make its hidden architecture visible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.amazon.in/dp/B0HG1MG8V4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-all hover:bg-gold-light"
              >
                Order now!
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center rounded-md border border-gold/30 px-6 py-3 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5"
              >
                Enter the science
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              By <span className="text-cream">Shamit Bagchi</span> · Art by{" "}
              <span className="text-cream">Charbak Dipta</span>
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <a
              href="https://www.amazon.in/dp/B0HG1MG8V4"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <div className="absolute -inset-6 rounded-xl bg-gradient-to-br from-gold/25 via-sage/10 to-transparent blur-3xl" aria-hidden="true" />
              <img
                src={coverImage}
                alt="Bloodstone book cover by Shamit Bagchi, art by Charbak Dipta"
                className="relative max-h-[70vh] w-auto rounded-md shadow-2xl shadow-black/50"
              />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/hard-sci-fi-ranking"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5"
          >
            See where Bloodstone ranks in Indian hard science fiction →
          </Link>
          <Link to="/frankfurt-book-fair" className="inline-flex items-center gap-2 rounded-md border border-gold/30 px-5 py-2.5 font-body text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5">
            Bloodstone at Frankfurt Book Fair 2026 →
          </Link>
        </div>
      </section>

      <section aria-labelledby="frankfurt-video-title" className="relative z-10 px-6 pb-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 id="frankfurt-video-title" className="mb-6 text-center font-heading text-2xl text-cream lg:text-3xl">
            From the Frankfurt Book Fair
          </h2>
          <div className="aspect-video overflow-hidden rounded-md border border-gold/20 bg-earth-card">
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
        </div>
      </section>

      <section id="about" className="relative z-10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-heading text-2xl leading-relaxed text-cream lg:text-4xl">
            “A hard science-fiction novel where number theory becomes signal, consciousness becomes
            physics, and myth becomes a form of evidence.”
          </blockquote>
        </div>
      </section>

      <section id="premise" className="relative z-10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            The Premise
          </p>
          <div className="mt-6 space-y-6 font-body text-lg leading-relaxed text-foreground/90 lg:text-xl">
            <p>
              For centuries, Nilachal Hill has whispered to the rare few who can hear it — a low,
              impossible frequency that once reshaped a kingdom and left a girl suspended between
              matter and myth.
            </p>
            <p>
              In the present day, an astrophysicist in Assam and an anthropologist with an
              inexplicable neural signature uncover a pattern buried in that ancient signal, one that
              echoes the mathematics Ramanujan claimed a goddess showed him. Their discovery draws
              the attention of forces who have been waiting — patiently, and with purpose.
            </p>
            <p>
              Across continents, a failed writer, a grieving physicist, and a classified operation
              converge on a single event designed to push human consciousness past its threshold.
              What happens there will determine whether the signal remains a secret, a weapon, or
              reveals something far older than civilisation.
            </p>
            <p className="text-cream">
              <strong>BLOODSTONE</strong> is a novel of hidden mathematics, ancestral memory, and the
              thin membrane between minds — where a goddess may be nothing less than the universe
              remembering itself.
            </p>
          </div>
        </div>
      </section>


      <section id="science" className="relative z-10 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="border-b border-gold/20 pb-12 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              The Science Inside Bloodstone
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-cream lg:text-6xl">
              One signal. Many receivers.
            </h2>
          </div>

          <div className="mt-10 space-y-8 font-body text-lg leading-relaxed text-foreground/90 lg:text-xl">
            <p>
              Beneath the temple of Kamakhya, the hill itself hums — a faint, steady pulse that
              instruments can actually measure. In the novel, that hum is treated as a real signal:
              one that a few extraordinary minds across history — Riemann, Ramanujan, Bose — seemed
              to pick up long before any machine could explain where it came from.
            </p>
            <p>
              Minds can get sychronized. A thought may be a pattern that can travel. And every one of these ideas is a piece of the puzzle the characters must solve!
            </p>
          </div>

          <div className="mt-16 border-t border-gold/20 pt-12 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              The Story
            </p>
            <h3 className="mt-3 font-heading text-2xl leading-tight text-cream lg:text-4xl">
              Two timelines. One hidden legacy.
            </h3>
            <p className="mt-3 font-body text-sm uppercase tracking-wider text-muted-foreground">
              7th-century Kamarupa · Present-day Assam and Frankfurt
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-left font-body text-lg leading-relaxed text-foreground/90 lg:text-xl">
              Spanning thirteen centuries — from an ancient sacrifice on Assam&rsquo;s Nilachal hill
              to a high-stakes modern crisis — this gripping thriller follows anthropologist
              Ananya as she becomes the key to an unprecedented global discovery. Hunted by a
              shadow agency and racing against a reckless physicist whose actions threaten global
              catastrophe, Ananya — aided by her ally Aarav — must unlock a centuries-old legacy
              hidden within the earth before time runs out for humanity.
            </p>
          </div>
        </div>
      </section>

      <section id="availability" className="relative z-10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gold/20 bg-earth-card p-8 text-center lg:p-12">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Now Available Worldwide
            </p>
            <h2 className="mt-4 font-heading text-3xl text-cream lg:text-5xl">
              Grab your copy today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              <span className="text-cream">Read</span> the math that moves mythology.{" "}
              <span className="text-cream">Review</span> it for fellow readers.{" "}
              <span className="text-cream">Share</span> it with someone who would feel the signal.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AvailabilityLink country="India" url="https://www.amazon.in/dp/B0HG1MG8V4" />
              <AvailabilityLink country="United States" url="https://www.amazon.com/dp/B0HG1MG8V4" />
              <AvailabilityLink country="France" url="https://www.amazon.fr/dp/B0HG1MG8V4" />
              <AvailabilityLink country="Germany" url="https://www.amazon.de/dp/B0HG1MG8V4" />
              <AvailabilityLink country="Netherlands" url="https://www.amazon.nl/dp/B0HG1MG8V4" />
              <AvailabilityLink country="United Kingdom" url="https://www.amazon.co.uk/dp/B0HG1MG8V4" />
              <AvailabilityLink country="Sweden" url="https://www.amazon.se/dp/B0HG1MG8V4" />
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Published by Notion Press · Launched end August 2026
            </p>
          </div>
        </div>
      </section>

      <section id="creators" className="relative z-10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <CreatorCard
              role="Author"
              name="Shamit Bagchi"
              bio="Frankfurt-based author with a master’s in Applied Physics, an MBA, and deep AI strategy expertise. Bloodstone is his attempt to fuse the mathematical structures he studied with the mythic history of Assam."
            />
            <CreatorCard
              role="Artist"
              name="Charbak Dipta"
              bio="Kolkata-based illustrator whose nearly 50 original pieces for Bloodstone translate Tantric iconography and abstract mathematics into a singular classical-meets-contemporary visual language."
            />
          </div>
        </div>
      </section>

      <section id="parallels" className="relative z-10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              In Conversation with Cixin Liu
            </p>
            <h2 className="mt-3 font-heading text-3xl text-cream lg:text-5xl">
              A lineage of uncompromising science fiction
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Bloodstone stands on its own scientific architecture. Its kinship with
              <em className="text-cream"> The Three-Body Problem</em> lies in the same wager: that
              rigorous science and a specific cultural history can enlarge each other.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ParallelCard
              number="01"
              title="Science as narrative engine"
              threeBody="Liu Cixin uses real astrophysics and game theory to structure Three-Body’s plot."
              bloodstone="Bagchi — an applied-physics master’s and AI expert — uses the actual 196,883-dimensional representation of the Monster group as literal cosmological architecture, not metaphor."
            />
            <ParallelCard
              number="02"
              title="Illustration as a second narrative layer"
              threeBody="Wu Qingsong translated Three-Body’s abstract science and VR-game surrealism into sequential art rooted in Chinese painting tradition."
              bloodstone="Charbak Dipta renders Kamakhya’s Tantric visual language and the novel’s mathematical cosmology through a classical-meets-contemporary Indian aesthetic."
            />
            <ParallelCard
              number="03"
              title="A national epic wearing genre clothes"
              threeBody="Three-Body is inseparable from Chinese 20th-century history."
              bloodstone="Bloodstone is inseparable from a specific Indian lineage — Kamarupa, Kamakhya, Assamese Tantra — treated with the same rigor Liu Cixin gave Chinese history."
            />
            <ParallelCard
              number="04"
              title="Global potential"
              threeBody="Three-Body’s illustrated edition moved from Yilin Press to German and Spanish markets."
              bloodstone="Bloodstone launched via Notion Press with the same cross-market shape: a book whose visual and conceptual hook travels independent of language."
            />
          </div>
        </div>
      </section>

      <section
        id="preorder"
        className="relative z-10 px-6 py-24 lg:px-12"
      >
        <div className="mx-auto max-w-4xl rounded-2xl border border-gold/20 bg-earth-card p-8 text-center lg:p-14">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            Available now
          </p>
          <h2 className="mt-4 font-heading text-4xl text-cream lg:text-6xl">
            Grab your copy right now!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Indian mythology meets the raw might of mathematics and physics. The{" "}
            <span className="text-cream">Monster group</span>, the{" "}
            <span className="text-cream">Riemann zeta zeros</span>, and a measurable{" "}
            <span className="text-cream">6.2&nbsp;Hz geomagnetic pulse</span> beneath Kamakhya —
            woven into the living mythology of Assamese Tantra and 7th-century Kamarupa.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
            Where the goddess is a signal and the signal is pure number, Bloodstone proves that
            ancient Indian cosmology and frontier physics can speak the same language.
          </p>
          <a
            href="https://www.amazon.in/dp/B0HG1MG8V4"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Order now on Amazon
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Published by Notion Press · Launched end August 2026
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg text-gold">Bloodstone</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A novel by Shamit Bagchi · Art by Charbak Dipta
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-gold">
              About
            </a>
            <a href="#science" className="transition-colors hover:text-gold">
              The Science
            </a>
            <a href="#parallels" className="transition-colors hover:text-gold">
              Cixin Liu
            </a>
            <Link to="/hard-sci-fi-ranking" className="transition-colors hover:text-gold">
              Rankings
            </Link>
            <Link to="/promo" className="transition-colors hover:text-gold">
              Promo Agents
            </Link>
            <Link to="/treasure-hunt" className="transition-colors hover:text-gold">
              Treasure Hunt
            </Link>
            <Link to="/frankfurt-book-fair" className="transition-colors hover:text-gold">
              Frankfurt Book Fair
            </Link>
            <Link to="/press-coverage" className="transition-colors hover:text-gold">
              Press
            </Link>
            <a
              href="https://www.amazon.in/dp/B0HG1MG8V4"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Order now
            </a>
            <a
              href="https://direct.notionpress.com/in/read/bloodstone"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Order from Notion Press
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Shamit Bagchi</p>
        </div>
      </footer>
    </main>
  );
}


function ParallelCard({
  number,
  title,
  threeBody,
  bloodstone,
}: {
  number: string;
  title: string;
  threeBody: string;
  bloodstone: string;
}) {
  return (
    <div className="rounded-xl border border-gold/15 bg-earth-card p-6 transition-colors hover:border-gold/40 lg:p-8">
      <span className="font-body text-xs font-bold uppercase tracking-widest text-gold">
        {number}
      </span>
      <h3 className="mt-3 font-heading text-xl text-cream lg:text-2xl">{title}</h3>
      <div className="mt-5 space-y-4">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            The Three-Body Problem
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/80">{threeBody}</p>
        </div>
        <div className="border-t border-border pt-4">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-gold">
            Bloodstone
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">{bloodstone}</p>
        </div>
      </div>
    </div>
  );
}

function AvailabilityLink({ country, url }: { country: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-lg border border-gold/20 bg-background/40 px-5 py-4 transition-all hover:border-gold hover:bg-gold/5"
    >
      <span className="font-heading text-base text-cream lg:text-lg">{country}</span>
      <span className="font-body text-xs font-semibold uppercase tracking-wider text-gold transition-transform group-hover:translate-x-1">
        Buy →
      </span>
    </a>
  );
}

function CreatorCard({
  role,
  name,
  bio,
}: {
  role: string;
  name: string;
  bio: string;
}) {
  return (
    <div className="rounded-xl border border-gold/15 bg-earth-card p-8">
      <p className="font-body text-xs font-bold uppercase tracking-widest text-gold">{role}</p>
      <h3 className="mt-3 font-heading text-2xl text-cream lg:text-3xl">{name}</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">{bio}</p>
    </div>
  );
}
