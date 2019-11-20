export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
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

        ],
      },



      {
        component: '404',
      },
    ],
  },
];
