export const siteOrigin = "https://bloodstone.lovable.app";

export function pageSeo(path: string, name: string, description: string) {
  const url = `${siteOrigin}${path}`;
  return {
    meta: [{ property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en",
        about: { "@type": "Book", name: "Bloodstone: A Novel", author: { "@type": "Person", name: "Shamit Bagchi" } },
      }),
    }],
  };
}