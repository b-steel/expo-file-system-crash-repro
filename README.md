# Expo File System Crash

Issue: If `expo-file-system` is in the middle of a download when the app refreshes then the app crashes.

## Setup

- `npx create-expo-app --template` -> choose "blank (typescript)".
- Add in `expo-file-system`, `expo-dev-client`, and setup EAS so we can build a dev build.
- Install dev build

## Steps

Run the app with `npm run start --dev-client`
Watch console logs for the `'begin'` and `'complete'` logs for when the file is downloading. Before it logs `'complete'`, hit refresh (R button or use the dev menu) and the dev build will crash.

This only happens on iOS for me (simulator and physical), android seems to do fine.

## Why this is relevant

Turning on remote debug also comes with an app refresh so most of the time when I turn on remote debugging my dev build crashes.
