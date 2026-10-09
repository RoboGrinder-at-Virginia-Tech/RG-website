# Mobile design review — October 9, 2026

Scope: homepage and sponsors page, with independent homepage and sponsors subagent reviews. Browser review used the local development site. Classified as marketing pages; the existing orange/black palette, solid tier colors, cut corners, and shared CTA buttons take precedence over generic design rules.

All fixes remain uncommitted. The pre-existing orange mission section change is preserved. No changes were published.

## Findings and fixes

1. **Medium, verified: excessive space above the mobile hero headline.** The anniversary ribbon required 180px of top padding. At 390×844 the heading began at y240 and the stats ended at y833. Converted the ribbon to a compact mobile badge, keeping its logo, anniversary, and dates. Top padding is now 128px; the headline begins at y188 and the stats end at y781. The desktop ribbon is unchanged. Source: `src/pages/index.astro`, mobile hero rules.
2. **Medium, verified: achievement details are too small and narrow on small phones.** Competition details used 14px text, and the side-by-side year column consumed much of the available width. Details now use the existing 16px body size. At widths up to 360px, the year sits above its result and details without the extra indentation. Verified detail width is 221px at 320px, versus approximately 139px under the previous rules. Source: `src/components/Achievements.astro`.
3. **Medium, verified: tier inheritance is explained too late.** On mobile, the explanation appeared after all four cards, about 1,346px below the start of Friend. Silver and Gold could appear to exclude benefits listed under Bronze. Moved the existing note and packet link above the cards. Verified at 320px. Source: `src/pages/sponsors.astro`.
4. **Polish, verified: tier cards spend too much height on spacing.** Reduced mobile card padding, price spacing, and divider spacing while keeping 16px highlights, ascending tiers, solid fills, and cut corners. Source: `src/pages/sponsors.astro`.

## Optional polish, deferred

- **Corporate logo layout changes at 420px.** The source review flagged the switch to larger single-column logos. Live review at 390px found them readable and balanced, with no clipping, so no change was made. Source: `src/components/OurSponsors.astro`.
- **Benefit descriptions overlap.** “Meet the team” and “Lab tours & outreach” both discuss visits and outreach. They could be differentiated and shortened in a future copy pass. “What sponsors get” remains intact. Source: `src/content/sponsors.json`.

## Verification

- Homepage reviewed at 390×844 and 430×932; narrow achievement layout verified at 320×568.
- Sponsors reviewed at 390×844, then tier guidance and contact navigation checked at 320×568.
- No horizontal overflow in the measured views.
- Mobile navigation opens, closes, and navigates to Achievements.
- Tier CTA lands the contact section at approximately y60, immediately below the 60px header.
- Desktop checked at 1440×900: original 126px anniversary ribbon, four-column stats, no overflow, and orange mission background retained.
- Existing reduced-motion handling and 48–52px CTA touch targets retained. No form was submitted.
- `npm run build` and `git diff --check` pass.

## Quick wins applied

Compact the anniversary badge; increase achievement detail text; stack years on narrow phones; explain tier benefits before the cards; tighten mobile tier spacing.

Subjective mobile design score: **7.5/10 → 8/10**. No critical design defect found. Further copy compression is optional, and this was not a full-site or physical-device audit.
