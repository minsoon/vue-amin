<template>
  <div>
    {{ item.golfclubNameEng }}
  </div>
</template>

<script>
let self;
export default {
  name: 'DataView',
  data () {
    return {
      item: [],
      msg: '  - DataView'
    };
  },
  created () {
    console.log(this.$bus);
    this.$bus.on('view-data', this.view);
  },
  methods: {
    view (val) {
      console.log(val);
    }
  }
};
</script>
