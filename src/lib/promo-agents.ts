export interface BookMetadata {
  title: string;
  author: string;
  genre: string;
  paperbackLink: string;
  hardboundLink: string;
  landingPage: string;
  notionPress: string;
}

export const book: BookMetadata = {
  title: "Bloodstone - A Novel",
  author: "Shamit Bagchi",
  genre: "Math-based Hard Sci-Fi / Dark Mythic Thriller",
  paperbackLink: "https://www.amazon.in/dp/B0HG1MG8V4",
  hardboundLink: "https://amzn.in/d/07waOeNl",
  landingPage: "https://bloodstone.lovable.app/",
  notionPress: "https://direct.notionpress.com/in/read/bloodstone",
};

/* 1. Content & Lore Architect Agent */
export function generateRedditPost(subreddit: string) {
  return {
    channel: `Reddit (r/${subreddit})`,
    title: `[Hard Sci-Fi] How mathematical paradoxes meet ancient mythology in '${book.title}'`,
    body: [
      `If you're a fan of hard speculative fiction grounded in real math, check out '${book.title}' by ${book.author}.`,
      "",
      "Key Themes:",
      "- Math-based hard sci-fi mystery",
      "- Ancient iconography and ritual architecture",
      "- Fast-paced conceptual thriller",
      "",
      `Landing Page & Free Excerpt: ${book.landingPage}`,
      `Amazon IN: ${book.paperbackLink}`,
    ].join("\n"),
  };
}

export function generateXThread(): string[] {
  return [
    `1/4 What happens when rigorous mathematics collides with ancient myth? Dive into '${book.title}' by ${book.author}. 🧵👇`,
    "2/4 Forget soft space opera—this is math-grounded hard sci-fi exploring hidden codes and reality-bending paradoxes.",
    `3/4 Available in Hardbound collector format and Paperback now.\nHardbound: ${book.hardboundLink}\nPaperback: ${book.paperbackLink}`,
    `4/4 Explore the lore and preview chapters on the interactive landing page: ${book.landingPage} #SciFi #BookRecommendation #IndianSciFi`,
  ];
}

/* 2. Visual & Reel Generation Agent */
export interface ReelScene {
  timestamp: string;
  visual: string;
  onScreenText: string;
}

export function generateInstagramReelSpec() {
  return {
    format: "9:16 Vertical Video (Reels/Shorts/TikTok)",
    durationSeconds: 15,
    audioVibe: "Dark Atmospheric Synth / Deep Bass Drone",
    scenes: [
      {
        timestamp: "0:00 - 0:03",
        visual: "Close-up slow zoom on the Kali-inspired temple artwork.",
        onScreenText: "Looking for real Math-Based Hard Sci-Fi?",
      },
      {
        timestamp: "0:04 - 0:08",
        visual: "Fast cuts of geometric patterns overlaid on ancient temple architecture.",
        onScreenText: "Ancient mysteries calculated with modern precision.",
      },
      {
        timestamp: "0:09 - 0:15",
        visual: "3D render / clear shot of the Bloodstone book cover.",
        onScreenText: `'${book.title}' by ${book.author}\nLink in bio to order.`,
      },
    ] satisfies ReelScene[],
    caption: `When numbers unlock ancient terrors. Get your copy of '${book.title}' today. Direct link: ${book.landingPage} #BookTok #HardSciFi #DarkFantasy`,
  };
}

/* 3. Outreach & Reviewer Agent */
export function generateReviewerPitch(reviewerName: string, favoriteBook: string) {
  return [
    `Hi ${reviewerName || "there"},`,
    "",
    `I saw your recent review of '${favoriteBook || "The Three-Body Problem"}' and wanted to reach out. Given your interest in hard speculative fiction, I think you'd appreciate '${book.title}' by ${book.author}—a hard sci-fi novel blending mathematical theory with mythic realism.`,
    "",
    "We would love to offer you a digital review copy (or physical copy via Amazon/Notion Press).",
    "",
    `Quick Preview: ${book.landingPage}`,
    `Paperback Edition: ${book.paperbackLink}`,
    "",
    "Let me know if you'd like an ARC copy!",
    "",
    "Best regards,",
    "Promotion Team",
  ].join("\n");
}

