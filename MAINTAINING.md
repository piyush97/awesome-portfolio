# Maintaining Awesome Portfolio

This guide covers the day-to-day maintenance of the [awesome-portfolio](https://github.com/piyush97/awesome-portfolio) repository.

## Tooling

| Concern | Tool | Notes |
|---|---|---|
| Package manager | **Yarn (classic v1)** | `yarn.lock` is the canonical lockfile. Yarn is pinned to v1 semantics — run `yarn set version classic` if Yarn Berry prompts are seen. |
| Runtime | **Node.js 20 LTS** | CI pins `actions/setup-node@v4` with `node-version: 20` and `cache: yarn`. |
| Framework | Vite 5 + React 18 + TypeScript 5 | Build is `tsc && vite build`; output goes to `build/`. |
| Styling | Tailwind CSS v3 + daisyUI v4 | Theme switching in `tailwind.config.js`. |

## CI

`.github/workflows/ci.yml` runs on every push to `main` and on every pull request:

1. `actions/checkout@v4`
2. `actions/setup-node@v4` (Node 20, yarn cache)
3. `yarn install --frozen-lockfile`
4. `yarn build` (`tsc && vite build`)

**Note on `yarn lint`:** `package.json` currently ships a `lint` script (`eslint src --ext ts,tsx --report-unused-disable-directives`) but **eslint is not declared in `devDependencies`** and no ESLint config exists in the repo, so `yarn lint` fails with `eslint: command not found`. CI intentionally runs **build only**. To restore linting, add ESLint as a dev dependency and commit an ESLint config (flat or legacy) — then add a `yarn lint` step to `ci.yml`.

Local CI equivalent:

```bash
yarn install --frozen-lockfile
yarn build
```

## Dependabot

`.github/dependabot.yml` enables two update streams:

| Ecosystem | Schedule | What it manages |
|---|---|---|
| `npm` (Yarn v1 lockfile) | Weekly, Monday 06:00 | All `dependencies` / `devDependencies` from `yarn.lock`; `minor` and `patch` updates are grouped into a single "minor-patch" PR |
| `github-actions` | Weekly | Version bumps for actions used in workflows |

- Up to **5** open dependabot PRs at a time per ecosystem.
- Every dependabot PR is labeled `dependencies`.
- **Review and merge**: check the PR's diff against the current `package.json` range, confirm the `build` check is green, then merge. `minor`/`patch` groups are low risk; major bumps deserve a manual look (especially `vite`, `react`, `typescript`, `tailwindcss`).

## Stale issues & PRs

`.github/workflows/stale.yml` (schedule: Mondays 09:00 UTC) marks:

- Issues inactive **60 days** → labeled `stale` (never auto-closed)
- PRs inactive **30 days** → labeled `stale` (never auto-closed; PRs labeled `dependencies` are exempt)

The workflow **comments and labels only — it never closes anything**. Review `stale`-labeled items and either act or remove the label.

## Release process

There is no formal release cadence — the `main` branch is the release branch and Vercel deploys automatically.

1. Make changes on a feature branch, push, and open a PR against `main`.
2. Wait for the `build` check to go green.
3. Merge with squash (`gh pr merge --squash`).
4. Verify the deploy on [Vercel](https://vercel.com) (preview deploys comment on the PR; production deploys from `main`).

## Verification commands

```bash
# After a merge or dependency update
gh pr view <PR> -R piyush97/awesome-portfolio --json state,mergeCommit
gh api repos/piyush97/awesome-portfolio/commits/main --jq .sha          # == merge commit SHA
gh run list -R piyush97/awesome-portfolio --branch main --limit 3      # CI conclusion == success

# Local sanity check
yarn install --frozen-lockfile && yarn build
```

## Contact

Open an issue for anything this guide doesn't cover.
