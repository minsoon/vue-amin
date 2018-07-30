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

/**
 * This is an example of creating a reusable grid component and using it with external data.
 * @version 1.0.5
 * @author [Rafael](https://github.com/rafaesc92)
 * @since Version 1.0.1
 */
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
