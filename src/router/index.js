import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';
Vue.use(Router);

const guardRoute = (to, from, next) => {
  let token = window.localStorage.getItem('accessToken') ? window.localStorage.getItem('accessToken') : undefined;
  if (token) {
    next();
  } else {
    router.push({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  }
};

const router = new Router({
  base: '/app',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      });
    });
  }
});
router.beforeEach((to, from, next) => {
  store.dispatch('updateLayout', to.meta.layout);
  if (!to.meta.isPublic) {
    return guardRoute(to, from, next);
  }
  next();
});

export default router;
