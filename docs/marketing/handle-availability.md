# Social handle availability — checked 2026-09-06

> Checked by fetching each URL directly. Nothing was created and no account was logged into.

| Platform | Handle | Status | Evidence |
| --- | --- | --- | --- |
| Instagram | @freewebsiteco | **taken** | curl with crawler UAs (facebookexternalhit, Googlebot) returned HTTP 200 with og:title 'The Free Website Company (@freewebsiteco) • Instagram photos a |
| Instagram | @thefreewebsiteco | **unverified** | Desktop-UA curl: HTTP 200, generic title 'Instagram', JS shell, no og tags, no 'page isn't available' text. Differential test with crawler UAs: existi |
| Facebook (page URL) | @freewebsiteco | **free** | curl with browser Accept headers: HTTP 200, title 'Facebook', no og:title, body contains 'This content isn't available right now' (x2). Controls: face |
| Facebook (page URL) | @thefreewebsiteco | **free** | Same result as freewebsiteco: HTTP 200, title 'Facebook', no og:title, body contains 'This content isn't available right now' (x2), matching the rando |
| X/Twitter | @freewebsiteco | **free** | curl: HTTP 404, title and og:title 'User Profile Not Found - X / 404 Error'. Controls: x.com/nasa returned 200; a random nonexistent handle returned t |
| X/Twitter | @thefreewebsiteco | **free** | curl: HTTP 404, title and og:title 'User Profile Not Found - X / 404 Error' (same page as the random-nonexistent control; nasa control returned 200).  |
| YouTube (@handle) | @freewebsiteco | **free** | curl: HTTP 404, title '404 Not Found', 755-byte error page. Control youtube.com/@youtube returned 200 'YouTube - YouTube'. Existing-channel comparison |
| YouTube (@handle) | @thefreewebsiteco | **taken** | curl: HTTP 200, title 'TheFreeWebsiteCo - YouTube', canonical handle @TheFreeWebsiteCo (handles are case-insensitive), channel ID UCvkjtR8idR5MbR_PpOK |
| TikTok | @freewebsiteco | **free** | curl: HTTP 200 (TikTok returns 200 for every profile URL), but the embedded page JSON has "statusCode":10221 and the body contains 'Couldn't find this |
| TikTok | @thefreewebsiteco | **free** | Same as freewebsiteco: HTTP 200 shell, embedded "statusCode":10221, body text 'Couldn't find this account', versus "statusCode":0 and a uniqueId on th |
| LinkedIn (company page slug) | @freewebsiteco | **free** | curl: HTTP 404, body h1 'Page not found' ('Uh oh, we can't seem to find the page you're looking for'). Controls: linkedin.com/company/microsoft return |
| LinkedIn (company page slug) | @thefreewebsiteco | **free** | curl: HTTP 404 with the 'Page not found' body, identical to the random-nonexistent-slug control and unlike the Microsoft control (200). WebFetch cross |
| Nextdoor business | @freewebsiteco | **free** | curl: HTTP 404, title "We're Sorry: 404 — Page Not Found — Nextdoor". Also 404: /pages/free-website-co/, /pages/the-free-website-co/, /pages/free-webs |
| Nextdoor business | @thefreewebsiteco | **free** | curl: HTTP 404, title "We're Sorry: 404 — Page Not Found — Nextdoor"; /thefreewebsiteco also 404. Same auto-generated-slug caveat: Nextdoor assigns th |

## Method and how to confirm the unverified ones

METHOD. Every URL was fetched with curl (desktop Chrome UA, redirects followed, final status + title + body markers captured), and each platform was validated against a known-existing account and, where useful, a random nonexistent handle, so a 'free' verdict rests on the platform returning a different response for real accounts. WebFetch/WebSearch cross-checks were run where the platform allows them (LinkedIn confirmed; Instagram confirmed the taken profile; X blocks WebFetch with 402; TikTok and Facebook return a generic shell to WebFetch). No accounts were created and nothing was logged into.

SUMMARY. 'freewebsiteco' is free on X, YouTube, TikTok, LinkedIn, Facebook and Nextdoor, but TAKEN on Instagram. 'thefreewebsiteco' is TAKEN on YouTube (@TheFreeWebsiteCo, case-insensitive), free on X, TikTok, LinkedIn, Facebook and Nextdoor, and unverified (very likely free) on Instagram. Neither handle is clean across all seven platforms. No alternate handles were checked.

IMPORTANT CONTEXT ON THE INSTAGRAM OWNER. The Instagram account @freewebsiteco ('The Free Website Company', 16 followers, 1 post) belongs to the business that ran freewebsiteco.com before Tyler. Wayback captures show that site live from mid-2024 through Aug 2025 with the title 'The Free Website Company | #1 Web design and development company', located in Madhapur, Hyderabad, India (hello@freewebsiteco.com, +91 970 5030 977), and linking to instagram.com/freewebsiteco. By Oct 2025 the domain had lapsed to a parking redirect, and Tyler's site is live there now. Two practical consequences: (1) that Instagram bio link now sends its visitors to Tyler's site, and its post copy ('made by humans for humans') contradicts Tyler's AI-assisted positioning, so anyone who finds it will assume it is Tyler's; (2) search engines still index freewebsiteco.com with the old Hyderabad title and description, which will refresh as the new site is crawled. Whether to contact that account holder, or whether the name overlap matters legally, is Tyler's call; nothing about trademark status was checked.

FASTEST MANUAL CONFIRMATION FOR THE UNVERIFIED ROW (and for double-checking any 'free' row before relying on it):
- Instagram @thefreewebsiteco: while logged into the Instagram app, go to Edit profile > Username and type it; Instagram says immediately whether it is available. Alternatively open instagram.com/thefreewebsiteco/ while logged in; a nonexistent account shows 'Sorry, this page isn't available.'
- Facebook: while logged in, open facebook.com/freewebsiteco (nonexistent pages show 'This page isn't available'), or after creating the Page use Settings > Username, which validates live.
- X: Settings > Your account > Account information > Username; type the name and X shows 'Available' or an error.
- YouTube @freewebsiteco: YouTube Studio > Customization > Basic info > Handle; validates live.
- TikTok: Profile > Edit profile > Username; validates live.
- LinkedIn: linkedin.com/company/setup/new; the 'LinkedIn public URL' field validates the slug live.
- Nextdoor: business.nextdoor.com > claim or create the business page; the URL is generated automatically from name + city + state, so there is nothing to reserve by hand.

CAVEATS BAKED INTO THE 'FREE' VERDICTS. X holds usernames of deactivated accounts for about 30 days and reserves some names. Facebook shows 'This content isn't available right now' to logged-out visitors for unpublished/restricted pages as well as nonexistent ones. LinkedIn's bot handling is inconsistent, though here it returned the explicit 'Page not found' page. None of these change the verdicts, but the manual checks above are the last word before committing to a handle.
