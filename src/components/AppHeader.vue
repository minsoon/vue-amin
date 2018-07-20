<template>
  <div>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list class="nav" dense>
        <v-list-tile>
          <router-link to="/list">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>List</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <router-link to="/search">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Search</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <router-link to="/vuetifyGuide">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>vuetify guide</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import auth from '@/auth';
import store from '@/store';

export default {
  name: 'AppHeader',
  data () {
    return {
      msg: '- AppHeader',
      drawer: false,
      title: store.state.title,
      user: {}
    };
  },
  created () {
    this.user = store.state.user;
    store.watch((state) => state.title, (newValue, oldValue) => {
      this.title = newValue;
    });
    console.log(this.msg);
  },
  methods: {
    logout () {
      var $router = this.$router;
      auth.logout().then(function () {
        $router.push('login');
      }, function () {
        alert('로그아웃 에러');
        /*
         * TODO : ERROR 처리는 어떻게 표현 할지 고민.
         *   - 알림 모듈 생성하여 관리?
         * */
      });
      store.dispatch('clearIsUser');
      // $router.push('login');
      // auth.logout().then(function () {);
      // }, function () {
      // });
    }
  }
};
</script>

<style lang="less">
  .nav {
    .v-list__tile {
      a {
        display:flex;
        text-decoration: blink;
        width:100%;
        color:#ffffff;
      }
    }
  }
</style>
