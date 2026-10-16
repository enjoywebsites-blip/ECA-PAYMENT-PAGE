# ENJOY CREATOR ACADEMY — AI Video Creation Master Course

A responsive static landing page built with HTML, CSS, and vanilla JavaScript. No backend or frontend framework is required for this version.

## Files
- `index.html` — page content, SEO metadata, schema, navigation, syllabus, FAQ, and payment links.
- `styles.css` — responsive black-and-white visual system.
- `script.js` — mobile navigation, accessible FAQ behavior, and restrained reveal effects.
- `assets/eca-logo.png` — supplied academy logo.
- `assets/ai-video-course-cover.png` — supplied course cover.
- `policies/` — clearly marked draft policy pages. Review and approve before publishing.

## Run locally
Open the folder in VS Code and use Live Server, or run a local static server from this folder, for example:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

## Deploy
Upload the entire project folder contents to a static host such as Netlify, Vercel, or GitHub Pages. All project files, including both images and policy pages, are placed directly in this single folder. Upload all files together into the same hosting directory. Do not create or rely on subfolders. Configure the final custom domain and HTTPS in the hosting provider dashboard. Do not publish a canonical URL until the final domain is confirmed.

For Netlify, the included `netlify.toml` configures selected security headers. For other hosts, configure equivalent headers in the host's dashboard/configuration. Verify them after deployment.

## Payment and access
All purchase CTAs use the exact supplied Razorpay URL: `https://rzp.io/rzp/eca-ai`. Razorpay handles payment details; this website does not collect card or banking credentials and does not claim that a click means payment succeeded. Course access instructions are intentionally not automated or invented.

## Updating the website later
- To replace the homepage design/content, edit `index.html`.
- To change colours, spacing, layout, mobile responsiveness, or animations, edit `styles.css`.
- To change mobile navigation, FAQ behavior, or scroll effects, edit `script.js`.
- To replace the logo, overwrite `eca-logo.png` with the same filename.
- To replace the course cover, overwrite `ai-video-course-cover.png` with the same filename.
- Keep the image filenames unchanged unless you also update the image paths in `index.html`.

## Before publishing
1. Confirm the Razorpay link is active and points to the correct ₹999 offer.
2. Review and approve all draft policy pages; replace placeholders and remove draft notices only after approval.
3. Confirm the WhatsApp number and course access process.
4. Add the real canonical domain, sitemap, and final social-sharing image metadata.
5. Test all links and the layout on current Android/iOS browsers and desktop browsers.
6. Run Lighthouse and fix any issues it identifies; no score is claimed here.
7. Verify HTTPS, redirects, and response headers on the deployed domain.
8. If adding analytics, use an approved provider and configure it according to applicable privacy requirements.
9. Re-check the page whenever the price, syllabus, or payment flow changes.

## Security notes
- No secrets or payment credentials are present in frontend files.
- A Content Security Policy and security headers are provided in `netlify.toml`; review host-specific requirements and test Razorpay navigation before enforcing a stricter policy.
- Static frontend pages cannot securely verify payments by themselves. If payment verification or automatic access is added later, implement server-side verification using official Razorpay APIs/signatures and keep all secrets server-side.
- Policy drafts are not legal advice and must be reviewed by the academy owner/legal adviser before publication.


## Important: keep the images with the website
The supplied logo and course cover are already included in the ZIP under `assets/`:
- `assets/eca-logo.png`
- `assets/ai-video-course-cover.png`

Extract the **entire ZIP** and upload the complete folder contents (including the `assets` folder). Do not upload only `index.html`, and do not rename or move the image files unless you also update the paths in `index.html`. The page uses relative paths, so the images will load together when deployed as one site.
