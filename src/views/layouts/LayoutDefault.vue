<template>
  <div id="wrap">
    <!-- @slot Use this slot header -->
    <app-header />
    <!-- @slot Use this slot content -->
    <div class="container">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <!-- @slot Use this slot footer -->
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'LayoutDefault',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  },
  data () {
    return {
      msg: ':::: LayoutDefault ::::'
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>
