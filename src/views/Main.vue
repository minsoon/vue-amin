<template>
  <v-container grid-list-xl>
    <v-layout wrap text-xs-center>
      <v-flex xs12>
        <v-card dark>
          <v-tooltip bottom>
            <v-btn
              icon
              large
              target="_blank"
              slot="activator"
            >
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Main</span>
          </v-tooltip>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 4" :key="`3${i}`">
        <v-card color="secondary">
          <v-card-text class="px-0">{{i}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '  - main',
      items: []
    };
  },
  created () {
    console.log(this.msg);
  }
};
</script>
