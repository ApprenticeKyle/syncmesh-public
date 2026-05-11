<div align="center">

# ⚡ SyncMesh

### Real-Time Inventory Sync for Shopify — Never Oversell Again

[![Go](https://img.shields.io/badge/Go-1.25+-00ADD8?style=flat&logo=go)](https://go.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev)
[![Shopify](https://img.shields.io/badge/Shopify-Embedded_App-96BF48?style=flat&logo=shopify)](https://shopify.dev)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)](LICENSE)

**[🌐 Full Landing Page & Interactive Demo →](https://apprenticekyle.github.io/syncmesh-public)**

</div>

---

## 🚀 We're Looking for Beta Testers

SyncMesh is accepting beta users — get **free Pro access ($49.99/mo value)** in exchange for feedback. No credit card required.

**[→ Apply for Beta Access](https://github.com/ApprenticeKyle/syncmesh-public/issues/new?template=beta-application.yml)**

---

## 🎯 The Problem

Two Shopify stores, one warehouse, limited stock. A flash sale hits. Store A sells the last unit at 12:00:03. Store B still shows it in stock at 12:00:07 — a second customer buys. One item, two orders.

Most sync tools **poll** every 5–15 minutes. In a flash sale, that might as well be forever.

## ⚡ How SyncMesh Is Different

SyncMesh uses **event-driven real-time sync** via Redis Streams. When a sale happens in one store, inventory updates propagate to all connected stores in **milliseconds**, not minutes.

| | Traditional Sync | SyncMesh |
|---|---|---|
| Mechanism | Polling (5–15 min) | Event-driven (sub-second) |
| Overselling during spikes | Inevitable | Prevented |
| Multi-location | Often broken | First-class support |
| Audit trail | Limited | Full idempotent ledger |

## ✨ Features

- **⚡ Event-Driven Real-Time Sync** — Inventory changes propagate in milliseconds via Redis Streams
- **🔗 Pool SKU System** — Link products across stores to a shared pool identifier
- **🤖 Auto-Link by SKU** — One-click scan to automatically match and link products across stores
- **📊 Full Audit Ledger** — Every inventory change tracked with idempotency guarantees
- **📍 Multi-Location** — Per-warehouse inventory tracking with location-level sync (Pro/Max)
- **🔔 Smart Alerts** — Low stock, stockout, and sync-failure alerts via in-app, email, or webhook
- **👥 Multi-Store Pairing** — 6-character pairing codes to connect stores in seconds
- **🔐 Encrypted at Rest** — Shopify access tokens stored with AES-256-GCM

## 🎮 Interactive Demo

Try SyncMesh right now — no Shopify store required.

**[→ Launch Interactive Demo](https://apprenticekyle.github.io/syncmesh-public/demo/index.html)**

Walk through the Dashboard, browse the Inventory Workbench, link products to a Pool SKU, run Auto-Link, and configure alert rules — all with realistic mock data.

## 💰 Plans & Pricing

| | Starter | Pro | Max |
|---|---|---|---|
| **Price** | $19.99/mo | $49.99/mo | $129.99/mo |
| **Stores** | 2 | 5 | Unlimited |
| **SKUs** | 1,000 | 10,000 | Unlimited |
| **Locations** | 1 | Multiple | Multiple |
| **Log Retention** | 7 days | 30 days | 365 days |
| **Free Trial** | 14 days | 14 days | 14 days |

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Go, Redis Streams, pgx |
| Frontend | React 18, TypeScript, Shopify Polaris, Vite |
| Database | PostgreSQL (Cloud SQL) |
| Queue | Redis (GCP Memorystore) |
| Hosting | Google Cloud Run |
| Monitoring | Grafana Cloud, Sentry, PostHog |

## 📖 Docs

- **[User Manual](docs/user-manual.md)** — Full guide: installation, dashboard, inventory workbench, pairing, alerts, FAQ
- **[Full Landing Page](https://apprenticekyle.github.io/syncmesh-public)** — Interactive demo, feature details, tech stack

## 🔒 Security

- Shopify access tokens encrypted at rest (AES-256-GCM)
- All data hosted on Google Cloud Platform (us-central1)
- HMAC-verified webhooks with replay protection
- JWT session tokens with per-request validation
- GDPR compliant — automatic data deletion on app uninstall

---

<div align="center">

**[🌐 Full Website](https://apprenticekyle.github.io/syncmesh-public)** • **[🎮 Interactive Demo](https://apprenticekyle.github.io/syncmesh-public/demo/index.html)** • **[🧪 Join Beta](https://github.com/ApprenticeKyle/syncmesh-public/issues/new?template=beta-application.yml)** • **[📖 Docs](docs/user-manual.md)**

> **Note:** SyncMesh is currently in beta. The app requires a Shopify store to function. To experience the product without a store, use the [interactive demo](https://apprenticekyle.github.io/syncmesh-public/demo/index.html).

</div>
