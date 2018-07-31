<template>
  <v-footer fixed align-end height="auto">
    <div class="footer">
      &copy; 2018 — <strong>McVueSimple</strong>
    </div>
  </v-footer>
</template>

<script>
import * as VFooter from 'vuetify/es5/components/VFooter';

export default {
  name: 'AppFooter',
  components: {
    ...VFooter
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
