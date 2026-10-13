# ALM6 Interview Simulator MVP

A static, source-linked practice application for **Applied SAP SuccessFactors Learning (ALM6)**.

## Entry point

- App: [`apps/alm6-interview-simulator/index.html`](./index.html)
- Scenario manifest: [ALM6-440-SCENARIO-MANIFEST.md](../../learning/interview-preparation/ALM6/ALM6-440-SCENARIO-MANIFEST.md)
- Product blueprint: [ALM6-INTERVIEW-SIMULATOR-BLUEPRINT.md](../../learning/interview-preparation/ALM6/ALM6-INTERVIEW-SIMULATOR-BLUEPRINT.md)
- Source scenario bank: [`learning/interview-preparation/ALM6/scale-lab/`](../../learning/interview-preparation/ALM6/scale-lab/)

## MVP capabilities

- Select any of the 22 ALM6 themes.
- Start theme practice, mock interview, or random challenge sessions.
- Load the selected theme's Markdown source from the repository's raw GitHub content endpoint.
- Capture a response in Situation, Task, Action, and Result fields.
- Reveal the SME probe and compare against the source-grounded model answer.
- Self-score eight interview reasoning dimensions on a 0–4 coaching rubric.
- Save drafts and self-review locally in the current browser.
- Export the current scenario's practice notes as a text file.
- Open the original theme file for source verification.

## Run locally

Open `index.html` in a modern browser while connected to the internet. The application fetches theme content from GitHub, so source loading requires network access. If browser file restrictions prevent loading, serve this folder with any static HTTP server or use the GitHub Pages deployment option below.

## Deploy with GitHub Pages

1. In the repository settings, open **Pages**.
2. Select the branch used for the repository and the root folder as the publishing source.
3. Because the application is in a subfolder, either publish the repository root and use the app path, or copy the file to the selected publishing root as a deliberate release step.
4. Open the resulting Pages URL and verify theme loading, mobile layout, source links, browser-local save, and text export.

No backend, API key, or server-side database is required for this MVP. Do not enter confidential client or employer information into practice answers on a shared device.

## Important prototype limitations

- Scenario parsing is performed in the browser from Markdown headings and labels. Always use the source link to verify the exact source content if a field appears incomplete.
- The app is not yet an authenticated multi-user service. Drafts and scores remain in local browser storage and do not synchronise between devices.
- The rubric is a coaching aid, not a validated predictor of interview or hiring success.
- No AI evaluation, audio recording, transcription, or automated hiring recommendation is implemented.
- Product capability, licensing, interface, and tenant-specific claims must be verified before being reused in a live interview or implementation.

## Release acceptance checklist

- [ ] Load and inspect all 22 themes.
- [ ] Confirm 20 questions are detected in every theme file.
- [ ] Compare parsed questions, STAR fields, examples, and SME probes against source Markdown.
- [ ] Test theme, mock, and random modes; ensure session question counts are respected.
- [ ] Test draft save, refresh persistence, self-scoring, and export.
- [ ] Test keyboard navigation, screen-reader labels, mobile layout, and contrast.
- [ ] Confirm source content is served over HTTPS and errors are communicated clearly.
- [ ] Complete SME, privacy, accessibility, and source-reconciliation review before wider release.
