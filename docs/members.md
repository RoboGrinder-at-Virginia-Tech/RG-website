# Members roster

Edit `src/content/members.json` or the CMS Members collection. `rosterYear` identifies the featured roster; `people` contains its members. `seasons` contains previous recorded rosters. `alumni` holds earlier names without inferred year assignments. The display order is president, vice president, branch leads and technical advisors, project leads, members, then faculty advisors. Other members are alphabetized by displayed first name. Past presidents appear by term year, newest first. Majors use full names without abbreviations. Archived lists display roles without majors; majors remain stored in the data. The 2026-2027 roster combines retained 2025-2026 members with accepted Fall 2026 members and the requested leadership updates.

The featured season is 2025-2026, followed by the recorded 2024-2025 roster and undated alumni. Leadership roles, supplied subteams, and degree abbreviations are retained. See [roster-records.md](roster-records.md) for the compiled lists and unresolved name variants.

Each featured member has a profile at `/members/<name>/`, linked from their photo and name. Cards show the role when supplied, otherwise the subteam, using the same font size and weight, followed by expected graduation when supplied. Profiles display major, expected graduation, subteam, leadership role when supplied, and supplied social/contact links. Social links use the site's standard buttons with visible platform names.

Photos and `linkedin`, `github`, `portfolio`, and `email` are optional. Blank photos render the RoboGrinder logo. Profile icons appear only when their URLs are supplied. Mobile cards remain two per row. Add the optional four-digit `graduationYear` (for example, `2028`) and `graduationTerm` (Spring, Summer, Fall, or Winter) in `src/content/members.json` or the CMS Expected graduation fields. Cards and profiles display Spring 2028 when both are supplied, or Class of 2028 with only a year. Missing majors and graduation years show Not provided yet on profiles; graduation years are never inferred from the roster year.

Subteams and associated role titles use Mechanical, Electrical, Embedded, Software, and Operations across the featured roster, archives, alumni, and homepage. Archived source records in `roster-records.md` retain the original supplied names.

The desktop header has About Us and Connect dropdowns and a season-dependent primary button. The mobile menu lists destinations directly, with one Join Us action and one Sponsor Us action. Navigation uses Our Subteams and Our Robots on every screen size. Member profiles center portraits on mobile and show leadership roles immediately below the member name; All Members uses the standard button style.

Footer social destinations live in `src/content/site.json` under `links.social`, or in the CMS Social links list. A blank URL leaves that platform's borderless icon disabled until a destination is supplied.