/* 4. Funnel & Traffic Routing Agent */
export function buildUtmLinks(source: string, medium: string, campaign: string) {
  const params = `?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}`;
  return {
    landingPage: `${book.landingPage}${params}`,
    amazonPaperback: `${book.paperbackLink}?tag=bloodstone-21`,
    notionPressDirect: `${book.notionPress}${params}`,
  };
}

export type BuyerIntent = "collector" | "direct_publisher" | "quick_read" | "default";

export function routeUser(userLocation: string, buyerIntent: BuyerIntent) {
  if (buyerIntent === "collector") return book.hardboundLink;
  if (buyerIntent === "direct_publisher" && userLocation.toLowerCase() === "india")
    return book.notionPress;
  if (buyerIntent === "quick_read") return book.landingPage;
  return book.paperbackLink;
}

/* 5. Amazon Listing & Keyword Optimisation Agent */
export function generateAmazonKeywords() {
  return {
    categories: [
      "Science Fiction > Hard Science Fiction",
      "Science Fiction > Metaphysical & Visionary",
      "Literature & Fiction > Indian Writing",
      "Mystery, Thriller & Suspense > Occult & Supernatural",
    ],
    backendKeywords: [
      "hard science fiction india",
      "mathematical science fiction novel",
      "tantric mythology thriller",
      "monster group monstrous moonshine fiction",
      "kamakhya kamarupa novel",
      "three body problem readalike",
      "illustrated science fiction novel",
    ],
    aPlusModules: [
      "Hero banner: cover art + 'India's answer to The Three-Body Problem'",
      "Comparison module: Bloodstone vs. the hard-SF canon readers already love",
      "Illustration gallery: 4 of Charbak Dipta's plates with one-line captions",
      "Author credibility module: Applied Physics master's, MBA, AI strategy",
    ],
    bulletCopy: [
      "Real mathematics, not hand-waving: the 196,883-dimensional Monster group as literal cosmology.",
      "Nearly 50 original illustrations by Kolkata artist Charbak Dipta.",
      "7th-century Kamarupa, Kamakhya and Assamese Tantra rendered with historical rigour.",
      "For readers of Liu Cixin, Carl Sagan, Neal Stephenson and Amitav Ghosh.",
    ],
  };
}

/* 6. Email Launch Sequence Agent */
export interface EmailBeat {
  day: string;
  subject: string;
  body: string;
}

export function generateEmailSequence(): EmailBeat[] {
  return [
    {
      day: "Day 0 — Announce",
      subject: "A goddess, a signal, and 196,883 dimensions",
      body: `Bloodstone is out. It began with a question: what if the mathematics Ramanujan said a goddess showed him was a message?\n\nPaperback: ${book.paperbackLink}\nHardbound (collector): ${book.hardboundLink}`,
    },
    {
      day: "Day 2 — The science",
      subject: "The Monster group is real. So is the maths in this novel.",
      body: `A short note on why Bloodstone uses the Monster group's 194 irreducible representations as structure rather than metaphor — and why the Kamakhya temple's 6.2 Hz carrier wave matters.\n\nRead the essay: ${book.landingPage}sacred-grammar`,
    },
    {
      day: "Day 5 — The art",
      subject: "Nearly 50 illustrations you haven't seen yet",
      body: `Charbak Dipta's plates translate Tantric iconography into a mathematical visual language. Four of my favourites, and what each scene is doing in the book.\n\n${book.landingPage}`,
    },
    {
      day: "Day 9 — Social proof",
      subject: "What early readers are saying",
      body: `Three reader reactions, one spoiler-free excerpt, and where to get the hardbound before the first print run moves.\n\n${book.hardboundLink}`,
    },
    {
      day: "Day 14 — Last call",
      subject: "If you were going to read one Indian hard-SF novel this year",
      body: `Closing the launch window. Paperback and hardbound both shipping.\n\nAmazon: ${book.paperbackLink}\nNotion Press (direct, India): ${book.notionPress}`,
    },
  ];
}

