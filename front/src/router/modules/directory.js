import auth from "@/router/middleware/auth";

export default [
  /*********************** DIRECTORY ***********************/
  {
    path: "/directory/my-organization",
    name: "directoryMyOrganization",
    component: () => import("@/views/directory/myOrganization/Index"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'MY_ORGANIZATION'
    }
  },
  {
    path: "/directory/my-organization/employee/create",
    name: "directoryEmployeeCreate",
    component: () => import("@/views/directory/myOrganization/employees/CreateUpdate"),
    meta: { 
      middleware: [auth],
      breadcrumb: [
        { title: 'EMPLOYEES', url: '/directory/my-organization', name: 'directoryMyOrganization'},
        { title: 'NEW_EMPLOYEE', active: true}
      ],
      haveChildren: true,
      pageTitle: 'MY_ORGANIZATION'
    }
  },
  {
    path: "/directory/my-organization/employee/update/:id",
    name: "directoryEmployeeUpdate",
    component: () => import("@/views/directory/myOrganization/employees/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'EMPLOYEES', url: '/directory/my-organization', name: 'directoryMyOrganization'},
        { title: 'NEW_EMPLOYEE', active: true}
      ],
      haveChildren: true,
      pageTitle: 'MY_ORGANIZATION'
    }
  },
  {
    path: "/directory/my-organization/branches/create",
    name: "directoryBranchCreate",
    component: () => import("@/views/directory/myOrganization/branches/CreateUpdate"),
    meta: { 
      middleware: [auth],
      breadcrumb: [
        { title: 'BRANCHES', url: '/directory/my-organization', name: 'directoryMyOrganization'},
        { title: 'NEW_BRANCH', active: true}
      ],
      haveChildren: true,
      pageTitle: 'MY_ORGANIZATION'
    }
  },
  {
    path: "/directory/my-organization/branches/update/:id",
    name: "directoryBranchUpdate",
    component: () => import("@/views/directory/myOrganization/branches/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'BRANCHES', url: '/directory/my-organization', name: 'directoryMyOrganization'},
        { title: 'NEW_BRANCH', active: true}
      ],
      haveChildren: true,
      pageTitle: 'MY_ORGANIZATION'
    }
  },
    /*********************** DIRECTORY PRODUCTS ***********************/
    {
      path: "/directory/products",
      name: "directoryProducts",
      component: () => import("@/views/directory/products/Index"),
      meta: {
        middleware: [auth],
        haveChildren: true,
        pageTitle: 'PRODUCTS'
      }
    },
    {
      path: "/directory/products/create",
      name: "directoryProductsCreate",
      component: () => import("@/views/directory/products/Create"),
      meta: {
        middleware: [auth],
        haveChildren: true,
        breadcrumb: [
          { title: 'PRODUCTS', url: '/directory/products'},
          { title: 'NEW_PRODUCT', active: true}
        ],
        pageTitle: 'NEW_PRODUCT'
      }
    },
    {
      path: "/directory/products/update/:id",
      name: "directoryProductsUpdate",
      component: () => import("@/views/directory/products/Update"),
      meta: {
        middleware: [auth],
        haveChildren: true,
        breadcrumb: [
          { title: 'PRODUCTS', url: '/directory/products'},
          { title: 'EDIT_PRODUCT', active: true}
        ],
        pageTitle: 'EDIT_PRODUCT'
      }
    },
  /*********************** DIRECTORY CONTACTS ***********************/
  {
    path: "/directory/contacts",
    name: "directoryContacts",
    component: () => import("@/views/directory/contacts/Index"),
    meta: {
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'CONTACTS'
    }
  },
  {
    path: "/directory/contacts/create",
    name: "directoryContactsCreate",
    component: () => import("@/views/directory/contacts/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CONTACTS', url: '/directory/contacts', name: 'directoryMyOrganization'},
        { title: 'NEW_CONTACT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'NEW_CONTACT'
    }
  },
  {
    path: "/directory/contacts/update/:id",
    name: "directoryContactsUpdate",
    component: () => import("@/views/directory/contacts/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'CONTACTS', url: '/directory/contacts', name: 'directoryMyOrganization'},
        { title: 'EDIT_CONTACT', active: true}
      ],
      haveChildren: true,
      pageTitle: 'EDIT_CONTACT'
    }
  },
  /*********************** ORGANIZATIONS ***********************/
  {
    path: "/directory/organization",
    name: "directoryOrganization",
    component: () => import("@/views/directory/organization/Index"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'ORGANIZATIONS'
    }
  },
  {
    path: "/directory/organization/index/:id?",
    name: "directoryOrganizationCompany",
    component: () => import("@/views/directory/organization/Organization"),
    meta: { 
      middleware: [auth],
      haveChildren: true,
      pageTitle: 'ORGANIZATION'
    }
  },

  {
    path: "/directory/organization/branches/create/:organization_id",
    name: "directoryOrganizationBranchCreate",
    component: () => import("@/views/directory/organization/branches/CreateUpdate"),
    meta: { 
      middleware: [auth],
      breadcrumb: [
        { title: 'BRANCHES', url: '/directory/organization', name: 'directoryOrganization'},
        { title: 'NEW_BRANCH', active: true}
      ],
      haveChildren: true,
      pageTitle: 'ORGANIZATION'
    }
  },
  {
    path: "/directory/organization/branches/update/:organization_id/:id",
    name: "directoryOrganizationBranchUpdate",
    component: () => import("@/views/directory/organization/branches/CreateUpdate"),
    meta: {
      middleware: [auth],
      breadcrumb: [
        { title: 'BRANCHES', url: '/directory/organization', name: 'directoryOrganization'},
        { title: 'NEW_BRANCH', active: true}
      ],
      haveChildren: true,
      pageTitle: 'ORGANIZATION'
    }
  },
];