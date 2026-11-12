import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toBlob } from "html-to-image";
import { Button } from "@/components/ui/button";
import { pageSeo } from "@/lib/page-seo";
import { PageFallback } from "@/components/page-fallback";

import collageAsset from "../assets/bloodstone-treasure-collage.jpeg.asset.json";
import coverAsset from "../assets/bloodstone-cover-new.webp.asset.json";

export const Route = createFileRoute("/treasure-hunt")({
  head: () => ({
    ...pageSeo("/treasure-hunt", "Bloodstone Treasure Hunt — Crack the Codes, Win the Art", "A three-question reader challenge with color artwork by Charbak Dipta for winners."),
    meta: [
      ...pageSeo("/treasure-hunt", "Bloodstone Treasure Hunt — Crack the Codes, Win the Art", "A three-question reader challenge with color artwork by Charbak Dipta for winners.").meta,
      { title: "Bloodstone Treasure Hunt — Crack the Codes, Win the Art" },
      {
        name: "description",
        content:
          "Answer three questions hidden inside Bloodstone's mathematics and mythology. Winners receive color artwork by Charbak Dipta from the book.",
      },
      { property: "og:title", content: "Bloodstone Treasure Hunt — Crack the Codes, Win the Art" },
      {
        property: "og:description",
        content:
          "Three questions, one hidden legacy. Winners get original color artwork by Charbak Dipta from Bloodstone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreasureHunt,
});

interface Question {
  id: string;
  number: string;
  text: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    id: "frequency",
    number: "01",
    text: "What was the hill's resonant frequency (the way a tuning fork is tuned to a specific pitch)?",
    options: ["62 Hz", "6.2 Hz", "0.62 Hz", "620 Hz"],
    answer: "6.2 Hz",
  },
  {
    id: "monster",
    number: "02",
    text: "How many dimensions does the Monster group have?",
    options: ["65,537", "1,968,830", "196,884", "196,883"],
    answer: "196,883",
  },
  {
    id: "node",
    number: "03",
    text: "How far away is Node Thirty-One: The Andromeda Polar Moon in Million Light-Years? (Clue: Epilogue)",
    options: ["2.357", "5.327", "2.537", "2.573"],
    answer: "2.537",
  },
];

const instagramCaption = (winner: string) =>
  `I won the Bloodstone Treasure Hunt! ${winner} cracked all three clues. A goddess. A signal. And mathematics! @shamitbagchi #BloodstoneNovel #BloodstoneTreasureHunt`;

async function inlineCertificateImages(node: HTMLElement) {
  await Promise.all(
    Array.from(node.querySelectorAll("img")).map(async (image) => {
      if (!image.src.startsWith("data:")) {
        const response = await fetch(image.src);
        if (!response.ok) throw new Error("Certificate artwork could not be loaded.");
        const blob = await response.blob();
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("Certificate artwork could not be read."));
          reader.readAsDataURL(blob);
        });
        image.src = dataUrl;
      }
      await image.decode();
    }),
  );
}

