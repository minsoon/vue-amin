<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
let self = this;
export default {
  name: 'DataView',
  data () {
    return {
      test: '1234',
      msg: '  - DataView'
    };
  },
  created () {
    this.$bus.on('view-data', this.view);
  },
  methods: {
    view (val) {
      this.test = val;
       console.log(this);
      this.$bus.off('view-data', this.view);
    }
  }
};
</script>