/* 7. Podcast & Media Pitch Agent */
export function generatePodcastPitch(showName: string, host: string) {
  return [
    `Subject: Guest pitch — the real mathematics behind a Tantric science-fiction novel`,
    "",
    `Hi ${host || "there"},`,
    "",
    `I'd like to pitch ${book.author} for ${showName || "your show"}. He holds a master's in Applied Physics and works in AI strategy; his novel ${book.title} uses the Monster group's 196,883-dimensional representation as literal cosmological architecture, set against 7th-century Kamarupa and the Kamakhya temple.`,
    "",
    "Three angles that work as standalone episodes:",
    "1. Monstrous Moonshine explained for a general audience — the strangest coincidence in mathematics.",
    "2. Ramanujan's goddess: what it means when a mathematician credits revelation.",
    "3. Why non-Western scientific imagination travels — the Three-Body precedent.",
    "",
    `Landing page: ${book.landingPage}`,
    `Review copy available on request. Shamit records from Frankfurt (CET).`,
  ].join("\n");
}

/* 8. Press Release Agent */
export function generatePressRelease(city = "Frankfurt") {
  return [
    "FOR IMMEDIATE RELEASE",
    "",
    `${city.toUpperCase()} — ${book.author} releases ${book.title}, a mathematically rigorous science-fiction novel rooted in Assamese Tantric history.`,
    "",
    `${book.title} fuses peer-reviewed mathematics — the Monster group and Monstrous Moonshine — with the mythic lineage of Kamarupa and the Kamakhya temple, illustrated with nearly 50 original works by Kolkata-based artist Charbak Dipta.`,
    "",
    `Bagchi, who holds a master's in Applied Physics and an MBA and works in AI strategy, treats the 196,883-dimensional representation of the Monster group as cosmological structure rather than metaphor — a method critics have compared to Liu Cixin's use of orbital mechanics in The Three-Body Problem.`,
    "",
    `Available in paperback and hardbound collector editions via Amazon India (${book.paperbackLink}) and directly from Notion Press (${book.notionPress}).`,
    "",
    `Media enquiries and review copies: via ${book.landingPage}`,
    "",
    "###",
  ].join("\n");
}

/* 9. Paid Ads Agent */
export function generateAdVariants() {
  return [
    {
      platform: "Meta (Feed, 1:1)",
      headline: "The maths is real. That's the point.",
      primary:
        "A novel that uses the Monster group's 196,883 dimensions as literal cosmology — set in 7th-century Kamarupa. Nearly 50 original illustrations.",
      cta: "Order now",
      audience: "Interests: hard SF, Liu Cixin, Ted Chiang, popular mathematics, Indian mythology · IN, DE, US, UK",
    },
    {
      platform: "Amazon Sponsored Products",
      headline: "India's answer to The Three-Body Problem",
      primary: "Hard science fiction grounded in real mathematics and Assamese Tantra.",
      cta: "See the book",
      audience: "Keyword targeting: three body problem, hard science fiction, indian science fiction, ramanujan",
    },
    {
      platform: "Instagram Reels",
      headline: "When numbers unlock ancient terrors",
      primary: "15s: temple artwork → geometry overlay → cover reveal. Dark synth drone.",
      cta: "Link in bio",
      audience: "Lookalike of landing-page visitors + BookTok / #HardSciFi engagers",
    },
    {
      platform: "Goodreads / Newsletter sponsorship",
      headline: "If you finished Three-Body and wanted more",
      primary: "An illustrated hard-SF novel where the mathematics is peer-reviewed and the mythology is 1,400 years old.",
      cta: "Read the premise",
      audience: "SF newsletter lists, r/printSF adjacent audiences",
    },
  ];
}

