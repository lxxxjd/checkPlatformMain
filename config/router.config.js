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
      { path: '/', redirect: '/Archives/ArchivesAdd',authority: ['admin', 'user']},


      //Archives
      {
        path: '/Archives',
        icon: 'profile',
        name: 'Archives',
        routes: [
          {
            path: '/Archives/ArchivesAdd',
            name: 'ArchivesAdd',
            component: './Archives/ArchivesAdd',
          },
          {
            path: '/Archives/ArchivesDestory',
            name: 'ArchivesDestory',
            component: './Archives/ArchivesDestory',
          },
          {
            path: '/Archives/ArchivesQuery',
            name: 'ArchivesQuery',
            component: './Archives/ArchivesQuery',
          },

        ],
      },
      //Archives
      {
        path: '/Cargo',
        icon: 'profile',
        name: 'Cargo',
        routes: [
          // {
          //   path: '/Cargo/CargoList',
          //   name: 'CargoList',
          //   component: './Cargo/CargoList',
          // },

          {
            path: '/Cargo/CargoSort1',
            name: 'CargoSort1',
            component: './Cargo/CargoSort1',
          },

        ],
      },



      {
        component: '404',
      },
    ],
  },
];
