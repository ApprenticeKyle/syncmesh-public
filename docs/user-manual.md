# SyncMesh User Manual

SyncMesh is a Shopify inventory synchronization network that prevents overselling across multiple Shopify stores sharing the same warehouse through real-time inventory sync.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Dashboard](#dashboard)
3. [Inventory Workbench](#inventory-workbench)
4. [Multi-Store Pairing](#multi-store-pairing)
5. [Alert System](#alert-system)
6. [FAQ](#faq)

---

## Quick Start

### Install the App

1. Click the install link provided by your administrator:
   ```
   https://www.r2remote.dev/api/auth?shop=your-store.myshopify.com
   ```
2. Click **"Install"** on the Shopify authorization page
3. You'll land on the SyncMesh welcome screen

### Create an Organization

After installing for the first time, you'll see two options:

- **"Create a New Organization"** — Create a new inventory network (you become the admin)
- **"Join Existing Organization"** — Join an existing network using a pairing code

Click **"Create a New Organization"**. Beta users receive Pro plan access immediately at no cost.

### Invite Other Stores

After creating an organization, invite other stores to start syncing:

1. Click **"Invite Store"** on the Dashboard
2. A 6-character pairing code is generated (valid for 15 minutes)
3. Send the code to the administrator of another store
4. They install the app, choose **"Join Existing Organization"**, and enter the code

---

## Dashboard

The Dashboard is the home screen, showing an overview of your sync network.

### Stats Cards

| Metric | Description |
|---|---|
| Connected Stores | Number of connected stores / plan limit |
| Synced SKU Links | Number of active SKU pool mappings |
| Unique Pool SKUs | Number of distinct Pool SKUs in use |

### Connected Stores Table

Displays all stores in your organization:

- **Store** — Store domain ("Current" badge indicates the active store)
- **Synced SKUs** — Number of SKUs synced by this store
- **Status** — Connection status
- **Connected Since** — Date the store joined

### Setup Guide

New organizations see a checklist card on the right side:

1. ✅ Start free trial (auto-completed)
2. ⬜ Connect at least two stores → Click **"Invite Now"**
3. ⬜ Map your first product → Click **"Configure"** (requires 2+ stores)

---

## Inventory Workbench

The Inventory Workbench is the core of SyncMesh. Access it via the **"Inventory Workbench"** button in the top navigation.

### Standard Library

The default tab, showing sync status for all products.

#### Toolbar

- **Location Filter** — Filter by warehouse location (multi-location available on Pro/Max)
- **Status Filter** — All Products / In Pool / Not In Pool
- **Search** — Search by product title or SKU
- **Rows per Page** — 10 / 20 / 50 / 100

#### Product Table

Each product expands to show all variants:

| Column | Description |
|---|---|
| Product & SKU | Product name, variant title, SKU |
| Stock | Quantity and tracking status |
| Network | Pool association status (linked / local only / missing SKU) |
| Action | Action buttons |

#### Link a Variant to Pool

Link a variant to a Pool SKU for cross-store sync:

1. Click **"Link to Pool"** on the variant row
2. Enter a Pool SKU in the modal (e.g., `GLOBAL-SKU-001`)
3. Click **"Link to Pool"** to confirm

Once linked, all stores using the same Pool SKU will automatically keep inventory in sync.

#### Auto-Link by SKU

If you have many products, use the auto-link feature:

1. Click **"Auto-Link by SKU"**
2. Select the warehouse location to scan (Pro/Max plans)
3. Click **"Confirm Auto-Link"**

The system scans all products, matches by SKU, and creates links automatically. A progress bar shows scan status. If inventory conflicts are detected (same SKU has different quantities across stores), the system pauses and asks you to resolve them manually.

### Sync Activity

The second tab shows the latest sync status for each SKU.

#### Status Badges

| Status | Meaning |
|---|---|
| Auto-Sync (green) | Automatic sync succeeded |
| Inventory Update (blue) | Triggered by Shopify webhook |
| Force Sync (yellow) | Manual forced sync |
| Conflict Resolve (purple) | Conflict resolution |
| Sync Failed (red) | Synchronization failure |

#### View History

Click the **"N events"** button on any SKU row to see its full sync history.

#### Force Sync

If a SKU's sync has failed, click **"Force Sync"** at the end of the row to retry manually.

### Alerts

The third tab manages inventory alert rules.

#### Three Alert Types

1. **Low Stock** — Triggers when stock drops to or below a configured threshold
2. **Stockout** — Triggers when a product reaches zero inventory
3. **Sync Failure** — Triggers when cross-store synchronization fails

#### Create an Alert Rule

1. Click **"Add Rule"** under the desired alert type
2. Choose scope: all SKUs (global) or a specific SKU
3. Set the threshold (Low Stock only)
4. Choose notification channels: In-App / Email / Webhook
5. Set cooldown (prevents repeated alerts)
6. Click **"Create"** to save

#### View Alert Events

The "Recent Alert Events" table shows recent alerts with type, severity, SKU, quantity, message, and time.

---

## Multi-Store Pairing

### Invite a New Store

1. Click **"Invite Store"** on the Dashboard
2. A 6-character pairing code is generated
3. Share the code with the other store administrator
4. They install the app and enter the code to join

### Join an Existing Organization

1. After installing the app, click **"Join Existing Organization"** on the welcome screen
2. Enter the 6-character pairing code
3. Click **"Verify & Join"**

### Disconnect a Store

To remove a store from the organization:

1. Click **"Disconnect Current Store"** on the Dashboard
2. Confirm the action

**Note:** Disconnecting permanently deletes all SKU links for that store. If it was the last store, the organization's subscription will be automatically cancelled.

---

## Alert System

### Notification Channels

When creating alert rules, choose from:

- **In-App** — In-app notifications (default)
- **Email** — Email notifications (recipient address required)
- **Webhook** — HTTP callback (URL required)

### Alert Cooldown

Each rule has a cooldown period (default 30 minutes) to prevent alert storms. A rule will not re-trigger during its cooldown window.

---

## FAQ

### Why isn't my inventory syncing?

1. Verify both stores are in the same organization
2. Verify the product variants are linked to the same Pool SKU
3. Check the **Sync Activity** tab for failed sync events
4. If failures exist, click **"Force Sync"** to retry manually

### My pairing code expired. What do I do?

Pairing codes are valid for 15 minutes. Click **"Invite Store"** on the Dashboard to generate a new one.

### How do I view sync history?

Go to Inventory Workbench → **Sync Activity** tab → click **"N events"** on any SKU.

### What is a Pool SKU?

A Pool SKU is a shared inventory identifier across stores. For example, if two stores both link a product to `GLOBAL-SKU-001`, when one store sells a unit, the other store's inventory count is automatically reduced.

### Will Auto-Link overwrite existing links?

No. Auto-Link only processes unlinked variants. Already-linked variants are left untouched.

### How do I unlink a variant?

In the Standard Library tab, click **"Edit Link"** on the variant → click **"Unlink from Pool"** in the modal.

### What is an inventory conflict?

A conflict occurs when the same Pool SKU has different inventory quantities across stores. You must choose which store's quantity to use when resolving the conflict.
