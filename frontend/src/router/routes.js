const routes = [
  {
    path: '/',
    redirect: '/customer/projects',
  },
  {
    path: '/customer',
    redirect: '/customer/projects',
    component: () => import('src/layouts/CustomerLayout.vue'),
    children: [
      {
        path: 'projects',
        name: 'projects',
        component: () => import('src/pages/ProjectsPage.vue'),
        meta: {
          title: 'Проекты',
        },
      },
      {
        path: 'projects/:id',
        name: 'project',
        component: () => import('src/pages/ProjectPage.vue'),
        meta: {
          title: 'Проект',
        },
      },
    ],
  },
  {
    path: '/worker',
    redirect: '/worker/tasks',
    component: () => import('src/layouts/WorkerLayout.vue'),
    children: [
      {
        path: 'auth',
        name: 'auth',
        component: () => import('src/pages/AuthPage.vue'),
        meta: {
          title: 'Авторизация',
          isAuthRequired: false,
        },
      },
      {
        path: 'tasks',
        name: 'tasks',
        component: () => import('src/pages/TasksPage.vue'),
        meta: {
          title: 'Задания',
          isAuthRequired: false,
        },
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('src/pages/ProfilePage.vue'),
        meta: {
          title: 'Авторизация',
          isAuthRequired: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      isAuthRequired: false,
    },
  },
]

export default routes
