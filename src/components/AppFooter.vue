<template>
  <v-footer fixed align-end height="auto">
    <v-flex
      lighten-2
      py-3
      text-xs-center
    >
      &copy; 2018 — <strong>McVueSimple</strong>
    </v-flex>
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
