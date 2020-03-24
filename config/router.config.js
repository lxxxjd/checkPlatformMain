
export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      { path: '/user/PlatformRegister', name: 'PlatformRegister', component: './User/PlatformRegister' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },


  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // Entrustment
      { path: '/', redirect: '/Company/PreCompany',authority: ['admin', 'user']},


      {
        path: '/Cargo',
        icon: 'profile',
        name: 'Cargo',
        routes: [



          {
            path: '/Cargo/CargoInfo',
            name: 'CargoInfo',
            component: './Cargo/CargoInfo',
          },
          {
            path: '/Cargo/ItemList',
            name: 'ItemList',
            component: './Cargo/ItemList',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },
          {
            path: '/Cargo/StandardList',
            name: 'StandardList',
            component: './Cargo/StandardList',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },


          {
            path: '/Cargo/CargoSort1',
            name: 'CargoSort1',
            component: './Cargo/CargoSort1',
          },

          {
            path: '/Cargo/CargoSort2',
            name: 'CargoSort2',
            component: './Cargo/CargoSort2',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },

        ],
      },

      {
        path: '/Company',
        icon: 'file',
        name: 'Company',
        routes: [

          {
            path: '/Company/PreCompany',
            name: 'PreCompany',
            component: './Company/PreCompany',
          },

          {
            path: '/Company/Company',
            name: 'Company',
            component: './Company/Company',
          },

          {
            path: '/Company/CNASCheckFourCertCode',
            name: 'CNASCheckFourCertCode',
            component: './Company/CNASCheckFourCertCode',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },
          {
            path: '/Company/UserInfo',
            name: 'UserInfo',
            component: './Company/UserInfo',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },


          {
            path: '/Company/CompanyUserManage',
            name: 'CompanyUserManage',
            component: './Company/CompanyUserManage',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },

          {
            path: '/Company/Intrusment',
            name: 'Intrusment',
            component: './Company/Intrusment',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },

          {
            path: '/Company/CompanyInfo',
            name: 'CompanyInfo',
            component: './Company/CompanyInfo',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },

          {
            path: '/Company/ManDetail',
            name: 'ManDetail',
            component: './Company/ManDetail',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },


        ],
      },


      {
        path: '/CustomManage',
        icon: 'profile',
        name: 'CustomManage',
        routes: [
          {
            path: '/CustomManage/Custom',
            name: 'Custom',
            component: './CustomManage/Custom',
          },
        ],
      },



      {
        path: '/UserManage',
        icon: 'file',
        name: 'UserManage',
        routes: [

          {
            path: '/UserManage/PlatformUser',
            name: 'PlatformUser',
            component: './UserManage/PlatformUser',
          },
          {
            path: '/UserManage/CnasUser',
            name: 'CnasUser',
            component: './UserManage/CnasUser',
          },
          {
            path: '/UserManage/ContactUser',
            name: 'ContactUser',
            component: './UserManage/ContactUser',
          },
          {
            path: '/UserManage/CustomsUser',
            name: 'CustomsUser',
            component: './UserManage/CustomsUser',
          },

          {
            path: '/UserManage/UserManage',
            name: 'UserManage',
            component: './UserManage/UserManage',
          },

        ],
      },




      {
        component: '404',
      },
    ],
  },
];
