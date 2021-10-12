import { createRouter, createWebHistory } from 'vue-router';
import Home from '~/views/Home';
// import SearchResult from '~/views/SearchResult';
import NotFound from '~/views/NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':keyword',
          name: 'home',
          component: Home,
        },
      ],
    },

    // {
    //   path: '/movies',
    //   name: 'movies',
    //   component: MovieDetail,
    //   // children: [
    //   //   {
    //   //     path: ':id',
    //   //     name: 'movieDetailModal',
    //   //     component: movieDetailModal,
    //   //   },
    //   // ],
    // },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
