import type { ReactNode } from "react";

export function PageFallback({ title, children }: { title: string; children: ReactNode }) {
  return (
    <noscript>
      <section className="relative mx-auto max-w-3xl px-6 py-8" aria-label="Page summary">
        <h2>{title}</h2>
        {children}
        <p><a href="https://www.amazon.in/dp/B0HG1MG8V4">Order Bloodstone on Amazon</a> · <a href="https://direct.notionpress.com/in/read/bloodstone">Order from Notion Press</a></p>
        <nav aria-label="Page summary navigation">
          <a href="/">Bloodstone</a> · <a href="/sacred-grammar">The Sacred Grammar</a> · <a href="/hard-sci-fi-ranking">Rankings</a> · <a href="/frankfurt-book-fair">Frankfurt Book Fair</a> · <a href="/press-coverage">Press</a> · <a href="/treasure-hunt">Treasure Hunt</a> · <a href="/promo">Campaign Studio</a>
        </nav>
      </section>
    </noscript>
  );
}