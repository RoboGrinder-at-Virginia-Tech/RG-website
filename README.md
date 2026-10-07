# RoboGrinder website

This project contains the website for RoboGrinder at Virginia Tech. You can update most text, photos, member lists, and sponsor information using a visual editor with labeled fields. You do not need to know Astro or write code for those changes.

**Astro** turns our website files into pages people can visit. **GitHub** stores the files and their change history. **GitHub Pages** publishes the website after changes are sent to `main`, the main version of the project.

## Set up your computer

You only need to do this once per computer.

1. Install Node.js version **22.12 or newer**. Node.js runs the website tools on your computer. It includes `npm`, the tool used by the commands below.
2. Install GitHub Desktop to download and publish the project using buttons.
3. In GitHub Desktop, choose **File → Clone repository → URL** and enter:

   ```text
   https://github.com/RoboGrinder-at-Virginia-Tech/RG-website
   ```

   Choose where to save the folder, then click **Clone**. Cloning means downloading a working copy. If you already have this project on your computer, use your existing copy.

4. Open a terminal in the project folder. A terminal is a window where you type commands. On Windows, open the `RG-website` folder in File Explorer, right-click an empty area, and choose **Open in Terminal**.
5. Copy this command into the terminal and press Enter:

   ```powershell
   npm ci
   ```

   Wait for it to finish. This downloads the software the project needs. Run it again if someone changes `package.json` or `package-lock.json`, which list that software and its versions.

Run all commands in this guide inside the `RG-website` folder, where `package.json` is located.

## Edit content with the visual editor

The editor is called **Decap CMS**. CMS means “content management system”: a form-based way to edit the website.

1. Before editing, open GitHub Desktop and use **Fetch origin**, then **Pull origin** if it appears, to download teammates' latest changes. Start from the `main` branch.
2. In your terminal, run:

   ```powershell
   npm run cms
   ```

3. Leave the terminal running. In your browser, open:

   ```text
   http://127.0.0.1:4322/admin/index.html
   ```

   This opens an editor on your own computer. Local editing does not need the online editor's GitHub login setup.

4. Choose a section, edit its fields, and use the editor's save/publish control.
5. Open `http://127.0.0.1:4322/` in another browser tab to check the website. Refresh after saving. Check the relevant page, photos, and links. Try a narrow browser window to see how it looks on a phone.
6. When finished, click the terminal and press **Ctrl+C** to stop the editor and preview.

**Saving or clicking Publish in this local editor only changes files on your computer.** Follow the publishing steps below to update the public website.

### Where to find common edits

| What you want to change | Where to look in the editor |
| --- | --- |
| Browser titles, search descriptions, and shared link previews | Titles and link previews → Website metadata |
| Switch the 404 page to a maintenance message | Website settings → Maintenance |
| Homepage headline, introduction, background photo or video | Landing page → Homepage content → Hero |
| Open or close recruiting; application links and messages | Landing page → Homepage content → Recruiting season |
| Mission statement and joining section | Landing page → Homepage content → Mission / Join section |
| Contact email addresses and social links | Landing page → Homepage content |
| Sponsor text, logos, links, and sponsorship packet | Sponsors → Sponsors page |
| Numbers on the homepage and Sponsors page | Team numbers (all pages) |
| Current members and alumni | Members |
| Add or update an older year's roster | Previous seasons |
| Gallery photos and captions | Gallery |
| Subteam descriptions | Subteams |
| Competition results and awards | Achievements |
| Career, research, and university logos | Industry placements |

### Tips for content updates

For titles and previews, open **Titles and link previews → Website metadata**. Expand a page under **Page titles and descriptions** to edit its title and description. These fields update the browser tab, search metadata, and Open Graph/Twitter link previews together. The shared preview image and its description apply to every page; use a 1200 × 630 image. Page headings and visible text are edited in their normal content sections.

If you prefer editing a file, all these settings live in `src/content/metadata.json`. After publishing, existing previews may keep older text or images until the sharing service refreshes its cache.

Under **Website settings → Maintenance**, enable **Maintenance message enabled** to replace the 404 page's heading, message, and preview text. The large 404 number stays visible, and existing pages remain available. Disable it to restore the normal page-not-found message. Save and publish your changes to update the live website; the setting is stored in `src/content/maintenance.json`.

- Before opening recruiting, check that the application link points to the actual application form.
- Add a short photo description (also called alternative text). It helps people who use screen readers understand the image.
- Use descriptive photo filenames, such as `team-photo-2026.jpg`.
- Team numbers can count members and subteams automatically. Choose **Manual** to enter your own value. Changes apply to both the homepage and Sponsors page.
- Previous season rosters use academic years such as `2025-2026`.
- Gallery photos display by season, then by category: team, competition, and miscellaneous. Their order within each category is preserved.
- Keep `backups/alumni-2026-10-06.json` unchanged. It is the original saved copy of the alumni list.

## Publish your changes

You need permission to write to the team's GitHub repository. If GitHub denies access, ask a repository administrator to grant it.

