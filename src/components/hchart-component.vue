<template>
  <div class="highcharts-container"></div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import HighchartsMore from 'highcharts/highcharts-more';
  HighchartsMore(Highcharts)

  export default {
      props: ['options', 'styles'],
      name: 'highcharts',
      data() {
          return {
              chart: null
          }
      },
      mounted() {
          this.initChart();
      },
      methods: {
          initChart() {
              console.log(this.$el);
              this.$el.style.width = (this.styles.width || 800) + 'px';
              this.$el.style.height = (this.styles.height || 400) + 'px';
              this.chart = new Highcharts.Chart(this.$el, this.options);
          }
      }
  }
</script>

<style>

</style>
