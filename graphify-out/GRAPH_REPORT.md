# Graph Report - Dancesoul-therapy  (2026-08-31)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 143 nodes · 209 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `64226c30`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9

## God Nodes (most connected - your core abstractions)
1. `wa()` - 27 edges
2. `compilerOptions` - 16 edges
3. `SITE_URL` - 5 edges
4. `scripts` - 5 edges
5. `INSTAGRAM` - 5 edges
6. `include` - 5 edges
7. `getPost()` - 4 edges
8. `lib` - 4 edges
9. `posts` - 4 edges
10. `PostPage()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Booking()` --calls--> `wa()`  [EXTRACTED]
  app/booking/page.tsx → lib/site.ts
- `Contact()` --calls--> `wa()`  [EXTRACTED]
  app/contact/page.tsx → lib/site.ts
- `Experiences()` --calls--> `wa()`  [EXTRACTED]
  app/experiences/page.tsx → lib/site.ts
- `Gallery()` --calls--> `wa()`  [EXTRACTED]
  app/gallery/page.tsx → lib/site.ts
- `RootLayout()` --calls--> `wa()`  [EXTRACTED]
  app/layout.tsx → lib/site.ts

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (19): About(), metadata, principles, Corporate(), formats, metadata, Home(), arc (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.16
Nodes (17): Booking(), metadata, Experiences(), metadata, bookingOptions, bookingSteps, CAL_LINK, experiences (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (7): metadata, generateMetadata(), PostPage(), getPost(), Post, posts, SITE_URL

### Community 4 - "Community 4"
Cohesion: 0.19
Nodes (11): metadata, orgSchema, RootLayout(), explore, Footer(), Header(), RevealInit(), RiseMark() (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (15): next, dependencies, next, react, react-dom, name, private, scripts (+7 more)

### Community 6 - "Community 6"
Cohesion: 0.17
Nodes (10): channels, Contact(), metadata, Gallery(), metadata, TODO: replace tiles with the commissioned brand shoot (real movement, golden…, tiles, faqs (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (9): devDependencies, @types/node, @types/react, @types/react-dom, typescript, @types/node, @types/react, @types/react-dom (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

## Knowledge Gaps
- **59 isolated node(s):** `Post`, `metadata`, `principles`, `formats`, `metadata` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 66 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `wa()` connect `Community 0` to `Community 1`, `Community 3`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 2` to `Community 8`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 7` to `Community 5`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `Post`, `metadata`, `principles` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._