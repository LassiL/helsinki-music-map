#!/usr/bin/env python3
import argparse
import datetime as dt
import json
import re
import sys

WEEKDAYS = {
    "monday": 0,
    "tuesday": 1,
    "wednesday": 2,
    "thursday": 3,
    "friday": 4,
    "saturday": 5,
    "sunday": 6,
}


def parse_slug(raw):
    match = re.fullmatch(r"(\d{4})[-_](\d{2})[-_](\d{2})[-_]([a-zA-Z]+)", raw.strip())
    if not match:
        raise ValueError("Use a date slug like 2026-05-29_friday.")

    year, month, day, weekday = match.groups()
    weekday = weekday.lower()
    if weekday not in WEEKDAYS:
        raise ValueError(f"Unknown weekday '{weekday}'.")

    date = dt.date(int(year), int(month), int(day))
    actual_weekday = date.weekday()
    if WEEKDAYS[weekday] != actual_weekday:
        actual = date.strftime("%A").lower()
        raise ValueError(f"Weekday mismatch: {date.isoformat()} is {actual}, not {weekday}.")

    canonical_slug = f"{date.isoformat()}_{weekday}"
    display_date = f"{date.strftime('%A')}, {date.day} {date.strftime('%B')} {date.year}"
    compact_display_date = f"{date.strftime('%A')} {date.day} {date.strftime('%B')} {date.year}"

    return {
        "input": raw,
        "date": date.isoformat(),
        "weekday": weekday,
        "canonical_slug": canonical_slug,
        "branch": f"update-{canonical_slug}",
        "display_date": display_date,
        "compact_display_date": compact_display_date,
        "commit_message": f"Update map for {weekday} events",
        "pr_title": f"Update map for {date.strftime('%A')} {date.day} {date.strftime('%B')} {date.year} events",
    }


def main():
    parser = argparse.ArgumentParser(description="Parse a Helsinki music map update date slug.")
    parser.add_argument("slug", help="Date slug, e.g. 2026-05-29_friday")
    parser.add_argument("--field", help="Print only one JSON field")
    args = parser.parse_args()

    try:
        data = parse_slug(args.slug)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    if args.field:
        if args.field not in data:
            print(f"error: unknown field '{args.field}'", file=sys.stderr)
            return 2
        print(data[args.field])
    else:
        print(json.dumps(data, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
