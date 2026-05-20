#!/usr/bin/env python3
import argparse
import pathlib
import re
import sys

from parse_date_slug import parse_slug


def count_events(script_text):
    events_match = re.search(r"const events = \[(.*?)]\;\n\nconst mapBounds", script_text, re.S)
    if not events_match:
        return None
    return len(re.findall(r'^\s+id: "', events_match.group(1), flags=re.M))


def count_sources(script_text):
    return len(set(re.findall(r'sourceName: "([^"]+)"', script_text)))


def main():
    parser = argparse.ArgumentParser(description="Create a PR body for a Helsinki map date update.")
    parser.add_argument("slug", help="Date slug, e.g. 2026-05-29_friday")
    parser.add_argument(
        "--validation",
        action="append",
        default=[],
        help="Validation line to include. Can be repeated.",
    )
    args = parser.parse_args()

    try:
        meta = parse_slug(args.slug)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    root = pathlib.Path.cwd()
    script_path = root / "script.js"
    if not script_path.exists():
        print("error: script.js not found in current directory", file=sys.stderr)
        return 2

    script_text = script_path.read_text(encoding="utf-8")
    event_count = count_events(script_text)
    source_count = count_sources(script_text)
    validation = args.validation or [
        "node --check script.js",
        "Local browser render and interaction check",
    ]

    print(f"Updates the Helsinki music event map for {meta['compact_display_date']}.")
    print()
    print("Changes:")
    print("- Updates page title, meta description, and visible date labels.")
    if event_count is None:
        print("- Replaces event data in script.js.")
    else:
        print(f"- Replaces event data in script.js with {event_count} verified event listings.")
    if source_count:
        print(f"- Includes source links across {source_count} source groups.")
    print("- Keeps the static app structure and existing map/list UI behavior.")
    print()
    print("Validation:")
    for item in validation:
        print(f"- {item}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
