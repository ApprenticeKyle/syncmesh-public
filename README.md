# SyncMesh — Real-Time Inventory Sync for Shopify

SyncMesh is a Shopify embedded app that prevents **overselling** during flash sales and high-concurrency events by synchronizing inventory across multiple Shopify stores sharing the same warehouse in real time.

## The Problem

Running multiple Shopify stores with a shared physical warehouse? Each store tracks inventory independently. During a flash sale or limited drop, multiple stores can sell the same last unit before any sync catches up. Result: cancelled orders, angry customers, and lost revenue.

## How SyncMesh Solves It

- **Event-driven real-time sync** — not polling-based. When one store sells, all other stores reflect the change in milliseconds.
- **Idempotent sync ledger** — every inventory change is tracked and auditable, preventing double-counting or phantom inventory.
- **Pool SKU system** — link products across stores to a shared Pool SKU, ensuring consistent inventory everywhere.
- **Multi-location support** — manage inventory per warehouse location (Pro/Max plans).
- **Auto-Link by SKU** — automatically scan and link products across stores by matching SKUs.
- **Alert system** — configurable low-stock, stockout, and sync-failure alerts via in-app, email, or webhook.

## Tech Stack

- **Backend:** Go, PostgreSQL, Redis Streams, Shopify GraphQL API
- **Frontend:** React, TypeScript, Shopify Polaris, Vite
- **Infrastructure:** Google Cloud Run, Cloud SQL, Grafana Cloud, Sentry

## Documentation

- [User Manual](docs/user-manual.md) — Full usage guide covering installation, dashboard, inventory workbench, multi-store pairing, alerts, and FAQ.

## Plans & Pricing

| Tier | Price | Stores | SKUs | Retention |
|---|---|---|---|---|
| Starter | $19.99/mo | 2 | 1,000 | 7 days |
| Pro | $49.99/mo | 5 | 10,000 | 30 days |
| Max | $129.99/mo | Unlimited | Unlimited | 365 days |

All plans include a 14-day free trial. No credit card required to start.

## Install

SyncMesh is available on the Shopify App Store (coming soon).

For early access or beta inquiries, contact us or visit [r2remote.dev](https://www.r2remote.dev).

## Privacy & Security

- All Shopify access tokens are encrypted at rest (AES-256-GCM)
- Data stored on Google Cloud Platform (us-central1)
- GDPR compliant — automatic data deletion on app uninstall
- See [privacy.html](https://www.r2remote.dev/privacy) for full privacy policy

## License

Proprietary. All rights reserved.
