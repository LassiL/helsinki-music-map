#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "${repo_root}" ]]; then
  echo "error: not inside a git repository" >&2
  exit 2
fi

cd "${repo_root}"

for file in index.html script.js README.md; do
  if [[ ! -f "${file}" ]]; then
    echo "error: expected ${file} at repository root" >&2
    exit 2
  fi
done

if ! command -v gh >/dev/null 2>&1; then
  echo "error: gh is not installed" >&2
  exit 2
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "error: gh is not authenticated" >&2
  exit 2
fi

echo "repo_root=${repo_root}"
echo "branch=$(git branch --show-current)"
origin_url="$(git remote get-url origin)"
origin_display="${origin_url}"
if [[ "${origin_display}" == *"://"* ]]; then
  origin_display="$(printf '%s\n' "${origin_display}" | sed -E 's#^([[:alpha:]][[:alnum:]+.-]*://)[^/@]+@#\1#')"
fi
echo "origin=${origin_display}"

status="$(git status --porcelain)"
if [[ -n "${status}" ]]; then
  echo "working_tree_status:"
  printf '%s\n' "${status}"
else
  echo "working_tree_status=clean"
fi
