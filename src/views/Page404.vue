<template>
  <div class="notPage">
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  data () {
    return {
      msg: 'Page404'
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>

<style scoped>
  .notPage {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align:center;
    font-size:26px;
  }
</style>
