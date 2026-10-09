# Editing sponsorship content

Open the CMS at `/admin/`, then **Sponsors → Sponsors page**. The same content is stored in `src/content/sponsors.json` for direct editing.

- **Team numbers:** open **Team numbers (all pages)** in the CMS or edit `src/content/team-numbers.json`. Labels, values, and order update on both pages. Automatic member and subteam counts follow the roster and subteam files. Choose Manual to supply a custom value.
- Edit section headings, introductions, hero photo and alternative text, button labels and destinations, and sponsorship packet PDF in this collection.
- **Partnership benefits** controls the “What sponsors get” summaries. **Sponsorship tiers** controls the contribution amounts and highlights; keep Friend → Bronze → Silver → Gold ordered from least to most expensive. Each card lists additions to the preceding tier. The packet holds the full benefit details.
- **Current partners** controls names, logos, websites, categories, and display order. These partners are also used on the homepage.
- **Sponsorship form text** controls the visible labels, topic names, submit button, and helper text. Topic routing remains stable when labels change.
- The form recipient addresses are configured under the site's general settings (`contact.email` and `contact.sponsorEmail` in `src/content/site.json`).

Use a new line in **Team introduction heading** to control its line break.

## Replacing the sponsorship packet

The PDF is stored in this repository at `public/packets/RG27_SponsorPacket.pdf`. All packet links use the `packetUrl` field in `src/content/sponsors.json`.

- **On GitHub:** open [the packets folder](https://github.com/RoboGrinder-at-Virginia-Tech/RG-website/tree/main/public/packets), choose **Add file → Upload files**, and upload the new PDF renamed to `RG27_SponsorPacket.pdf`. Commit the replacement to `main`. Keeping this filename means no link edits are needed. GitHub Pages automatically rebuilds after the commit.
- **In the local CMS:** run `npm run cms`, open `http://127.0.0.1:4322/admin/index.html`, and choose **Sponsors → Sponsors page → Sponsorship packet PDF**. Upload or select the new PDF and save. Commit and push both the uploaded file and `src/content/sponsors.json` to publish. The editor updates all packet links together, even if the new file has a different name.

The online CMS requires GitHub OAuth setup; use GitHub directly or the local CMS until that is configured.

For layout changes, edit `src/components/TeamOverview.astro`. It contains the featured introduction and numbers for both pages, with clearly marked home and sponsor styles. Sponsor numbers are no longer stored separately in `sponsors.json`. See [Editing in code](code-editing.md) for the full file map.
