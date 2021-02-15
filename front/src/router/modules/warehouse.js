import auth from "@/router/middleware/auth";

export default [
	/*********************** WAREHOUSE ***********************/
  {
    path: "/warehouse/warehouses",
    name: "warehouse",
    component: () => import("@/views/warehouse/warehouses/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'WAREHOUSE'
    }
  },
  {
    path: "/warehouse/warehouses/create",
    name: "warehouseCreate",
    component: () => import("@/views/warehouse/warehouses/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'WAREHOUSES', url: '/warehouse/warehouses'},
        { title: 'NEW_WAREHOUSE', active: true}
      ],
      pageTitle: 'NEW_WAREHOUSE'
    }
  },
  {
    path: "/warehouse/warehouses/update/:id",
    name: "warehouseUpdate",
    component: () => import("@/views/warehouse/warehouses/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'WAREHOUSES', url: '/warehouse/warehouses'},
        { title: 'EDIT_WAREHOUSE', active: true}
      ],
      pageTitle: 'EDIT_WAREHOUSE'
    }
  },
  {
    path: "/warehouse/warehouses/enter-initial/:id",
    name: "warehouseEnterInitial",
    component: () => import("@/views/warehouse/warehouses/EnterInitial"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'ENTERING_INITIAL_RESIDUALS'
    }
  },
  /*********************** WAREHOUSE GOOD RECEPTION ***********************/
  {
    path: "/warehouse/warehouse-good-reception",
    name: "warehouseGoodReception",
    component: () => import("@/views/warehouse/warehouseGoodReception/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'GOOD_RECEPTION'
    }
  },
  {
    path: "/warehouse/warehouse-good-reception/create",
    name: "warehouseGoodReceptionCreate",
    component: () => import("@/views/warehouse/warehouseGoodReception/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'GOOD_RECEPTION'
    }
  },
  {
    path: "/warehouse/warehouse-good-reception/preview/:id",
    name: "warehouseGoodReceptionPreview",
    component: () => import("@/views/warehouse/warehouseGoodReception/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'GOOD_RECEPTION'
    }
  },
  /*********************** WAREHOUSE DISPATCH GOODS ***********************/
  {
    path: "/warehouse/warehouse-dispatch-good",
    name: "warehouseDispatchGoods",
    component: () => import("@/views/warehouse/warehouseDispatchGoods/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'WAREHOUSE_DISPATCH_GOODS'
    }
  },
  {
    path: "/warehouse/warehouse-dispatch-good/create",
    name: "warehouseDispatchGoodsCreate",
    component: () => import("@/views/warehouse/warehouseDispatchGoods/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'WAREHOUSE_DISPATCH_GOODS'
    }
  },
  {
    path: "/warehouse/warehouse-dispatch-good/preview/:id",
    name: "warehouseDispatchGoodsPreview",
    component: () => import("@/views/warehouse/warehouseDispatchGoods/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'WAREHOUSE_DISPATCH_GOODS'
    }
  },
  /*********************** WAREHOUSE ORDERS ORDER ***********************/
  {
    path: "/warehouse/orders",
    name: "warehouseOrders",
    component: () => import("@/views/warehouse/warehouseOrders/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'ORDERS'
    }
  },
  {
    path: "/warehouse/orders/order/preview/:id",
    name: "warehouseOrderPreview",
    component: () => import("@/views/warehouse/warehouseOrders/order/OrderPreview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PURCHASE_ORDERS', url: '/warehouse/orders'},
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'ORDER'
    }
  },
  {
    path: "/warehouse/orders/order/preview/update/:id",
    name: "warehouseOrderPreviewUpdate",
    component: () => import("@/views/warehouse/warehouseOrders/order/OrderPreviewUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PURCHASE_ORDERS', url: '/warehouse/orders' },
        { title: 'PREVIEW', active: true }
      ],
      pageTitle: 'ORDER'
    }
  },
  {
    path: "/warehouse/orders/order/preview/recieve-all/:id",
    name: "warehouseOrderPreviewRecieveAll",
    component: () => import("@/views/warehouse/warehouseOrders/order/OrderPreviewRecieveAll"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PURCHASE_ORDERS', url: '/warehouse/orders'},
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'ORDER'
    }
  },
  {
    path: "/warehouse/orders/create",
    name: "warehouseOrderCreate",
    component: () => import("@/views/warehouse/warehouseOrders/order/OrderCreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'PURCHASE_ORDERS'
    }
  },
  {
    path: "/warehouse/orders/update/:id",
    name: "warehouseOrderUpdate",
    component: () => import("@/views/warehouse/warehouseOrders/order/OrderCreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'PURCHASE_ORDERS'
    }
  },
  /*********************** WAREHOUSE ORDERS SALE ***********************/
  {
    path: "/warehouse/orders/sale/preview/:id",
    name: "warehouseSalePreview",
    component: () => import("@/views/warehouse/warehouseOrders/sale/SalePreview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'SALES_ORDERS', url: '/warehouse/orders'},
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'ORDER'
    }
  },
  {
    path: "/warehouse/orders/sale/create",
    name: "warehouseSaleCreate",
    component: () => import("@/views/warehouse/warehouseOrders/sale/SaleCreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'SALES_ORDERS'
    }
  },
  {
    path: "/warehouse/orders/sale/update/:id",
    name: "warehouseSaleUpdate",
    component: () => import("@/views/warehouse/warehouseOrders/sale/SaleCreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'SALES_ORDERS'
    }
  },
  {
    path: "/warehouse/orders/sale/preview/update/:id",
    name: "warehouseSalePreviewUpdate",
    component: () => import("@/views/warehouse/warehouseOrders/sale/SalePreviewUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'SALES_ORDERS', url: '/warehouse/orders'},
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'ORDER'
    }
  },
  {
    path: "/warehouse/orders/sale/preview/send-all/:id",
    name: "warehouseSalePreviewSendAll",
    component: () => import("@/views/warehouse/warehouseOrders/sale/SalePreviewRecieveAll"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'SALES_ORDERS', url: '/warehouse/orders'},
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'ORDER'
    }
  },
  /*********************** WAREHOUSE INVENTORY ***********************/
  {
    path: "/warehouse/inventory",
    name: "warehouseInventory",
    component: () => import("@/views/warehouse/warehouseInventory/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/warehouse/inventory/create",
    name: "warehouseInventoryCreate",
    component: () => import("@/views/warehouse/warehouseInventory/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/warehouse/inventory/update/:id",
    name: "warehouseInventoryUpdate",
    component: () => import("@/views/warehouse/warehouseInventory/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/warehouse/inventory/preview/:id",
    name: "warehouseInventoryPreview",
    component: () => import("@/views/warehouse/warehouseInventory/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'INVENTORY'
    }
	},
	/*********************** WAREHOUSE SETTINGS ***********************/
  {
    path: "/warehouse/settings",
    name: "warehouseSettings",
    component: () => import("@/views/warehouse/warehouseSettings/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'EXCHANGE_RATES'
    }
  },
  /*********************** WAREHOUSE REPORTS ***********************/
  {
    path: "/warehouse/report",
    name: "warehouseReports",
    component: () => import("@/views/warehouse/warehouseReports/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'REPORTS'
    }
	},
];