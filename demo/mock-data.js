// Mock data for SyncMesh interactive demo
const MOCK = {
  currentShop: { domain: "urban-threads.myshopify.com", plan: "BETA", isBeta: true },
  stats: { connectedStores: 3, planLimit: 5, syncedSkuLinks: 42, uniquePoolSkus: 38 },
  shops: [
    { id: 1, domain: "urban-threads.myshopify.com", syncedSkus: 42, status: "connected", joinedAt: "2026-02-15", isCurrent: true },
    { id: 2, domain: "street-vibes.myshopify.com", syncedSkus: 38, status: "connected", joinedAt: "2026-03-01", isCurrent: false },
    { id: 3, domain: "metro-style.myshopify.com", syncedSkus: 12, status: "connected", joinedAt: "2026-04-20", isCurrent: false }
  ],
  products: [
    { id: 1, title: "Classic Cotton T-Shirt", variants: [
      { id: 101, title: "Black / M", sku: "TSH-BLK-M", stock: 25, poolSku: "GLOBAL-TSH-001", status: "linked" },
      { id: 102, title: "Black / L", sku: "TSH-BLK-L", stock: 18, poolSku: null, status: "local_only" },
      { id: 103, title: "White / M", sku: "TSH-WHT-M", stock: 30, poolSku: "GLOBAL-TSH-001", status: "linked" }
    ]},
    { id: 2, title: "Slim Fit Denim Jeans", variants: [
      { id: 201, title: "Indigo / 32", sku: "JNS-IND-32", stock: 15, poolSku: "GLOBAL-JNS-002", status: "linked" },
      { id: 202, title: "Black / 30", sku: "JNS-BLK-30", stock: 8, poolSku: "GLOBAL-JNS-002", status: "linked" },
      { id: 203, title: "Light Wash / 34", sku: "JNS-LW-34", stock: 5, poolSku: null, status: "local_only" }
    ]},
    { id: 3, title: "Premium Leather Sneakers", variants: [
      { id: 301, title: "White / 9", sku: "SNK-WHT-9", stock: 22, poolSku: "GLOBAL-SNK-003", status: "linked" },
      { id: 302, title: "Black / 10", sku: "SNK-BLK-10", stock: 0, poolSku: "GLOBAL-SNK-003", status: "linked" }
    ]},
    { id: 4, title: "Wool Blend Sweater", variants: [
      { id: 401, title: "Grey / L", sku: "SWT-GRY-L", stock: 12, poolSku: "GLOBAL-SWT-004", status: "linked" },
      { id: 402, title: "Navy / M", sku: "SWT-NAV-M", stock: 7, poolSku: null, status: "local_only" }
    ]},
    { id: 5, title: "Canvas Backpack", variants: [
      { id: 501, title: "Olive / One Size", sku: "BKP-OLV-OS", stock: 3, poolSku: null, status: "local_only" }
    ]},
    { id: 6, title: "Wireless Earbuds Pro", variants: [
      { id: 601, title: "Matte Black", sku: "EB-PRO-BLK", stock: 45, poolSku: "GLOBAL-EB-005", status: "linked" },
      { id: 602, title: "Pearl White", sku: "EB-PRO-WHT", stock: 32, poolSku: "GLOBAL-EB-005", status: "linked" }
    ]},
    { id: 7, title: "Running Performance Tee", variants: [
      { id: 701, title: "Neon Green / L", sku: "RUN-GRN-L", stock: 20, poolSku: null, status: "missing_sku" }
    ]},
    { id: 8, title: "Minimalist Wristwatch", variants: [
      { id: 801, title: "Silver / Black Strap", sku: "WTCH-SLV-BLK", stock: 10, poolSku: "GLOBAL-WTC-006", status: "linked" },
      { id: 802, title: "Rose Gold / Brown Strap", sku: "WTCH-RG-BRN", stock: 6, poolSku: "GLOBAL-WTC-006", status: "linked" },
      { id: 803, title: "Matte Black / Mesh", sku: "WTCH-BLK-MS", stock: 14, poolSku: "GLOBAL-WTC-006", status: "linked" }
    ]}
  ],
  locations: ["Main Warehouse", "East Coast Fulfillment", "West Coast Hub"],
  syncEvents: [
    { id: 1, poolSku: "GLOBAL-TSH-001", action: "auto_sync", fromStock: 25, toStock: 24, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "2 min ago", status: "auto_sync" },
    { id: 2, poolSku: "GLOBAL-JNS-002", action: "inventory_update", fromStock: 16, toStock: 15, fromStore: "urban-threads.myshopify.com", toStore: "metro-style.myshopify.com", time: "8 min ago", status: "inventory_update" },
    { id: 3, poolSku: "GLOBAL-SNK-003", action: "sync_failed", fromStock: 22, toStock: 22, fromStore: "metro-style.myshopify.com", toStore: "urban-threads.myshopify.com", time: "15 min ago", status: "failed", error: "Network timeout" },
    { id: 4, poolSku: "GLOBAL-EB-005", action: "auto_sync", fromStock: 45, toStock: 45, fromStore: "urban-threads.myshopify.com", toStore: "street-vibes.myshopify.com", time: "22 min ago", status: "auto_sync" },
    { id: 5, poolSku: "GLOBAL-WTC-006", action: "force_sync", fromStock: 10, toStock: 10, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "30 min ago", status: "force_sync" },
    { id: 6, poolSku: "GLOBAL-TSH-001", action: "conflict_resolve", fromStock: 26, toStock: 25, fromStore: "urban-threads.myshopify.com", toStore: "metro-style.myshopify.com", time: "45 min ago", status: "conflict_resolve" },
    { id: 7, poolSku: "GLOBAL-JNS-002", action: "inventory_update", fromStock: 17, toStock: 16, fromStore: "urban-threads.myshopify.com", toStore: "street-vibes.myshopify.com", time: "1 hour ago", status: "inventory_update" },
    { id: 8, poolSku: "GLOBAL-SWT-004", action: "auto_sync", fromStock: 12, toStock: 11, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "1 hour ago", status: "auto_sync" }
  ],
  alertRules: [
    { id: 1, type: "low_stock", scope: "global", scopeName: "All SKUs", threshold: 10, channels: ["in_app", "email"], cooldownMinutes: 30, enabled: true },
    { id: 2, type: "stockout", scope: "global", scopeName: "All SKUs", threshold: null, channels: ["in_app"], cooldownMinutes: 15, enabled: true },
    { id: 3, type: "low_stock", scope: "sku", scopeName: "GLOBAL-JNS-002", threshold: 5, channels: ["in_app", "email", "webhook"], cooldownMinutes: 60, enabled: true },
    { id: 4, type: "sync_failure", scope: "global", scopeName: "All SKUs", threshold: null, channels: ["in_app", "webhook"], cooldownMinutes: 10, enabled: true }
  ],
  alertEvents: [
    { id: 101, type: "low_stock", severity: "warning", sku: "GLOBAL-JNS-002", quantity: 5, threshold: 10, message: "Stock dropped below threshold", time: "1 hour ago" },
    { id: 102, type: "stockout", severity: "critical", sku: "SNK-BLK-10", quantity: 0, threshold: null, message: "Product out of stock", time: "3 hours ago" },
    { id: 103, type: "sync_failure", severity: "error", sku: "GLOBAL-SNK-003", quantity: 22, threshold: null, message: "Network timeout syncing to metro-style", time: "15 min ago" },
    { id: 104, type: "sync_failure", severity: "error", sku: "GLOBAL-SNK-003", quantity: 22, threshold: null, message: "SKU not found in target store", time: "2 hours ago" }
  ]
};
