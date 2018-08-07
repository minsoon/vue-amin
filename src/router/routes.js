// import error from '@/views/Page404';
import login from '@/views/Login';
import search from '@/views/Search';
import list from '@/views/List';
import view from '@/views/View';
import chart from '@/views/chart/index';
import vuetifyGuide from '@/views/VuetifyGuide';

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: login,
    meta: {
      layout: 'LayoutPubilc',
      isPublic: true
    }
  },
  {
    name: 'Search',
    path: '/search',
    component: search,
    meta: {
      layout: 'LayoutDefault',
      isPublic: false
    }
  },
  {
    name: 'List',
    path: '/list',
    component: list,
    meta: {
      layout: 'LayoutDefault',
      isPublic: false
    }
  },
  {
    name: 'View',
    path: '/view/:id',
    component: view,
    meta: {
      layout: 'LayoutDefault',
      isPublic: false
    }
  },
  {
    name: 'VuetifyGuide',
    path: '/VuetifyGuide',
    component: vuetifyGuide,
    meta: {
      layout: 'LayoutDefault',
      isPublic: false
    }
  },
  {
    name: 'Chart',
    path: '/Chart',
    component: chart,
    meta: {
      layout: 'LayoutDefault',
      isPublic: false
    }
  },
  {
    path: '*',
    redirect: '/list'
  }
];

export default routes;
