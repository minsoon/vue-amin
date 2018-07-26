<template>
  <div>
    <v-container>
      <v-layout wrap text-xs-center>
        <v-flex xs12 sm6 md3>
          <v-text-field
            v-model="searchKeyword"
            name="search"
            label="Search"
            append-icon="search"
          >
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <app-list :searchKeyword="searchKeyword"></app-list>
  </div>
</template>

<script>
import auth from '@/auth';
import store from '@/store';
import AppList from '@/views/List';
import * as VTextField from 'vuetify/es5/components/VTextField';

export default {
  name: 'Main',
  components: {
    ...VTextField,
    AppList
  },
  data () {
    return {
      msg: '  - main',
      searchKeyword: ''
    };
  },
};
</script>
