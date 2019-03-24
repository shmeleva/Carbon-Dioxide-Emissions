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
      years: [],
      year: null,
      countries: [],
      perCapita: false,
      options: BarChart.options
    };
  },
  watch: {
    perCapita: function() {
      this.refreshChart();
    },
    year: function() {
      this.refreshChart();
    }
  },
  computed: {
    property: function() {
      return this.perCapita ? "valuePerCapita" : "value";
    }
  },
  methods: {
    // 1. Выбор года. /23
    // 2. Окраска по экономике. /24
    // 3. Легенда. /24
    // 4. Короны для сверхдержав. /1
    // 5. Remove countries w/ no data
    push: async function(code) {
      var country = await CountryService.get(code);
      if (country) {
        // Pushing in A-Z order.
        this.countries.splice(
          _.sortedIndexBy(this.countries, country, "name"),
          0,
          country
        );
        // Selecting the latest available year (usually 2014).
        this.years = this.years || _.map(country.emissions, "year");
        var latestRecord =
          _.takeRight(
            _.dropRightWhile(country.emissions, [this.property, null])
          )[0] || _.takeRight(country.emissions)[0];
        if (this.year == latestRecord.year) {
          this.refreshChart();
        } else {
          this.year = latestRecord.year; // Triggers refreshChart().
        }
      }
    },
    remove: function(code) {
      _.remove(this.countries, { code: code });
      this.refreshChart();
    },
    refreshChart: function() {
      // Ellipsizing long country names...
      this.options.yAxis.data = _.map(this.countries, x => {
        const n = 16;
        return x.name.length > n ? x.name.substr(0, n - 1) + "…" : x.name;
      });

      var that = this;

      this.options.series[0].data = _.map(
        this.countries,
        x => _.find(x.emissions, y => y.year == that.year)[that.property]
      );
      this.options.series[1].data = _.map(this.countries, x => {
        return {
          value: _.find(x.emissions, y => y.year == that.year)[[that.property]]
        };
      });
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