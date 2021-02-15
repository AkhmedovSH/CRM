import auth from "@/router/middleware/auth";

export default [
  /*********************** SETTING ***********************/
  {
    path: "/setting/account",
    name: "settingAccount",
    component: () => import("@/views/setting/Account"),
    meta: {
      middleware: [auth],
      pageTitle: 'PROFILE'
    }
  },
  {
    path: "/setting/change-password",
    name: "settingChangePassword",
    component: () => import("@/views/setting/ChangePassword"),
    meta: {
      middleware: [auth],
      pageTitle: 'CHANGE_PASSWORD'
    }
  },
  {
    path: "/setting/tariff-history",
    name: "settingTariffHistory",
    component: () => import("@/views/setting/TariffHistory"),
    meta: {
      middleware: [auth],
      pageTitle: 'TARIFF_HISTORY'
    }
  },
  {
    path: "/setting/cards",
    name: "settingCards",
    component: () => import("@/views/setting/Cards"),
    meta: {
      middleware: [auth],
      pageTitle: 'MY_CARDS'
    }
  },
  {
    path: "/setting/transactions",
    name: "settingTransactions",
    component: () => import("@/views/setting/Transactions"),
    meta: {
      middleware: [auth],
      pageTitle: 'TRANSACTIONS_HISTORY'
    }
  },
  {
    path: "/setting/billing",
    name: "settingBilling",
    component: () => import("@/views/setting/Billing"),
    meta: {
      middleware: [auth],
      pageTitle: 'BILLING'
    }
  },
  {
    path: "/setting/my-users",
    name: "settingMyUsers",
    component: () => import("@/views/setting/myUsers/Index"),
    meta: {
      middleware: [auth],
      pageTitle: 'MY_USERS'
    }
  },
  {
    path: "/setting/my-users/role/create",
    name: "settingMyUsersRoleCreate",
    component: () => import("@/views/setting/myUsers/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'MY_USERS', url: '/setting/my-users'},
        { title: 'ROLE_ADD', active: true}
      ],
      pageTitle: 'ROLE_ADD'
    }
  },
  {
    path: "/setting/my-users/role/update/:id",
    name: "settingMyUsersRoleUpdate",
    component: () => import("@/views/setting/myUsers/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'MY_USERS', url: '/setting/my-users'},
        { title: 'ROLE_EDIT', active: true}
      ],
      pageTitle: 'ROLE_EDIT'
    }
  },
  {
    path: "/setting/for-developers",
    name: "settingForDevelopers",
    component: () => import("@/views/setting/ForDevelopers"),
    meta: {
      middleware: [auth],
      pageTitle: 'FOR_DEVELOPERS'
    }
  },
];