import store from '@/store';
import axios from 'axios';

let apiDomain = process.env.API_BASE_URL;
let error = 'error';

export default {
  login (params = {}) {
    return new Promise((resolve, reject) => {
      var data = {
        user: {
          accessToken: 'tokenKey',
          appId: process.env.APP_ID,
          name: '성민창',
          email: 'mcsung85@gmail.com',
          id: params.id
        }
      };
      store.dispatch('updateIsUser', data);
      setTimeout(function () {
        if (store.state.user.accessToken) {
          resolve(store.state.user);
        } else {
          reject(error);
        }
      });
    });
  },
  logout () {
    // store 로그인 정보 삭제 후 확인.
    return new Promise((resolve, reject) => {
      store.dispatch('clearIsUser');
      setTimeout(function () {
        if (!store.state.user.accessToken) {
          resolve();
        } else {
          reject(error);
        }
      });
    });
  },
  get (url, params = {}, stateName) {
    return new Promise((resolve, reject) => {
      if (stateName && store.state[stateName]) {
        resolve(store.state[stateName]);
      } else {
        axios({
          method: 'get',
          url: apiDomain + url,
          headers: {
            'appId': store.state.user.appId,
            'accessToken': store.state.user.accessToken
          },
          params: params
        }).then((response) => {
          resolve(response);
          if (stateName && !store.state[stateName]) {
            store.dispatch('addState', {
              name: stateName,
              data: response
            });
          }
        }).catch((error) => {
          reject(error);
        });
      }
    });
  },
  put (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: apiDomain + url,
        headers: {
          'appId': store.state.user.appId,
          'gfsSessionId': store.state.user.accessToken
        },
        data: params
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: apiDomain + url,
        headers: {
          'appId': store.state.user.appId,
          'gfsSessionId': store.state.user.accessToken
        },
        data: params
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
