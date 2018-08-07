<template>
  <div class="list">
    <div v-for="(item, index) in items" :key="index" class="item">
      <router-link :to="'/view/' + item.roundSeq">
        <p>
          <v-icon>widgets</v-icon> {{ item.golfclubNameEng }}
        </p>
      </router-link>
    </div>
    <div
      class="notItems"
      v-if="items.length === 0 && init"
    >
      검색된 골프장이 없습니다.
    </div>
  </div>
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
      items: data,
      item: null
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
    // resetData () {
      // store.dispatch('clearState', 'myRounds');
      // this.getMyRounds();
    // },
    getMyRounds () {
      store.dispatch('addState', {
        name: 'myRounds',
        data: this.items
      });
      /*
      * api 호출
      *
      auth.get('/myRounds/rounds/2018', {
        'page': 0,
        'size': 100,
        'isDelete': 0
      }, {
        name: 'myRounds'
      }).then((response) => {
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

<style lang="less">
  @import '../less/mixin';
  .list {
    .item {
      margin-bottom:20px;
      background-color: #424242;
      border-radius: 3px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      a {
        display: block;
        p {
          padding:0 20px;
          line-height: 70px;
          color: #fff;
        }
      }
    }
  }
  .notItems {
    padding:200px 0;
    text-align:center;
  }
</style>
