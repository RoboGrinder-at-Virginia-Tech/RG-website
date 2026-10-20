# RoboGrinder design guide

Use this guide for future design changes. Follow existing shared styles before introducing new ones.

## Visual direction

Keep the site bold, clean, and angular. Use typography and generous spacing to establish hierarchy. Avoid adding decoration that competes with team content.

## Colors and typography

- Use the existing off-white (#f0f0f0), orange (#ed721e), and black (#000000) palette, approximately 60/30/10.
- Use Chakra Petch for headings and Inter for body text, following the shared tokens in BaseLayout.astro.
- Keep body text at least 16px, controls 15px, and supporting labels 13px on desktop or 14px on small screens.

## Dividers and underlines

Use divider lines sparingly and purposefully. Timelines may use lines to connect events or separate milestones. Dropdown and accordion menus should use subtle 1px dividers between rows to clarify their clickable boundaries, including member subteams, previous seasons, alumni, and gallery season menus. Keep these separators when a menu is expanded or collapsed; ordinary section headings remain unlined.

Do not add decorative underline rules beneath ordinary section headings, including Leadership and Members. Separate these sections with spacing and typographic hierarchy instead. Apply this to profile details, robot entries, recruitment steps, hero statistics, and sponsor content sections; avoid decorative repeated horizontal rules in these layouts.

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

Use the existing off-white token for white sections. Follow this sequence: What is ARCC white immediately after the hero; Robots orange; Achievements white; Subteams black; Placements and Sponsors white; Join orange. The homepage does not include a separate Mission section. Use dark text on orange and white, light text on black, and contrasting action buttons.

## Text selection highlights

- Black backgrounds: orange highlight with black selected text.
- White or off-white backgrounds: orange highlight with black selected text.
- Orange backgrounds: black highlight with light selected text.

Follow the actual local surface, including nested buttons and cards. The dark photo/video hero uses orange highlighting.

## Featured photos

Use the Join RoboGrinder split-section layout for featured editorial photos: padded text on one half and a photo flush to the outer section edges on the other half. The photo stretches to the full section height without a surrounding gutter or inset frame. Use object-fit: cover and preserve the subject when cropping.

For ARCC, keep the competition robot photo on the right and cut only its bottom-left corner at 45 degrees, using equal 24px horizontal and vertical lengths. Keep the other three corners square. This replaces the previous inset 4:3 photo format.

On phones, stack the text above a full-width photo. Always use a wide 16:9 image format on small screens, matching the Join RoboGrinder image. Keep the image full width and in normal flow so lazy loading does not collapse its height; use object-fit: cover and preserve the focal subject. On small screens, always move the featured-photo cut to the top-right corner, regardless of the desktop corner. Keep the other three corners square and use equal horizontal and vertical cut lengths for a 45-degree angle.