<template>
  <v-footer fixed align-end height="auto">
    <div class="footer">
      &copy; 2018 — <strong>McVueSimple</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      msg: '- AppFooter'
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>

<style lang="less">
  @import '../less/mixin';
  .footer {
    width:100%;
    .text-center;
  }
</style>
