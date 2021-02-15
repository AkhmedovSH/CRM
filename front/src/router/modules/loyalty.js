import auth from "@/router/middleware/auth";

export default [
  /*********************** LOYALTY MAIN PANEL ***********************/
  {
    path: "/loyalty/main-panel",
    name: "loyaltyMainPanel",
    component: () => import("@/views/loyalty/mainPanel/Index"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'MAIN_PANEL'
    }
  },
  /*********************** LOYALTY POS_GROUP ***********************/
  {
    path: "/loyalty/pos-group",
    name: "loyaltyPosGroup",
    component: () => import("@/views/loyalty/posGroup/Index"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/loyalty/pos-group/view/:posGroupId",
    name: "loyaltyPosGroupView",
    component: () => import("@/views/loyalty/posGroup/View"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/loyalty/pos-group/create",
    name: "loyaltyPosGroupCreate",
    component: () => import("@/views/loyalty/posGroup/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'POS_GROUPS', url: '/loyalty/pos-group'},
        { title: 'POS_GROUP_CREATE', active: true}
      ],
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/loyalty/pos-group/update/:posGroupId",
    name: "loyaltyPosGroupUpdate",
    component: () => import("@/views/loyalty/posGroup/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'POS_GROUPS', url: '/loyalty/pos-group'},
        { title: 'POS_GROUP_EDIT', active: true}
      ],
      pageTitle: 'POS_GROUPS'
    }
  },
  {
    path: "/loyalty/pos-group/pos/create/:posGroupId",
    name: "loyaltyPosGroupPosCreate",
    component: () => import("@/views/loyalty/posGroup/pos/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CREATE_POS'
    }
  },
  {
    path: "/loyalty/pos-group/pos/update/:posGroupId/:id",
    name: "loyaltyPosGroupPosUpdate",
    component: () => import("@/views/loyalty/posGroup/pos/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'POS'
    }
  },
  /*********************** LOYALTY SERVICES ***********************/
  {
    path: "/loyalty/services",
    name: "loyaltyService",
    component: () => import("@/views/loyalty/service/Index"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'LOYALTY_PROGRAM'
    }
  },
  {
    path: "/loyalty/services/create",
    name: "loyaltyServiceCreate",
    component: () => import("@/views/loyalty/service/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CREATE_NEW_PROGRAM'
    }
  },
  {
    path: "/loyalty/services/update/:id",
    name: "loyaltyServiceUpdate",
    component: () => import("@/views/loyalty/service/CreateUpdate"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      breadcrumb: [
        { title: 'LOYALTY_PROGRAM', url: '/loyalty/services'},
        { title: 'EDIT', active: true}
      ],
      pageTitle: 'EDIT'
    }
	},
	/*********************** LOYALTY SERVICES ***********************/
	{
    path: "/loyalty/cheques",
    name: "loyaltyCheques",
    component: () => import("@/views/loyalty/cheques/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CHEQUES'
    }
  },
  /*********************** LOYALTY CLIENTS ***********************/
  {
    path: "/loyalty/clients",
    name: "loyaltyClients",
    component: () => import("@/views/loyalty/clients/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CLIENTS'
    }
  },
  {
    path: "/loyalty/clients/create",
    name: "loyaltyClientCardsCreate",
    component: () => import("@/views/loyalty/clients/clientCards/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CLIENTS', url: '/loyalty/clients', name: 'loyaltyClients'},
        { title: 'NEW_CLIENT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'NEW_CLIENT'
    }
  },
  {
    path: "/loyalty/clients/update/:id",
    name: "loyaltyClientCardsUpdate",
    component: () => import("@/views/loyalty/clients/clientCards/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CONTACTS', url: '/loyalty/clients', name: 'loyaltyClients'},
        { title: 'EDIT_CONTACT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'EDIT_CONTACT'
    }
  },
  {
    path: "/loyalty/clients/create",
    name: "loyaltyClientsCreate",
    component: () => import("@/views/loyalty/clients/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CLIENTS', url: '/loyalty/clients', name: 'loyaltyClients'},
        { title: 'NEW_CLIENT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'NEW_CLIENT'
    }
  },
  {
    path: "/loyalty/clients/update/:id",
    name: "loyaltyClientsUpdate",
    component: () => import("@/views/loyalty/clients/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CONTACTS', url: '/loyalty/clients', name: 'loyaltyClients'},
        { title: 'EDIT_CLIENT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'EDIT_CLIENT'
    }
  },
];