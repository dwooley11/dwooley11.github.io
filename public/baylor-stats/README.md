# Baylor Stats

Personal Baylor sports stats site. Static files only — runs on GitHub Pages.

```
index.html               Baylor Stats home (Basketball, Football)
basketball/index.html    Baylor Basketball: box score, game flow, shot charts, tonight vs. usual,
                         points per possession by KenPom tier, every season since 2019-20
football/index.html      Baylor Football: score by quarter, team box, offense/defense strips vs. season, QB pass chart,
                         Baylor player box, play types, success rate by down/distance/field position (2019 on)
data/cfb.json            Football seasons + games since 2019
data/cfb/<id>.json       One file per football game (box score, drives, every play)
scripts/build_cfb.py     Builds the football data
data/mbb.json            Every season since 2019-20: game totals, KenPom ranks, prior-season team stats
data/games/<id>.json     One file per game for the game card (loaded when opened)
scripts/build_mbb.py     Builds everything in data/ (past seasons cached, current season refreshed)
scripts/wnmatch.py       Reads Warren Nolan's Ranking Comparison page; matches ESPN team names
```

## Data sources
- **ESPN** public site API (box score, play-by-play, team season stats). It allows browser requests,
  so the page's **Refresh** button pulls live data straight from ESPN.
- **KenPom ranks** via Warren Nolan's Ranking Comparison page (POM column). A browser can't read that
  page directly, so the Action saves the ranks into `data/mbb.json`. Early in a season Warren Nolan
  still shows last season's final ranks; the page says so and switches on its own when they update.

## How it runs here
- Lives in `public/baylor-stats/` of the dwooley11.github.io repo; Vite copies it to https://dwooley11.github.io/baylor-stats/ on every deploy.
- `.github/workflows/update-baylor-stats.yml` (repo root) runs hourly Aug–Apr, rebuilds `data/`, commits changes and redeploys.
- Needs Settings → Actions → General → Workflow permissions → **Read and write**.

## Each offseason

## Formulas
Possessions = FGA − OREB + TO + 0.475 × FTA (ESPN team totals). Points per possession = points ÷ possessions.
