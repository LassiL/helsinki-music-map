#!/usr/bin/env python3
import argparse
import pathlib
import re
import subprocess
import sys

from parse_date_slug import parse_slug


def count_events(script_text):
    events_match = re.search(r"const events = \[(.*?)]\;\n\nconst mapBounds", script_text, re.S)
    if not events_match:
        return None
    return len(re.findall(r'^\s+id: "', events_match.group(1), flags=re.M))


def count_sources(script_text):
    return len(set(re.findall(r'sourceName: "([^"]+)"', script_text)))


def find_repo_root():
    try:
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            check=True,
            capture_output=True,
            text=True,
        )
        root = pathlib.Path(result.stdout.strip())
        if is_repo_root(root):
            return root
    except Exception:
        pass

    root = pathlib.Path(__file__).resolve().parents[4]
    if is_repo_root(root):
        return root

    raise RuntimeError("could not resolve repository root containing index.html, script.js, and README.md")


def is_repo_root(path):
    return all((path / name).exists() for name in ["index.html", "script.js", "README.md"])


def build_body(meta, event_count, source_count, validation):
    lines = [
        f"Updates the Helsinki music event map for {meta['compact_display_date']}.",
        "",
        "Changes:",
        "- Updates page title, meta description, and visible date labels.",
    ]

    if event_count is None:
        lines.append("- Replaces event data in script.js.")
    else:
        lines.append(f"- Replaces event data in script.js with {event_count} verified event listings.")

    if source_count:
        lines.append(f"- Includes source links across {source_count} source groups.")

    lines.extend(
        [
            "- Keeps the static app structure and existing map/list UI behavior.",
            "",
            "Validation:",
        ]
    )
    lines.extend(f"- {item}" for item in validation)
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="Create a PR body for a Helsinki map date update.")
    parser.add_argument("slug", help="Date slug, e.g. 2026-05-29_friday")
    parser.add_argument(
        "--validation",
        action="append",
        default=[],
        help="Validation line to include. Can be repeated.",
    )
    parser.add_argument("--output-file", help="Write the generated PR body to this file")
    args = parser.parse_args()

    try:
        meta = parse_slug(args.slug)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    try:
        root = find_repo_root()
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    script_path = root / "script.js"
    script_text = script_path.read_text(encoding="utf-8")
    event_count = count_events(script_text)
    source_count = count_sources(script_text)
    validation = args.validation or [
        "node --check script.js",
        "Local browser render and interaction check",
    ]

    body = build_body(meta, event_count, source_count, validation)
    if args.output_file:
        pathlib.Path(args.output_file).expanduser().write_text(body, encoding="utf-8")
    else:
        print(body, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
