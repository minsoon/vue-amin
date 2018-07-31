import error from '@/views/Page404';
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
    title: 'Login',
    layout: 'LayoutPubilc',
    isPublic: false
  },
  {
    name: 'Search',
    path: '/search',
    component: search,
    title: 'Search',
    layout: 'LayoutDefault',
    isPublic: false
  },
  {
    name: 'List',
    path: '/list',
    component: list,
    title: 'List',
    layout: 'LayoutDefault',
    isPublic: false
  },
  {
    name: 'View',
    path: '/view/:id',
    component: view,
    title: 'View',
    layout: 'LayoutDefault',
    isPublic: false
  },
  {
    name: 'VuetifyGuide',
    path: '/VuetifyGuide',
    component: vuetifyGuide,
    title: 'Vuetify Guide',
    layout: 'LayoutDefault',
    isPublic: false
  },
  {
    name: 'Chart',
    path: '/Chart',
    component: chart,
    title: 'Chart',
    layout: 'LayoutDefault',
    isPublic: false
  },
  {
    path: '*',
    name: '404',
    redirect: '/404',
    component: error,
    title: '404',
    layout: 'LayoutPubilc',
    isPublic: true
  }
];

export default routes;
