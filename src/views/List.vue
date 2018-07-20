<template>
  <v-container grid-list-xl>
    <v-layout column reverse fill-height>
      <v-flex v-for="(item, index) in items" :key="index" xs12>
        <v-card dark>
          <v-card-text>
            <v-icon>widgets</v-icon> {{ item.golfclubNameEng }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        class="notItems"
        v-if="items.length === 0 && init"
      >
        검색된 골프장이 없습니다.
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import auth from '@/auth';
import store from '@/store';
import data from '../assets/round-data.json'

let size = 0;
let itemList = [];

export default {
  name: 'List',
  props: [
    'searchKeyword'
  ],
  data () {
    return {
      init: false,
      msg: '  - list',
      items: data
    };
  },
  watch: {
    searchKeyword (key) {
      var items = store.state.myRounds,
          keywordItem = [];
      items.filter(post => {
        if (post.golfclubNameEng.toLowerCase().includes(key.toLowerCase())) {
          keywordItem.push(post);
        }
      });
      this.items = keywordItem;
    }
  },
  created () {
    this.getMyRounds();
  },
  methods: {
    resetData () {
      store.dispatch('clearState', 'myRounds');
      this.getMyRounds();
    },
    getMyRounds () {
      store.dispatch('addState', {
        name: 'myRounds',
        data: this.items
      });
      /*
      auth.get('/myRounds/rounds/2018', {
        'page': 0,
        'size': 100,
        'isDelete': 0
      }, 'myRounds').then((response) => {
        if (response.status === 200) {
          this.items = response.data.myRoundDtoList;
          console.log(JSON.stringify(this.items));
        }
        this.init = true;
      }).catch((error) => {
        console.log(error);
      });
      */
    }
  }
};
</script>

<style>
  .notItems {
    padding:200px 0;
    text-align:center;
  }
</style>