1. Open GitHub Desktop and select this repository. Make sure **Current branch** is `main`.
2. Review the **Changes** tab. Check that the changed text and images match your intended update.
3. Write a short summary, such as “Update sponsor logos.” Click **Commit to main**. A commit is a saved checkpoint of your changes.
4. Click **Push origin**. Pushing sends your saved changes to GitHub. If Desktop asks you to pull teammates' changes first, do that before pushing. If it reports a conflict, ask a teammate familiar with Git to help reconcile the edits.
5. Open the [repository's Actions page](https://github.com/RoboGrinder-at-Virginia-Tech/RG-website/actions). Find the latest **Deploy Astro to GitHub Pages** run and wait for a green check.
6. Visit [robogrinder.org](https://robogrinder.org) and check the pages you updated. Refresh if you still see an older version.

Deployment means building the pages and putting them online. A push to `main` starts this automatically; the website may take a few minutes to update.

If you already use Git in the terminal, this example publishes a README change:

```powershell
git status
git add README.md
git commit -m "Update website documentation"
git push -u origin main
```

Replace `README.md` with the files you actually changed, and use a summary describing your update. `git status` shows which files changed before you save them.

## Common problems

| Problem | What to do |
| --- | --- |
| “npm is not recognized” or “command not found” | Install Node.js, then close and reopen the terminal. |
| The command cannot find `package.json` | Open the terminal inside the `RG-website` folder. |
| The project says your Node.js version is unsupported | Run `node --version` to check it. This project needs 22.12 or newer. |
| PowerShell says `npm.ps1` cannot run because scripts are disabled | Use `npm.cmd` instead of `npm`, for example `npm.cmd run cms`. |
| The local editor or preview will not open | Keep the terminal running and check it for errors. If the website port is already in use, use the address printed in the terminal. |
| The online editor fails to log in | Use the local editor above. Online login still needs administrator setup; see below. |
| Changes show on your computer but not online | Check that you committed and pushed, then check the deployment on GitHub's Actions page. |
| The deployment has a red cross | Open the failed run and its failed step. Share the error with the teammate maintaining the site. |
| The contact form opens an email app | This is expected. It prepares an email draft for the visitor to send; it does not send email itself. |
| Git says “src refspec main does not match any” | Run `git branch` to check the branch name. If it is `master`, use `git branch -m main`. A new repository also needs a commit before it can be pushed. |

## For people editing code

Start with the [code editing guide](docs/code-editing.md) for a map of sections and their files. Other references include [sponsorship editing](docs/sponsorship-editing.md), [roster records](docs/roster-records.md), [career and university placements](docs/placements.md), and [sponsor logos](docs/sponsor-logos.md).

### Files and folders

| Location | What it contains |
| --- | --- |
| `src/content/` | Text, settings, rosters, and image references. The visual editor changes these same files. |
| `src/pages/` | Individual website pages. |
| `src/components/` | Reusable sections, such as the header, footer, and sponsor logos. |
| `src/layouts/BaseLayout.astro` | Shared page structure, fonts, colors, and styles. |
| `public/images/` | Team photos and logos. |
| `public/uploads/` | Files uploaded through the visual editor. |
| `public/admin/` | The visual editor and its settings. |
| `.github/workflows/deploy.yml` | Instructions GitHub uses to build and publish the site. |

Content files use **JSON**, a structured format for storing text and settings. Keep quotation marks, commas, and brackets intact; JSON does not allow comments. The visual editor handles this formatting for you.

Current members live in `src/content/members.json`, alumni in `src/content/alumni.json`, and past rosters in `src/content/seasons/YYYY-YYYY.json`. Past seasons load automatically, newest first. Current members are filtered out of the alumni display except presidents.

### Preview and build commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the project's recorded software versions. |
| `npm run cms` | Start the visual editor and website preview together. |
| `npm run dev` | Start only the website preview, normally at `http://localhost:4321`. |
| `npm run build` | Generate the finished website in `dist/` and check whether it builds successfully. |
| `npm run preview` | View the most recent build on your computer; run the build first. |

### Design conventions

Shared colors are off-white (`#f0f0f0`), orange (`#ed721e`), and black (`#000000`), in roughly 60/30/10 proportions. Keep corners square or cut at 45°. Use white logos on dark backgrounds and black logos on light backgrounds; the styled SVG is intentionally excluded.

Use the shared text sizes in `BaseLayout.astro`: body text is at least 16px, controls 15px, and supporting labels 13px on desktop or 14px on small screens. Add `button-swipe` only to controls intended to use the swipe fill effect. Footer links and social icons have no hover effects; member profile icons appear only when a destination is supplied.

### Administrator setup

The repository is [RoboGrinder-at-Virginia-Tech/RG-website](https://github.com/RoboGrinder-at-Virginia-Tech/RG-website). In **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. Pushes to `main` run the deployment. Administrators can also use **Actions → Deploy Astro to GitHub Pages → Run workflow**.

This website uses Astro. The `.nojekyll` files tell GitHub Pages to skip Jekyll processing; the copy in `public/` is included in the built website. These markers do not build Astro for you. Keep the publishing source set to **GitHub Actions**, rather than **Deploy from a branch**, so GitHub runs `npm run build` and publishes `dist/`. If an Actions log shows `actions/jekyll-build-pages`, check this setting and run **Deploy Astro to GitHub Pages** instead.

The deployment reads the website address and folder path from GitHub Pages settings. This supports the repository address ending in `/RG-website/` and a custom domain configured in **Settings → Pages**. Use the address shown in those settings to visit the published website. Use `withBase()` from `src/lib/urls.ts` for new root-relative links and image URLs.

Online editor login is **not configured yet**: `public/admin/config.yml` still names the old repository and contains `https://YOUR_OAUTH_HOST`. To enable it, update `backend.repo` to `RoboGrinder-at-Virginia-Tech/RG-website`, keep `backend.branch` aligned with `main`, and configure a GitHub OAuth provider or Decap Turbo. Set its authentication host as `backend.base_url`. OAuth lets an editor sign in through GitHub. Editors need repository write access. Never store authentication secrets in this repository.

The contact form uses the visitor's email app. General messages use `contact.email` in `src/content/site.json`; sponsorship inquiries use `contact.sponsorEmail` when supplied.
