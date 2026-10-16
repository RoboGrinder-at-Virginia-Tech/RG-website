# Homepage performance

The October 13, 2026 mobile PageSpeed report recorded performance 89, LCP 2.9s,
and total blocking time 280ms. These are lab results, not real-user measurements.

The homepage keeps automatic background-video playback. It starts the player
after the window's load event, using an idle callback when supported, and only
while the hero is visible. A visitor can still start playback immediately using
the control. Reduced-motion preferences prevent automatic playback.

The hero poster and mission photo use WebP quality 70. The mission photo includes
a 768px candidate so mobile browsers can avoid jumping from 640px to 960px.
In the local build, the 768px mission photo is 60,280 bytes, versus about 104 KiB
for the 960px photo in the original report. The 768px poster is about 23 KiB.
Browsers choose candidates according to viewport width and pixel density.

The career-logo marquee uses two repetitions in each of its two matching halves,
instead of five repetitions per half. This reduces logo entries from 410 to 164
and homepage HTML from 425,457 to 239,019 bytes before transfer compression.
The animation duration scales with the shorter track to retain the same speed.
Browser checks at 393px, 1440px, and 3840px verified that each half spans the
viewport, all 41 original links remain keyboard accessible, pause/resume works,
and reduced motion displays just the 41 originals. These are structural savings;
their effect on the reported 2.9 seconds of main-thread work has not been measured.

## Remaining findings

- **YouTube JavaScript:** Deferring the player reduces competition with initial
  page resources but does not remove its code. Autoplay still downloads the player,
  so Lighthouse can continue reporting unused JavaScript. Removing that cost
  requires a directly hosted video file (already supported by the CMS) or loading
  YouTube only after a visitor clicks Play.
- **Font display:** The site's bundled Inter, Chakra Petch, and Material Icons
  fonts already use `font-display: swap`. The reported `fonts.gstatic.com` font
  comes from the embedded player. Its stylesheet is controlled by YouTube.
- **Cache lifetimes:** The deployment workflow publishes static files to GitHub
  Pages and has no response-header configuration. Set long browser caching at a
  CDN or a host supporting custom headers. Hashed `/_astro/` resources are suitable
  for `Cache-Control: public, max-age=31536000, immutable`. Keep HTML and stable
  filenames such as `/images/` on shorter lifetimes so content updates appear.
  Adding a `_headers` file alone does not configure GitHub Pages.

## Verification

`npm run build` passes. Local Chromium checks at 393px and 1440px verified that
the iframe remains unloaded while the poster is held pending, starts after load,
updates its pause/resume controls, and stays unloaded with reduced motion enabled.
No page-script errors occurred. YouTube responses were mocked for these checks;
live streaming playback and a new deployed Lighthouse score were not measured.

After deployment, rerun mobile PageSpeed to measure the effect on LCP and blocking
time. The timing change alone does not guarantee a particular score.

## Page navigation

The shared layout opts into native cross-document view transitions with a 140ms
crossfade. Supported browsers retain the outgoing page while the next document
renders; other browsers keep normal document navigation. Reduced-motion settings
disable the transition. Full document navigation preserves existing script
initialization for menus, gallery previews, forms, and the home video.

Astro prefetches same-origin page links on hover or keyboard focus, falling back
to tap for data-saving or slow connections. This avoids downloading every profile
or gallery destination up front. The shared body and heading fonts are preloaded,
and above-the-fold OrangeFeature photos load eagerly with high priority instead
of waiting for lazy-image discovery.
