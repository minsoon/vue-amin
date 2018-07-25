import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';
import Cookies from 'js-cookie';

Vue.use(Router);

function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  let accessToken = store.state.user.accessToken;
  let isUser = Cookies.get('isUser') ? JSON.parse(Cookies.get('isUser')) : undefined;

  if (!accessToken && isUser) {
    store.dispatch('updateIsUser', isUser);
    accessToken = store.state.user.accessToken;
  }

  if (!accessToken) {
    next({ path: '/login' });
  }
  next();
}

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
