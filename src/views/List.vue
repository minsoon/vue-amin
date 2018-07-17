<template>
  <v-container grid-list-xl>
    <v-toolbar>
      <v-toolbar-title class="white--text">List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="resetData">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout column reverse fill-height>
      <v-flex v-for="(item, index) in items" :key="index" xs12>
        <v-card dark>
          <v-card-text>
            <v-icon>widgets</v-icon> {{ item.golfclubNameEng }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import auth from '@/auth';
import store from '@/store';
let size = 0;
export default {
  name: 'List',
  data () {
    return {
      msg: '  - list',
      items: []
    };
  },
  created () {
    this.getMyRounds();
    console.log(this.msg);
  },
  methods: {
    resetData () {
      store.dispatch('clearState', 'myRounds');
      this.getMyRounds();
    },
    getMyRounds () {
      auth.get('/myRounds/rounds/2018', {
        'page': 0,
        'size': 50,
        'isDelete': 0
      }, 'myRounds').then((response) => {
        if (response.status === 200) {
        this.items = response.data.myRoundDtoList;
      }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>
