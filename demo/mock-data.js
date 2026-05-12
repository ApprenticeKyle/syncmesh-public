// Mock data for SyncMesh interactive demo
const MOCK = {
  currentShop: { domain: "urban-threads.myshopify.com", plan: "BETA", isBeta: true },
  stats: { connectedStores: 3, planLimit: 5, syncedSkuLinks: 42, uniquePoolSkus: 38 },
  shops: [
    { id: 1, domain: "urban-threads.myshopify.com", syncedSkus: 42, status: "connected", joinedAt: "2026-02-15", isCurrent: true },
    { id: 2, domain: "street-vibes.myshopify.com", syncedSkus: 38, status: "connected", joinedAt: "2026-03-01", isCurrent: false },
    { id: 3, domain: "metro-style.myshopify.com", syncedSkus: 12, status: "connected", joinedAt: "2026-04-20", isCurrent: false }
  ],
  locations: [
    { id: "gid://shopify/Location/1", name: "Main Warehouse" },
    { id: "gid://shopify/Location/2", name: "East Coast Fulfillment" },
    { id: "gid://shopify/Location/3", name: "West Coast Hub" }
  ],
  products: [
    { id: 1, title: "Classic Cotton T-Shirt", imageUrl: "", status: "ACTIVE", variants: [
      { id: 101, title: "Black / M", sku: "TSH-BLK-M", inventoryLevels: { "gid://shopify/Location/1": 25, "gid://shopify/Location/2": 18, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-TSH-001", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/1001" },
      { id: 102, title: "Black / L", sku: "TSH-BLK-L", inventoryLevels: { "gid://shopify/Location/1": 18, "gid://shopify/Location/2": 12, "gid://shopify/Location/3": 0 }, poolSku: null, status: "local_only", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/1002" },
      { id: 103, title: "White / M", sku: "TSH-WHT-M", inventoryLevels: { "gid://shopify/Location/1": 30, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-TSH-001", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/1003" }
    ]},
    { id: 2, title: "Slim Fit Denim Jeans", imageUrl: "", status: "ACTIVE", variants: [
      { id: 201, title: "Indigo / 32", sku: "JNS-IND-32", inventoryLevels: { "gid://shopify/Location/1": 15, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-JNS-002", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/2001" },
      { id: 202, title: "Black / 30", sku: "JNS-BLK-30", inventoryLevels: { "gid://shopify/Location/1": 8, "gid://shopify/Location/2": 6, "gid://shopify/Location/3": 4 }, poolSku: "GLOBAL-JNS-002", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/2002" },
      { id: 203, title: "Light Wash / 34", sku: "JNS-LW-34", inventoryLevels: { "gid://shopify/Location/1": 5, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: null, status: "local_only", isLinkable: true, isInventoryTracked: false, inventoryItemId: "gid://shopify/InventoryItem/2003" }
    ]},
    { id: 3, title: "Premium Leather Sneakers", imageUrl: "", status: "ACTIVE", variants: [
      { id: 301, title: "White / 9", sku: "SNK-WHT-9", inventoryLevels: { "gid://shopify/Location/1": 22, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-SNK-003", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/3001" },
      { id: 302, title: "Black / 10", sku: "SNK-BLK-10", inventoryLevels: { "gid://shopify/Location/1": 0, "gid://shopify/Location/2": 8, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-SNK-003", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/3002" }
    ]},
    { id: 4, title: "Wool Blend Sweater", imageUrl: "", status: "ACTIVE", variants: [
      { id: 401, title: "Grey / L", sku: "SWT-GRY-L", inventoryLevels: { "gid://shopify/Location/1": 12, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-SWT-004", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/4001" },
      { id: 402, title: "Navy / M", sku: "SWT-NAV-M", inventoryLevels: { "gid://shopify/Location/1": 7, "gid://shopify/Location/2": 3, "gid://shopify/Location/3": 0 }, poolSku: null, status: "local_only", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/4002" }
    ]},
    { id: 5, title: "Canvas Backpack", imageUrl: "", status: "ACTIVE", variants: [
      { id: 501, title: "Olive / One Size", sku: "BKP-OLV-OS", inventoryLevels: { "gid://shopify/Location/1": 3, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: null, status: "local_only", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/5001" }
    ]},
    { id: 6, title: "Wireless Earbuds Pro", imageUrl: "", status: "ARCHIVED", variants: [
      { id: 601, title: "Matte Black", sku: "EB-PRO-BLK", inventoryLevels: { "gid://shopify/Location/1": 45, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-EB-005", status: "linked", isLinkable: false, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/6001" },
      { id: 602, title: "Pearl White", sku: "EB-PRO-WHT", inventoryLevels: { "gid://shopify/Location/1": 32, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-EB-005", status: "linked", isLinkable: false, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/6002" }
    ]},
    { id: 7, title: "Running Performance Tee", imageUrl: "", status: "ACTIVE", variants: [
      { id: 701, title: "Neon Green / L", sku: "RUN-GRN-L", inventoryLevels: { "gid://shopify/Location/1": 20, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: null, status: "missing_sku", isLinkable: false, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/7001" }
    ]},
    { id: 8, title: "Minimalist Wristwatch", imageUrl: "", status: "ACTIVE", variants: [
      { id: 801, title: "Silver / Black Strap", sku: "WTCH-SLV-BLK", inventoryLevels: { "gid://shopify/Location/1": 10, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-WTC-006", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/8001" },
      { id: 802, title: "Rose Gold / Brown Strap", sku: "WTCH-RG-BRN", inventoryLevels: { "gid://shopify/Location/1": 6, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-WTC-006", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/8002" },
      { id: 803, title: "Matte Black / Mesh", sku: "WTCH-BLK-MS", inventoryLevels: { "gid://shopify/Location/1": 14, "gid://shopify/Location/2": 0, "gid://shopify/Location/3": 0 }, poolSku: "GLOBAL-WTC-006", status: "linked", isLinkable: true, isInventoryTracked: true, inventoryItemId: "gid://shopify/InventoryItem/8003" }
    ]}
  ],
  syncEvents: [
    { id: 1, poolSku: "GLOBAL-TSH-001", action: "auto_sync", fromStock: 25, toStock: 24, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "2 min ago", status: "auto_sync", locationId: "gid://shopify/Location/1" },
    { id: 2, poolSku: "GLOBAL-JNS-002", action: "inventory_update", fromStock: 16, toStock: 15, fromStore: "urban-threads.myshopify.com", toStore: "metro-style.myshopify.com", time: "8 min ago", status: "inventory_update", locationId: "gid://shopify/Location/1" },
    { id: 3, poolSku: "GLOBAL-SNK-003", action: "sync_failed", fromStock: 22, toStock: 22, fromStore: "metro-style.myshopify.com", toStore: "urban-threads.myshopify.com", time: "15 min ago", status: "failed", error: "Network timeout", locationId: "gid://shopify/Location/2" },
    { id: 4, poolSku: "GLOBAL-EB-005", action: "auto_sync", fromStock: 45, toStock: 45, fromStore: "urban-threads.myshopify.com", toStore: "street-vibes.myshopify.com", time: "22 min ago", status: "auto_sync", locationId: "gid://shopify/Location/1" },
    { id: 5, poolSku: "GLOBAL-WTC-006", action: "force_sync", fromStock: 10, toStock: 10, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "30 min ago", status: "force_sync", locationId: "gid://shopify/Location/1" },
    { id: 6, poolSku: "GLOBAL-TSH-001", action: "conflict_resolve", fromStock: 26, toStock: 25, fromStore: "urban-threads.myshopify.com", toStore: "metro-style.myshopify.com", time: "45 min ago", status: "conflict_resolve", locationId: "gid://shopify/Location/3" },
    { id: 7, poolSku: "GLOBAL-JNS-002", action: "inventory_update", fromStock: 17, toStock: 16, fromStore: "urban-threads.myshopify.com", toStore: "street-vibes.myshopify.com", time: "1 hour ago", status: "inventory_update", locationId: "gid://shopify/Location/2" },
    { id: 8, poolSku: "GLOBAL-SWT-004", action: "auto_sync", fromStock: 12, toStock: 11, fromStore: "street-vibes.myshopify.com", toStore: "urban-threads.myshopify.com", time: "1 hour ago", status: "auto_sync", locationId: "gid://shopify/Location/1" }
  ],
  alertRules: [
    { id: 1, type: "low_stock", scope: "global", scopeName: "All SKUs", threshold: 10, channels: ["in_app", "email"], cooldownMinutes: 30, enabled: true },
    { id: 2, type: "stockout", scope: "global", scopeName: "All SKUs", threshold: null, channels: ["in_app"], cooldownMinutes: 15, enabled: true },
    { id: 3, type: "low_stock", scope: "sku", scopeName: "GLOBAL-JNS-002", threshold: 5, channels: ["in_app", "email", "webhook"], cooldownMinutes: 60, enabled: true },
    { id: 4, type: "sync_failure", scope: "global", scopeName: "All SKUs", threshold: null, channels: ["in_app", "webhook"], cooldownMinutes: 10, enabled: true }
  ],
  alertEvents: [
    { id: 101, type: "low_stock", severity: "warning", sku: "GLOBAL-JNS-002", quantity: 5, threshold: 10, message: "Stock dropped below threshold", channels: ["in_app"], time: "1 hour ago" },
    { id: 102, type: "stockout", severity: "critical", sku: "SNK-BLK-10", quantity: 0, threshold: null, message: "Product out of stock", channels: ["in_app"], time: "3 hours ago" },
    { id: 103, type: "sync_failure", severity: "critical", sku: "GLOBAL-SNK-003", quantity: 22, threshold: null, message: "Network timeout syncing to metro-style", channels: ["in_app"], time: "15 min ago" },
    { id: 104, type: "sync_failure", severity: "critical", sku: "GLOBAL-SNK-003", quantity: 22, threshold: null, message: "SKU not found in target store", channels: ["in_app"], time: "2 hours ago" }
  ]
};
