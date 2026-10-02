# Project architecture

- Keep campaign and service content in `src/data/site.ts` and render it through shared page components, so portfolio listings and detail views remain consistent.
- Use one shared `SiteLayout` for navigation and footer across all routes, so the multi-page editorial experience stays cohesive.