function saveCertificate(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bloodstone-winner-certificate.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function TreasureHunt() {
  const [picked, setPicked] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<Record<string, "correct" | "wrong" | undefined>>({});
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [exportMessage, setExportMessage] = useState("");
  const [instagramReady, setInstagramReady] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const createCertificate = async () => {
    const node = certificateRef.current;
    if (!node) throw new Error("Certificate is not ready yet.");
    await inlineCertificateImages(node);
    const blob = await toBlob(node, { pixelRatio: 2, skipFonts: true, cacheBust: false });
    if (!blob) throw new Error("Certificate could not be created.");
    return blob;
  };

  const downloadCertificate = async () => {
    setExportBusy(true);
    setExportMessage("");
    try {
      saveCertificate(await createCertificate());
      setExportMessage("Certificate downloaded with the artwork and book cover.");
    } catch {
      setExportMessage("The certificate could not be downloaded. Please try again.");
    } finally {
      setExportBusy(false);
    }
  };

  const postToInstagram = async () => {
    setExportBusy(true);
    setInstagramReady(false);
    setExportMessage("");
    try {
      const blob = await createCertificate();
      const file = new File([blob], "bloodstone-winner-certificate.png", { type: "image/png" });
      const caption = instagramCaption(name.trim());
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "Bloodstone Treasure Hunt winner", text: caption });
          setExportMessage("Choose Instagram in the share menu to finish your post.");
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") return;
          throw error;
        }
      } else {
        saveCertificate(blob);
        let copied = false;
        try {
          await navigator.clipboard.writeText(caption);
          copied = true;
        } catch {
          // Browsers without clipboard permission can still upload the downloaded image.
        }
        setInstagramReady(true);
        setExportMessage(
          copied
            ? "Certificate downloaded and caption copied. Open Instagram, upload the image, then paste the caption."
            : `Certificate downloaded. Open Instagram, upload the image, and use this caption: ${caption}`,
        );
      }
    } catch {
      setExportMessage("The Instagram post could not be prepared. Please try again.");
    } finally {
      setExportBusy(false);
    }
  };

  const pick = (question: Question, option: string) => {
    setPicked((prev) => ({ ...prev, [question.id]: option }));
  };

  const allCorrect = submitted && questions.every((q) => status[q.id] === "correct");

  const submitAnswers = () => {
    if (!name.trim()) {
      setNameError("Please enter your name to submit!");
      return;
    }
    setNameError(undefined);
    const next: Record<string, "correct" | "wrong"> = {};
    for (const q of questions) {
      next[q.id] = picked[q.id] === q.answer ? "correct" : "wrong";
    }
    setStatus(next);
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageFallback title="Bloodstone Treasure Hunt — Crack the Codes. Win the Art.">
        <p>A three-question reader challenge about the novel’s numbers, frequencies and coordinates. Winners receive color artwork by Charbak Dipta from Bloodstone.</p>
        <p>The interactive quiz and downloadable winner certificate require JavaScript. Find the clues in the book and claim your prize through the author’s Instagram @shamitbagchi.</p>
      </PageFallback>
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-artwork-wash" aria-hidden="true" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link to="/" className="font-heading text-lg tracking-tight text-gold transition-colors hover:text-gold-light">
          Bloodstone
        </Link>
        <Link
          to="/"
          className="rounded-md border border-gold/30 px-4 py-2 text-sm font-medium text-gold transition-colors hover:border-gold hover:bg-gold/5"
        >
          Back to home
        </Link>
      </nav>

      <section className="relative z-10 px-6 pb-16 pt-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-gold">
            The Bloodstone Treasure Hunt
          </p>
          <h1 className="font-heading text-4xl leading-tight text-cream lg:text-6xl">
            Crack the codes. Win the art.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Hidden inside <em className="text-cream">Bloodstone</em> are numbers, frequencies and
            coordinates that mean something. Pick the right answer for the three questions below —
            every answer lives somewhere in the book. Winners receive{" "}
            <span className="font-semibold text-cream">
              color artwork by Charbak Dipta from the book
            </span>
            .
          </p>

          <figure className="mt-10 rounded-2xl border border-gold/20 bg-earth-card p-3 lg:p-5">
            <img
              src={collageAsset.url}
              alt="Collage of color artwork by Charbak Dipta from Bloodstone — the kingdom of Kamarupa, Kali and the reader, a snowy station, a sage's mind, the gathering, and Lakshmi on the lotus"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="px-2 pb-1 pt-3 text-center text-sm text-muted-foreground">
              Original color artwork by Charbak Dipta, from <em>Bloodstone</em> — what the winners take
              home.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl text-cream lg:text-3xl">Answer these 3 questions</h2>

          <div className="mt-6 rounded-xl border border-gold/15 bg-earth-card p-6 lg:p-8">
            <label
              htmlFor="winner-name"
              className="font-body text-sm font-semibold uppercase tracking-widest text-gold"
            >
              Your name
            </label>
            <input
              id="winner-name"
              type="text"
              value={name}
              maxLength={80}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError(undefined);
              }}
              placeholder="Enter your name to claim the certificate"
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            {nameError && (
              <p className="mt-2 font-body text-sm font-semibold text-gold">{nameError}</p>
            )}
            <div className="mt-4 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={submitAnswers}
                disabled={!name.trim()}
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit Answers & Generate Certificate!
              </button>
              {submitted && !allCorrect && (
                <p className="font-body text-sm font-semibold text-gold">
                  Some answers need another look — read again and resubmit!
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {questions.map((question) => {
              const state = status[question.id];
              const selection = picked[question.id];
              return (
                <div
                  key={question.id}
                  className={`rounded-xl border bg-earth-card p-6 transition-colors lg:p-8 ${
                    state === "correct"
                      ? "border-sage/60"
                      : "border-gold/15 hover:border-gold/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-body text-xs font-bold uppercase tracking-widest text-gold">
                      Q{question.number}
                    </span>
                    <div className="flex-1">
                      <p className="font-heading text-lg leading-relaxed text-cream lg:text-xl">
                        {question.text}
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {question.options.map((option) => {
                          const isSelected = selection === option;
                          const isLocked = allCorrect && isSelected;
                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={allCorrect}
                              onClick={() => pick(question, option)}
                              className={`rounded-md border px-4 py-3 text-left font-body text-base transition-colors ${
                                isLocked
                                  ? "border-sage/60 bg-sage/10 font-semibold text-cream"
                                  : isSelected
                                    ? "border-gold bg-gold/5 text-cream"
                                    : "border-input bg-background text-foreground hover:border-gold hover:bg-gold/5"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {state === "correct" && (
                        <p className="mt-4 font-body text-sm font-semibold uppercase tracking-wider text-sage">
                          ✓ Correct
                        </p>
                      )}
                      {state === "wrong" && (
                        <p className="mt-4 font-body text-sm font-semibold uppercase tracking-wider text-gold">
                          Try again!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {allCorrect && (
            <div className="mt-10">
              <div
                ref={certificateRef}
                className="rounded-2xl border-2 border-gold bg-earth-card p-2 shadow-lg"
              >
                <div className="rounded-xl border border-gold/40 px-6 py-8 lg:px-12">
                  <div className="text-center">
                    <p className="font-heading text-2xl leading-tight text-cream lg:text-4xl">
                      “Bloodstone: A Novel”
                    </p>
                    <p className="mt-2 font-body text-base text-muted-foreground lg:text-lg">
                      by Shamit Bagchi
                    </p>
                    <p className="mt-3 font-heading text-lg text-gold lg:text-xl">
                      Winner of Bloodstone Treasure Hunt!
                    </p>
                    {name.trim() && (
                      <p className="mt-2 font-heading text-lg text-cream lg:text-xl">
                        Awarded to {name.trim()}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
                    <div className="flex w-full max-w-md gap-4 lg:w-1/2">
                      <img
                        src={collageAsset.url}
                        alt="Collage of color artwork by Charbak Dipta from Bloodstone"
                        className="w-1/2 rounded-lg border border-gold/25 object-cover"
                      />
                      <img
                        src={coverAsset.url}
                        alt="Cover of Bloodstone: A Novel by Shamit Bagchi"
                        className="w-1/2 self-start rounded-lg border border-gold/25"
                      />
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <p className="font-heading text-2xl text-cream lg:text-3xl">🎉 You Win!</p>
                      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground lg:mx-0">
                        All three answers are right. You have unlocked the hidden legacy —{" "}
                        <span className="font-semibold text-cream">
                          color artwork by Charbak Dipta from Bloodstone
                        </span>{" "}
                        is yours.{" "}
                        <span className="font-semibold text-cream">Claim your prize:</span> take a
                        screenshot of this winning page and DM it to us on Instagram{" "}
                        <span className="font-semibold text-cream">@shamitbagchi</span>.
                      </p>
                       <Button type="button" onClick={postToInstagram} disabled={exportBusy} className="mt-6 h-auto min-h-10 whitespace-normal px-6 py-3 text-center">
                         Post to Instagram
                       </Button>
                    </div>
                  </div>
                </div>
              </div>

               <div className="mt-6 flex flex-col items-center gap-3 text-center">
                 <Button
                  type="button"
                  onClick={downloadCertificate}
                   disabled={exportBusy}
                   variant="outline"
                   className="h-auto min-h-10 whitespace-normal border-gold px-6 py-3 text-gold"
                >
                   {exportBusy ? "Preparing certificate…" : "Download Winner Certificate!"}
                 </Button>
                 {exportMessage && <p role="status" className="max-w-xl text-sm text-muted-foreground">{exportMessage}</p>}
                 {instagramReady && (
                   <a href="https://www.instagram.com/create/select/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold underline underline-offset-4">
                     Open Instagram to post →
                   </a>
                 )}
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
          <a
            href="https://www.amazon.in/dp/B0HG1MG8V4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Get the book — Order now!
          </a>
          <p className="text-sm text-muted-foreground">© 2026 Shamit Bagchi</p>
        </div>
      </footer>
    </main>
  );
}
