# Helsinki Music Map Repo Rules

## Files

- `index.html`: static page shell and visible date text.
- `script.js`: event data plus rendering, map, filters, and interactions.
- `README.md`: project date and maintenance notes.
- `styles.css`: do not edit during ordinary event refreshes.

## Event Object Expectations

Keep the existing schema:

```js
{
  id, title, category, genre, date, start, end, venue, area, address,
  lat, lng, price, priceValue, age, status, artists, note,
  sourceName, sourceUrl, extraSourceUrl
}
```

`extraSourceUrl` is optional. Use stable, URL-safe `id` values. Use `priceValue: 999` for unknown or unlisted prices so those events sort to the end; for sold-out events, keep the actual numeric `priceValue` when a price is known.

## Source Standards

- Prefer official venue, ticket seller, RA, MyHelsinki, or artist/festival pages.
- Aggregators are acceptable when official details are unavailable, but the event note should say what the source confirms.
- Do not invent end times, age restrictions, prices, or lineup details.
- Use wording like `not listed`, `Check venue`, or `Check ticket seller` when public listings do not expose a field.

## Date Rules

- Include events that start on the requested calendar date in Helsinki time.
- Exclude previous-day events that continue after midnight.
- Exclude next-day after-hours unless the event starts on the requested date.

## PR Convention

- Branch: `update-YYYY-MM-DD_day`.
- Commit: `Update map for <weekday> events`.
- PR title: `Update map for <Weekday> <D Month YYYY> events`.
- Open a normal PR, not draft, unless the user says otherwise.
