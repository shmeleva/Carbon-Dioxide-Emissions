<template>
  <div class="home">
    <div>
      <search
        class="pb-3"
        :multiple="true"
        @select="x => push(x.code)"
        @remove="x => remove(x.code)"
      />
      <div class="form-check">
        <input id="perCapitaCheckbox" class="form-check-input" type="checkbox" v-model="perCapita">
        <label class="form-check-label" for="perCapitaCheckbox">Per capita</label>
      </div>
      <v-chart :options="options"/>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import CountryService from "@/services/countryService.js";
import BarChart from "@/charts/bar.js";
import _ from "lodash";

export default {
  name: "home",
  data() {
    return {
      countries: [],
      perCapita: false,
      options: BarChart.options
    };
  },
  watch: {
    perCapita: function() {
      this.refreshChart();
    }
  },
  methods: {
    push: async function(code) {
      var country = await CountryService.get(code);
      if (country) {
        // Pushing in A-Z order.
        this.countries.splice(
          _.sortedIndexBy(this.countries, country, "name"),
          0,
          country
        );
        this.refreshChart();
      }
    },
    remove: function(code) {
      _.remove(this.countries, { code: code });
      this.refreshChart();
    },
    /*getData: function(property) {
      return _.map(_.takeRight(this.country.emissions, this.age), property);
    },*/
    refreshChart: function() {
      console.log(_.map(this.countries, "name"));
      this.options.yAxis.data = _.map(this.countries, "name");
      this.options.series[0].data = _.map(
        this.countries,
        x => x.emissions[20].value
      );
      this.options.series[1].data = _.map(this.countries, x => {
        return {
          value: x.emissions[20].value
        };
      });
      // 2000
      // series[0].data
      // series[1].data
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
}
</style>