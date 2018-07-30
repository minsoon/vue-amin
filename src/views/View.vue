<template>
  <div class="viewBox">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'View',
  data () {
    return {
      msg: '- view'
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>
