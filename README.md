# Expo File System Crash

Issue: If `expo-file-system` is in the middle of a download when the app refreshes then the app crashes. Only happens on iOS when using the `jsc` javascript engine.

## Setup

- `npx create-expo-app --template` -> choose "blank (typescript)".
- Add in `expo-file-system`, `expo-dev-client`, and setup EAS so we can build a dev build.
- Set `"jsEngine":"jsc"` in `app.json
- Build dev build with `npx eas-cli build --profile=simulator --platform=ios`

## Steps

- The dev client is in `simulator-build.tar.gz`.
- Run the app with `yarn start --dev-client`
- Watch console logs for the `'begin'` and `'complete'` logs for when the file is downloading. Before it logs `'complete'`, hit refresh (R button or use the dev menu) and the dev build will crash.
- This only happens on iOS for me (simulator and physical), android seems to do fine.
