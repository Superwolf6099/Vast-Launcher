# Vast-Launcher

Vast-Launcher is a local HTML launcher with a file-manager-style library, focused mainly on Eaglercraft but able to launch other HTML-based clients too.

Current feature branch build: `v1.09`

## Branch Comparison

### `bare`
The `bare` branch is the simpler baseline build.

It includes:
- local HTML launcher UI
- folder organization
- basic favorites list
- merge/import basics without a preview step
- core launcher behavior

It does not include:
- library search or filter controls
- sort modes for the home library
- backup export/import tools
- configurable favorites panel slots
- import preview warnings for folder imports
- visible in-app version label
- Playwright browser-test setup

### `More-Features`
The `More-Features` branch is the actively expanded branch.

Compared with `bare`, it adds:
- library search and filters
- folder-based filtering
- sorting by name, last added, last played, and launch count
- import preview with merge warnings before folder imports are committed
- backup export/import in Settings
- expanded favorites panel with quick-launch cards
- configurable favorite slot count in Settings
- visible version label in the launcher header
- runtime HTML title version update
- Playwright browser smoke-test setup for live checks

## Concrete Differences

At a glance:

- `bare` uses a simple home dashboard; `More-Features` adds a filter bar with search, folder filter, favorites-only mode, and sorting.
- `bare` imports folder structures immediately; `More-Features` shows an import preview with warnings for ambiguous JS/WASM merges.
- `bare` has a plain favorites list; `More-Features` has favorite cards plus a configurable slot count.
- `bare` has no backup tools; `More-Features` can export and import launcher backups.
- `bare` has no branch-aware test harness; `More-Features` includes Playwright smoke tests.
- `bare` shows the older static title; `More-Features` shows and tracks the current app version (`v1.09`).

## Branch Update Rule

Going forward, new feature work should be tracked on `More-Features`.

When a new feature is added:
1. bump the in-app version number
2. update this README branch comparison
3. update the `bare` branch README summary if branch roles or shared expectations change

## Notes

- Built to run locally on your computer.
- Running it online may cause bugs.
- Bug reports should include browser and operating system details.
