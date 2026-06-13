<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route analytics traffic through `/ingest`. Two client-side events are now tracked across the key user interaction points: the "Explore Events" CTA and each event card click. Environment variables are stored in `.env.local` and never hardcoded in source files.

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" call-to-action button on the homepage | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card; captures `event_title`, `event_slug`, and `event_location` | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/468175/dashboard/1707075)
- [Explore Events button clicks over time](https://us.posthog.com/project/468175/insights/uhLGgZRh)
- [Event card clicks over time](https://us.posthog.com/project/468175/insights/3JRiZPW2)
- [Unique users exploring events (BoldNumber)](https://us.posthog.com/project/468175/insights/5CSx1iO9)
- [Explore → Event card click funnel](https://us.posthog.com/project/468175/insights/L7G3ACau)
- [Event card clicks by location (bar chart)](https://us.posthog.com/project/468175/insights/RF2F7qen)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
