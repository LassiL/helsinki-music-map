---
name: helsinki-music-map-updater
description: Update this repository's Helsinki Music Events Map for a requested date slug such as 2026-05-29_friday. Use when Codex should research verified Helsinki music events, update the static map files, create an update-YYYY-MM-DD_day branch, commit the date update, push it, and open a GitHub pull request without modifying unrelated application code.
---

# Helsinki Music Map Updater

Use this skill from the `helsinki-music-map` repository root when the user asks to update the map for a new date and open a PR. The user normally supplies one date slug, for example `2026-05-29_friday`.

## Quick Start

1. Parse and validate the date slug:
   ```bash
   python3 .agents/skills/helsinki-music-map-updater/scripts/parse_date_slug.py 2026-05-29_friday
   ```
2. Read `.agents/skills/helsinki-music-map-updater/references/repo-rules.md`.
3. Run the repo state check:
   ```bash
   bash .agents/skills/helsinki-music-map-updater/scripts/check_repo_state.sh
   ```
4. Create the update branch from current `origin/main`: `update-YYYY-MM-DD_day`.
5. Research, update, validate, commit, push, and open the PR.

## Workflow

### 1. Prepare Branch

- Require a validated canonical slug from `parse_date_slug.py`.
- Fetch current main, switch to `main`, fast-forward pull, then create `update-YYYY-MM-DD_day` from `origin/main`.
- If the branch already exists locally or remotely, stop and ask before reusing it.
- Never stage unrelated files. Existing unrelated files, including untracked files, must remain untouched unless the user explicitly asks.

### 2. Research Events

- Use web research because event listings are date-sensitive.
- Target 10-18 verified Helsinki music events that start on the requested calendar date.
- Prefer official venues, ticket sellers, RA, event calendars, and reliable aggregators. Use at least one source URL per event.
- Include only music events with a clear date, venue, and act/DJ/artist. Missing time or price is allowed only when the note explicitly says it was not listed.
- Do not include previous-night spillover or next-day after-hours unless the event itself starts on the requested date.

### 3. Update Files

- Update only `index.html`, `README.md`, and `script.js` for ordinary event refreshes.
- Preserve the existing event object schema, UI behavior, filters, and visual design.
- In `index.html`, update title, meta description, and H1 date.
- In `README.md`, update the listing date while preserving maintenance notes.
- In `script.js`, replace the `events` array with the new event list and adjust `mapBounds` only if needed for fallback marker coverage.

### 4. Validate

Run:
```bash
node --check script.js
```

Then run a local static server and browser-check:

- Header date matches the requested date.
- Event card count equals marker count.
- A marker click updates the detail panel.
- A list card click updates the detail panel.
- Search works.
- Main genre filters work for the genres present.
- Browser console has no errors.

Confirm before committing:
```bash
git diff --name-only
git status --short --branch
```

Only the intended files should be modified.

### 5. Commit, Push, PR

- Stage only intended files.
- Commit message: `Update map for <weekday> events`.
- Push with upstream tracking:
  ```bash
  git push -u origin update-YYYY-MM-DD_day
  ```
- Generate the PR body and save it to a file:
  ```bash
  python3 .agents/skills/helsinki-music-map-updater/scripts/summarize_update.py 2026-05-29_friday --output-file /tmp/update-pr-body.md
  ```
- Create a normal PR:
  ```bash
  gh pr create --base main --head update-YYYY-MM-DD_day --title "Update map for <Weekday> <D Month YYYY> events" --body-file /tmp/update-pr-body.md
  ```

Final response must include branch, commit, PR URL, event count, validation performed, and any fields that remained intentionally marked as unknown.
