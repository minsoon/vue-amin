import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';
import Cookies from 'js-cookie';

Vue.use(Router);

const guardRoute = (to, from, next) => {
  let accessToken = store.state.user.accessToken;
  let isUser = Cookies.get('isUser') ? JSON.parse(Cookies.get('isUser')) : undefined;
  let route = routes.find(d => d.name === from.name);

  if (isUser) {
    if (!accessToken) store.dispatch('updateIsUser', isUser);
    if (to.path.indexOf('/login') === 0 && route) {
      store.state.title = route.title;
      store.dispatch('updateLayout', route.layout);
      return next(from.path);
    }
    return next();
  } else {
    if (to.path !== '/login') {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  }
  next();
};

const router = new Router({
  base: '/app',
  routes: routes.map(route => ({
    name: route.name,
    path: route.path,
    component: route.component,
    beforeEnter: (to, from, next) => {
      store.state.title = route.title;
      store.dispatch('updateLayout', route.layout);
      if (route.isPublic) return guardRoute(to, from, next);
      next();
    }
  }))
});

export default router;
