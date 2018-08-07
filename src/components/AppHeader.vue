<template>
  <div id="header">
    <v-toolbar app fixed clipped-left>
      <div class="header">
        <h1>{{ title }}</h1>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </div>
    </v-toolbar>
    <v-navigation-drawer clipped fixed app v-model="drawer">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/list">
              <v-icon>dashboard</v-icon> List
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <v-icon>dashboard</v-icon> Search
            </router-link>
          </li>
          <li>
            <router-link to="/chart">
              <v-icon>dashboard</v-icon> Chart
            </router-link>
          </li>
          <li>
            <router-link to="/vuetifyGuide">
              <v-icon>dashboard</v-icon> Vuetify Guide
            </router-link>
          </li>
          <li>
              <a @click="logout()">
                <v-icon>dashboard</v-icon> Logout
              </a>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import auth from '@/auth';
import * as VToolbar from 'vuetify/es5/components/VToolbar';
import * as VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';

export default {
  name: 'AppHeader',
  components: {
    ...VToolbar,
    ...VNavigationDrawer
  },
  data () {
    return {
      drawer: false,
      title: '',
      user: {}
    };
  },
  methods: {
    logout () {
      auth.logout().then((data) => {
        this.$router.push({ name: 'Login' });
      }).catch((error) => {
        alert('로그아웃 에러');
        /*
         * TODO : ERROR 처리는 어떻게 표현 할지 고민.
         *   - 알림 모듈 생성하여 관리?
         * */
      });
    }
  }
};
</script>

<style lang="less">
  @import '../less/mixin';
  .header {
    position: relative;
    width:100%;
    h1 {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      line-height:56px;
      .text-center;
    }
  }
  .nav {
    ul {
      padding-top: 20px;
      li {
        padding: 10px 20px;
        a {
          color:#fff;
          i {
            margin-right:15px;
          }
        }
      }
    }
  }
</style>
