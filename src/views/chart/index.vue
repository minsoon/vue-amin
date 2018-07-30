<template>
  <div class="chartBox">

    <!-- BarExample -->
    <div class="box">
      <bar-example />
    </div>

    <!-- LineExample -->
    <div class="box">
      <line-example />
    </div>

    <!--<div class="box">-->
      <!--<polar-area-example />-->
    <!--</div>-->

    <!-- RadarExample -->
    <div class="box">
      <radar-example />
    </div>

    <!-- ScatterExample -->
    <div class="box">
      <scatter-example />
    </div>
  </div>
</template>

<script>
import BarExample from './example/Bar.js';
import LineExample from './example/Line.js';
import PolarAreaExample from './example/PolarArea.js';
import RadarExample from './example/Rabar.js';
import ScatterExample from './example/Scatter.js';

export default {
  name: 'Chart',
  components: {
    BarExample,
    LineExample,
    PolarAreaExample,
    RadarExample,
    ScatterExample,
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
<style lang="less">
  .chartBox {
    .box{
      padding-bottom:30px;
    }
  }
</style>
