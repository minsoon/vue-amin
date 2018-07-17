import error from '@/views/Page404';
import login from '@/views/Login';
import main from '@/views/Main';
import list from '@/views/List';

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
    name: 'Main',
    path: '/main',
    component: main,
    title: 'Main',
    layout: 'LayoutDefault',
    isPublic: true
  },
  {
    name: 'List',
    path: '/list',
    component: list,
    title: 'List',
    layout: 'LayoutDefault',
    isPublic: true
  },
  {
    path: '*',
    redirect: '/404',
    component: error,
    title: '404',
    layout: 'LayoutPubilc',
    isPublic: false
  }
];

export default routes;
