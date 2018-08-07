import store from '@/store';
import axios from 'axios';

let apiDomain = process.env.API_BASE_URL;
let error = 'error';

export default {
  login (params = {}) {
    return new Promise((resolve, reject) => {
      try {
        var data = {
          accessToken: 'tokenKey',
          user: {
            appId: process.env.APP_ID,
            name: '성민창',
            email: 'mcsung85@gmail.com',
            id: params.id
          }
        };
        store.dispatch('updateUserInfo', data);
        setTimeout(() => {
          if (store.state.accessToken) {
            resolve(store.state.user);
          } else {
            reject(error);
          }
        });
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  },
  logout () {
    // store 로그인 정보 삭제 후 확인.
    return new Promise((resolve, reject) => {
      store.dispatch('clearUserInfo');
      setTimeout(() => {
        if (!store.state.accessToken) {
          resolve();
        } else {
          reject(error);
        }
      });
    });
  },
  get (url, params = {}, setOption = {}) {
    return new Promise((resolve, reject) => {
      if (store.state[setOption.name]) {
        resolve(store.state[setOption.name]);
      } else {
        axios({
          method: 'get',
          url: apiDomain + url,
          headers: {
            'appId': store.state.user.appId,
            'accessToken': store.state.accessToken
          },
          params: params
        }).then((response) => {
          if (setOption && setOption.name && !store.state[setOption.name]) {
            store.dispatch('addState', {
              name: setOption.name,
              data: response
            });
          }
          resolve(response);
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
          'accessToken': store.state.accessToken
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
          'accessToken': store.state.accessToken
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
