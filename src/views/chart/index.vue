<template>
  <div>
    <v-toolbar
      tabs
    >
      <v-tabs
        v-model="tab"
        centered
      >
        <v-tab v-for="k in TabCharts" :key="k">{{ k }}</v-tab>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <!-- BarExample -->
      <v-tab-item :id="TabCharts[0]">
        <v-card flat>
          <v-card-text class="maxWidExample">
            <bar-example />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- LineExample -->
      <v-tab-item :id="TabCharts[1]">
        <v-card flat>
          <v-card-text class="maxWidExample">
            <line-example />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- PolarAreaExample -->
      <v-tab-item :id="TabCharts[2]">
        <v-card flat>
          <v-card-text class="maxWidExample">
            <!--<polar-area-example />-->
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- RadarExample -->
      <v-tab-item :id="TabCharts[3]">
        <v-card flat>
          <v-card-text class="maxWidExample">
            <radar-example />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- ScatterExample -->
      <v-tab-item :id="TabCharts[4]">
        <v-card flat>
          <v-card-text class="maxWidExample">
            <scatter-example />
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </div>
</template>

<script>
import BarExample from './example/Bar.js';
import LineExample from './example/Line.js';
import PolarAreaExample from './example/PolarArea.js';
import RadarExample from './example/Rabar.js';
import ScatterExample from './example/Scatter.js';
import * as VTabs from 'vuetify/es5/components/VTabs';

export default {
  name: 'Chart',
  components: {
    BarExample,
    LineExample,
    PolarAreaExample,
    RadarExample,
    ScatterExample,
    ...VTabs
  },
  data () {
    return {
      tab: 'Bar',
      TabCharts: [
        'Bar',
        'Line',
        'PolarArea',
        'Radar',
        'Scatter'
      ]
    };
  }
};
</script>
<style>
  .maxWidExample {
    margin: 0 auto;
    padding:50px 20px;
    max-width:700px;
    box-sizing: border-box;
  }
</style>
