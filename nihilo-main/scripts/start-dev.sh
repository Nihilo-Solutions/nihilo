#!/usr/bin/env bash
set -euo pipefail
# Start the dev server in background and record the PID so it can be stopped cleanly.

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
PID_FILE="$ROOT_DIR/.dev_pid"
LOG_FILE="$ROOT_DIR/dev3001.log"

if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE" 2>/dev/null || true)
  if [ -n "$OLD_PID" ] && kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Dev server already running (PID=$OLD_PID). Stop it first: npm run dev:stop" >&2
    exit 1
  else
    rm -f "$PID_FILE"
  fi
fi

echo "Starting Vite dev server on port 3001 (background). Logs: $LOG_FILE"
# Use npm to run the dev script so behavior matches user's preference
nohup npm run dev -- --port 3001 --host 127.0.0.1 > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
echo "Started (PID=$(cat $PID_FILE))"
