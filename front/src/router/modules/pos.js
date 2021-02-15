import auth from "@/router/middleware/auth";

export default [
	/*********************** POS SCALE ***********************/
  {
    path: "/pos/scale",
    name: "posScale",
    component: () => import("@/views/pos/scale/Index.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'SCALE'
    }
	},
	{
    path: "/pos/scale/create",
    name: "posScaleCreate",
    component: () => import("@/views/pos/scale/Create.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'SCALE'
    }
  },
  /*********************** POS POINT OF SALES ***********************/
  {
    path: "/pos/pos-general",
    name: "posMain",
    component: () => import("@/views/pos/pointOfSales/Index.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'POSES'
    }
  },
  {
    path: "/pos/pos-general/cashbox/create",
    name: "posCashboxCreate",
    component: () => import("@/views/pos/pointOfSales/cashbox/CreateUpdate.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CREATE_CASHBOX'
    }
  },
  {
    path: "/pos/pos-general/cashbox/update/:id",
    name: "posCashboxUpdate",
    component: () => import("@/views/pos/pointOfSales/cashbox/CreateUpdate.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'EDIT_CASHBOX'
    }
	},
	{
    path: "/pos/pos-general/cashbox/shift/:id",
    name: "posCashboxShift",
    component: () => import("@/views/pos/pointOfSales/cashbox/Shift.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'SHIFTS'
    }
  },
  {
    path: "/pos/pos-general/pos/create/:posGroupId?",
    name: "posCreate",
    component: () => import("@/views/pos/pointOfSales/pos/CreateUpdate.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CREATE_POS'
    }
  },
  {
    path: "/pos/pos-general/pos/update/:id",
    name: "posUpdate",
    component: () => import("@/views/pos/pointOfSales/pos/CreateUpdate.vue"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'POSES'
    }
  },
  {
    path: "/pos/pos-general/pos-group/create",
    name: "posGroupCreate",
    component: () => import("@/views/pos/pointOfSales/posGroup/CreateUpdate.vue"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'POS_GROUPS', url: '/pos/pos-general'},
        { title: 'POS_GROUP_CREATE', active: true}
      ],
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/pos/pos-general/pos-group/update/:id",
    name: "posGroupUpdate",
    component: () => import("@/views/pos/pointOfSales/posGroup/CreateUpdate.vue"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'POS_GROUPS', url: '/pos/pos-general'},
        { title: 'POS_GROUP_EDIT', active: true}
      ],
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/pos/report",
    name: "posReport",
    component: () => import("@/views/pos/reports/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'REPORTS'
    }
  },
  /*********************** POS GOOD RECEPTION ***********************/
  {
    path: "/pos/product/good-reception",
    name: "posGoodReception",
    component: () => import("@/views/pos/goodReception/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'GOOD_RECEPTION'
    }
  },
  {
    path: "/pos/product/good-reception/create",
    name: "posGoodReceptionCreate",
    component: () => import("@/views/pos/goodReception/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'GOOD_RECEPTION'
    }
  },
  {
    path: "/pos/product/good-reception/preview/:id",
    name: "posGoodReceptionPreview",
    component: () => import("@/views/pos/goodReception/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'GOOD_RECEPTION'
    }
  },
	/*********************** POS DEBIT CREDIT ***********************/
	{
    path: "/pos/debit-credit",
    name: "posDebitCredit",
    component: () => import("@/views/pos/debitCredit/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'DT_CT'
    }
	},
	{
    path: "/pos/debit-credit/:id",
    name: "posDebitCreditDetail",
    component: () => import("@/views/pos/debitCredit/suppliers/Detail"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'DT_CT'
    }
  },
  {
    path: "/pos/debit-credit/clients",
    name: "posClients",
    component: () => import("@/views/pos/debitCredit/clients/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CLIENTS'
    }
  },
  {
    path: "/pos/debit-credit/clients/debtInPoses/:id",
    name: "posDebtInPoses",
    component: () => import("@/views/pos/debitCredit/clients/debtInPoses"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CLIENTS'
    }
	},
  {
    path: "/pos/debit-credit/clients/debtInPoses/cheques/:posId/:clientId",
    name: "posDebtCheques",
    component: () => import("@/views/pos/debitCredit/clients/ChequesAndHistory"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CHEQUES'
    }
  },
  {
    path: "/pos/clients/create",
    name: "posClientsCreate",
    component: () => import("@/views/pos/debitCredit/clients/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CLIENTS', url: '/pos/clients', name: 'posClients'},
        { title: 'NEW_CLIENT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'NEW_CLIENT'
    }
  },
  {
    path: "/pos/clients/update/:id",
    name: "posClientsUpdate",
    component: () => import("@/views/pos/debitCredit/clients/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CONTACTS', url: '/pos/clients', name: 'posClients'},
        { title: 'EDIT_CONTACT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'EDIT_CONTACT'
    }
	},
	/*********************** POS DISPLACEMENT ***********************/
	{
    path: "/pos/displacement",
    name: "posDisplacement",
    component: () => import("@/views/pos/displacement/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'DISPLACEMENT'
    }
	},
	{
    path: "/pos/displacement/create",
    name: "posDisplacementCreate",
    component: () => import("@/views/pos/displacement/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'NEW_DISPLACEMENT'
    }
	},
	{
    path: "/pos/displacement/update/:id",
    name: "posDisplacementUpdate",
    component: () => import("@/views/pos/displacement/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'UPDATE_DISPLACEMENT'
    }
  },
	{
    path: "/pos/displacement/preview/:id",
    name: "posDisplacementPreview",
    component: () => import("@/views/pos/displacement/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'DISPLACEMENT'
    }
	},
	/*********************** POS NOMENCLATURE ***********************/
	{
    path: "/pos/product/nomenclature",
    name: "posNomenclature",
    component: () => import("@/views/pos/nomenclature/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'NOMENCLATURE'
    }
	},
	/*********************** POS RETURN OF GOODS ***********************/
	{
    path: "/pos/product/return-of-goods",
    name: "posReturnOfGoods",
    component: () => import("@/views/pos/returnItems/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'RETURN_OF_GOODS'
    }
	},
	{
    path: "/pos/product/return-of-goods/create",
    name: "posReturnOfGoodsCreate",
    component: () => import("@/views/pos/returnItems/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'RETURN_OF_GOODS'
    }
	},
	{
    path: "/pos/product/return-of-goods/preview/:id",
    name: "posReturnOfGoodsPreview",
    component: () => import("@/views/pos/returnItems/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'RETURN_OF_GOODS'
    }
	},
  /*********************** POS INVENTORY ***********************/
  {
    path: "/pos/inventory",
    name: "posInventory",
    component: () => import("@/views/pos/inventory/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/pos/inventory/create",
    name: "posInventoryCreate",
    component: () => import("@/views/pos/inventory/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/pos/inventory/update/:id",
    name: "posInventoryUpdate",
    component: () => import("@/views/pos/inventory/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'INVENTORY'
    }
  },
  {
    path: "/pos/inventory/preview/:id",
    name: "posInventoryPreview",
    component: () => import("@/views/pos/inventory/Preview"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'PREVIEW', active: true}
      ],
      pageTitle: 'INVENTORY'
    }
	},
	/*********************** POS CHEQUES ***********************/
	{
    path: "/pos/cheques",
    name: "posCheques",
    component: () => import("@/views/pos/cheques/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CHEQUES'
    }
	},
	/*********************** POS NOTIFICATIONS ***********************/
  {
    path: "/pos/notifications",
    name: "posNotifications",
    component: () => import("@/views/pos/notifications/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'NOTIFICATIONS'
    }
	},
	{
    path: "/pos/notifications/create",
    name: "posNotificationsCreate",
    component: () => import("@/views/pos/notifications/CreateUpdate"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CREATE'
    }
	},
	/*********************** POS PRICE TAGS ***********************/
  {
    path: "/pos/price-tags",
    name: "posPriceTags",
    component: () => import("@/views/pos/priceTags/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'PRICE_TAGS'
    }
  },
	/*********************** POS SETTINGS ***********************/
  {
    path: "/pos/settings",
    name: "posSettings",
    component: () => import("@/views/pos/settings/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'EXCHANGE_RATES'
    }
  },
];