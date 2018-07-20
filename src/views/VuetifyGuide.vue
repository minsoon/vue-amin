<template>
  <v-container>

  </v-container>
</template>

<script>
export default {
  name: 'VuetifyGuide',
  data () {
    return {
      msg: ' - VuetifyGuide'
    };
  },
  props: {
  },
  created () {
    console.log(this.msg);
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
    }
  }
};
</script>
