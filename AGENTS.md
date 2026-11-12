<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Frankfurt Book Fair photo story on its own content route, with uploaded photographs referenced through Lovable Assets pointers, so the story is independently shareable and media stays CDN-hosted.
- Keep dated ranking announcements separate from historical full lists and source the latest milestone from a shared data module, so a single-book update never invents other books' positions.
- Use TanStack route head metadata with the shared pageSeo helper for self-referencing canonical URLs and WebPage JSON-LD; preserve Book schema and avoid duplicate head-management libraries.
- Keep public/sitemap.xml aligned with all discoverable content routes when adding or removing pages; a static sitemap avoids introducing a server endpoint for this fixed content site.
- Keep plain-HTML noscript summaries within each content page using PageFallback, never in the document head; preserve the same public facts and do not reveal quiz answers.
