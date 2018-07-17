<template>
  <v-footer fixed align-end fill-height>
    <span>AppFooter</span>
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
