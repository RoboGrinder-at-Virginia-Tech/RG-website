# RoboGrinder design guide

Use this guide for future design changes. Follow existing shared styles before introducing new ones.

## Visual direction

Keep the site bold, clean, and angular. Use typography and generous spacing to establish hierarchy. Avoid adding decoration that competes with team content.

## Colors and typography

- Use the existing off-white (#f0f0f0), orange (#ed721e), and black (#000000) palette, approximately 60/30/10.
- Use Chakra Petch for headings and Inter for body text, following the shared tokens in BaseLayout.astro.
- Keep body text at least 16px, controls 15px, and supporting labels 13px on desktop or 14px on small screens.

## Dividers and underlines

Use divider lines sparingly and purposefully. Timelines may use lines to connect events or separate milestones.

Do not add decorative underline rules beneath ordinary section headings, including Leadership and Members. Separate these sections with spacing and typographic hierarchy instead. Apply this to member archives, profile details, gallery seasons, robot entries, recruitment steps, hero statistics, and sponsor content sections; avoid repeated horizontal rules in these layouts.

This is not a blanket ban on lines: keep functional boundaries where they improve comprehension, including form fields, sponsorship tier details, and the footer legal area. Inline link styling should remain recognizable, and keyboard focus must stay visible.

## Shapes and imagery

- Use square corners or 45-degree cuts.
- Use white logos on dark backgrounds and black logos on light backgrounds.
- Keep member portraits and cards consistent across Leadership and Members.

## Interaction and layout

- Add the existing button-swipe effect only to controls intended to use it.
Use the upward-right SVG arrow with a rounded 2.75-unit stroke in a 24-unit viewBox for swipe action buttons at every screen size. Retain navbar dropdown chevrons and functional control icons such as pause, close, back, and social logos.
- Keep footer links and social icons free of hover effects.
- Show member profile icons only when a destination exists.
- Preserve responsive layouts, readable text, descriptive image alternatives, and visible keyboard focus.

## Applying this guide

Preserve existing content and working interactions during visual changes. Check desktop and phone layouts when changing layout or typography. Update this guide when a new design preference is agreed upon.
## Homepage section colors

Use the existing off-white token for white sections. Follow this sequence: Mission orange; Achievements white; Subteams black; Robots orange; Placements and Sponsors white; Join orange. Use dark text on orange and white, light text on black, and contrasting action buttons.

## Text selection highlights

- Black backgrounds: orange highlight with black selected text.
- White or off-white backgrounds: orange highlight with black selected text.
- Orange backgrounds: black highlight with light selected text.

Follow the actual local surface, including nested buttons and cards. The dark photo/video hero uses orange highlighting.
