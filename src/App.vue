<template>
  <v-app id="app" class="app" dark>
    <component :is="layout" />
  </v-app>
</template>

<script>
import LayoutDefault from '@/views/layouts/LayoutDefault.vue';
import LayoutPubilc from '@/views/layouts/LayoutPubilc.vue';
import * as VApp from 'vuetify/es5/components/VApp';

export default {
  name: 'App',
  components: {
    ...VApp,
    LayoutDefault,
    LayoutPubilc
  },
  computed: {
    layout () {
      return this.$store.state.layout;
    }
  }
};
</script>

<style lang="less">
  @import './less/common';
</style>
