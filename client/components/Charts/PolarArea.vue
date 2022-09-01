<template>
  <PolarArea
    :chart-options="chartOptions"
    :chart-data="chartDatas"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { PolarArea } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

export default {
  name: 'PolarAreaChart',
  components: {
    PolarArea
  },
  props: {
    chartId: {
      type: String,
      default: 'polar-chart'
    },
    
    chartDatas: {
      type: Object,
    },
    
    chartOptions: {
      type: Object,
    },

    datasetIdKey: {
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
    },
    plugins: {
      type: Array,
    }
  },
  data() {
    return {
      
    }
  }
}
</script>