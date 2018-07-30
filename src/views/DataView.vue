<template>
  <div>
    {{ item.golfclubNameEng }}
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'DataView',
  data () {
    return {
      item: [],
      msg: '  - DataView'
    };
  },
  created () {
    // console.log(store.state.myRounds);
    // console.log(this.$route.params.id);
  }
};
</script>
