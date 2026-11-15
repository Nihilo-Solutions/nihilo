#!/usr/bin/env bash
set -euo pipefail
# Stop the background dev server started by scripts/start-dev.sh

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
PID_FILE="$ROOT_DIR/.dev_pid"

if [ ! -f "$PID_FILE" ]; then
  echo "No PID file ($PID_FILE) found. Is the dev server running?" >&2
  exit 1
fi

PID=$(cat "$PID_FILE" 2>/dev/null || true)
if [ -z "$PID" ]; then
  echo "PID file is empty. Removing and exiting." >&2
  rm -f "$PID_FILE"
  exit 1
fi

echo "Stopping dev server PID=$PID"
kill "$PID" 2>/dev/null || true
sleep 1
if kill -0 "$PID" 2>/dev/null; then
  echo "Process still alive, forcing kill" >&2
  kill -9 "$PID" 2>/dev/null || true
fi

rm -f "$PID_FILE"
echo "Stopped and freed port (if process belonged to the dev server)."
