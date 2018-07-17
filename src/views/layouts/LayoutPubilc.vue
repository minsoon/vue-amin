<template>
  <router-view />
</template>

<script>
export default {
  name: 'LayoutPubilc',
  data () {
    return {
      msg: ':::: LayoutPubilc ::::'
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>

<style lang="less">
  @import '../../less/mixin';
</style>