/* 10. Bulk, Library & Institutional Sales Agent */
export function generateInstitutionalPitch(institution: string) {
  return [
    `Hi ${institution || "Acquisitions team"},`,
    "",
    `I'd like to propose ${book.title} by ${book.author} for your collection or course list. It is unusual in pairing genuine, citable mathematics (the Monster group, Monstrous Moonshine) with primary-source Assamese history — which makes it teachable in more than one department:`,
    "",
    "- Mathematics / physics outreach: representation theory as narrative",
    "- South Asian studies: Kamarupa, Kamakhya, Tantric traditions",
    "- Creative writing: science-grounded worldbuilding",
    "- Art & illustration: nearly 50 original plates by Charbak Dipta",
    "",
    "Available for bulk and institutional orders (10+ copies) with hardbound options, plus an author Q&A session by video for adopting institutions.",
    "",
    `Details: ${book.landingPage}`,
    `Direct publisher orders: ${book.notionPress}`,
  ].join("\n");
}

/* 11. Review Velocity Agent */
export function generateReviewRequests() {
  return [
    {
      channel: "Post-purchase (day 14)",
      copy: `If Bloodstone landed for you, a short honest review on Amazon moves this book more than any ad I can buy. Two lines is plenty: ${book.paperbackLink}`,
    },
    {
      channel: "Goodreads",
      copy: `Adding Bloodstone to your Goodreads shelf — or rating it — is how other hard-SF readers find it. Shelf it here, and tell me which chapter broke you.`,
    },
    {
      channel: "ARC follow-up",
      copy: `Thank you for reading the ARC. If you're posting, launch week is the window that counts most. Happy to supply cover art, author photo, or an excerpt you can quote.`,
    },
    {
      channel: "BookTok / Bookstagram nudge",
      copy: `If you post about Bloodstone, tag it and I'll reshare. The illustrations film beautifully — the temple plate around the midpoint especially.`,
    },
  ];
}

/* 12. Launch Calendar Agent */
export interface CalendarBeat {
  week: string;
  focus: string;
  actions: string[];
}

export function generateLaunchCalendar(): CalendarBeat[] {
  return [
    {
      week: "Week 1 — Ignition",
      focus: "Announce everywhere at once, concentrate reviews",
      actions: [
        "Publish the X thread and pin it",
        "r/printSF and r/IndianBooks lore posts (no hard sell)",
        "Email Day 0 + Day 2 beats",
        "20 reviewer ARC pitches",
      ],
    },
    {
      week: "Week 2 — Proof",
      focus: "Convert curiosity into reviews and shares",
      actions: [
        "Reel #1 (temple → geometry → cover)",
        "Day 5 and Day 9 emails",
        "Post-purchase review requests to week-1 buyers",
        "Pitch 10 podcasts",
      ],
    },
    {
      week: "Week 3 — Authority",
      focus: "Long-form credibility",
      actions: [
        "Push the Sacred Grammar essay to SF newsletters",
        "Press release to regional and national desks",
        "Institutional and library outreach batch",
        "Start Amazon Sponsored Products on the top 4 keywords",
      ],
    },
    {
      week: "Week 4 — Compounding",
      focus: "Scale what worked, retire what didn't",
      actions: [
        "Double the budget on the best-performing ad variant",
        "Reel #2 built from the illustrations",
        "Day 14 last-call email",
        "Recruit top reviewers into the ambassador programme",
      ],
    },
  ];
}

/* 13. Ambassador & Affiliate Agent */
export function generateAmbassadorOffer(name: string) {
  return [
    `Hi ${name || "there"},`,
    "",
    `You've been one of the loudest voices for ${book.title} — I'd like to make that official.`,
    "",
    "The Bloodstone ambassador programme:",
    "- A signed hardbound copy for you",
    "- Two paperbacks to give away to your audience",
    "- Early access to Charbak Dipta's unreleased plates for your posts",
    "- Your own tracked link so we both see what your audience responds to",
    "- Credit in the second-edition acknowledgements",
    "",
    `Your link would look like: ${book.landingPage}?utm_source=ambassador&utm_medium=referral&utm_campaign=${(name || "friend").toLowerCase().replace(/\s+/g, "_")}`,
    "",
    "Interested? Reply and I'll ship the hardbound this week.",
  ].join("\n");
}
