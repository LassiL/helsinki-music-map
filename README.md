# Helsinki Music Events Map

Static event map for Helsinki music listings on Saturday 23 May 2026.

Event data was manually compiled from public listings and may become outdated.  
Check the linked source listings before making plans.

## Updating

Event data is manually maintained in `script.js`. Update the event objects and date
labels, then push or merge through the Git branch connected to Vercel so the site
redeploys automatically.

## Codex updater skill

This repo also includes a project-local Codex skill at
`.agents/skills/helsinki-music-map-updater`. To update the map for a new date,
ask Codex to use that skill with a date slug, for example:

```text
Use .agents/skills/helsinki-music-map-updater for 2026-05-29_friday.
```
