<template>
  <div class="searchList">
    <div class="searchBox">
      <v-text-field
        v-model="searchKeyword"
        name="search"
        label="Search"
        append-icon="search"
      >
      </v-text-field>
    </div>
    <app-list :searchKeyword="searchKeyword"></app-list>
  </div>
</template>

<script>
import auth from '@/auth';
import store from '@/store';
import AppList from '@/views/List';
import * as VTextField from 'vuetify/es5/components/VTextField';

export default {
  name: 'Search',
  components: {
    ...VTextField,
    AppList
  },
  data () {
    return {
      searchKeyword: ''
    };
  },
};
</script>
