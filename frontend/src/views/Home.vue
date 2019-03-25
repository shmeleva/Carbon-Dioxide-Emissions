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
      <template v-if="visible">
        <v-chart :options="options"/>
        <vue-slider v-model="year" :data="years" :marks="true" :interval="10" tooltip="always">
          <template v-slot:label="{ active, value }">
            <div
              :class="['vue-slider-mark-label', 'custom-label', { active }]"
            >{{ value % 5 == 0 ? value : '' }}</div>
          </template>
          <template v-slot:tooltip="{ value }">
            <div class="custom-tooltip">{{ value }}</div>
          </template>
        </vue-slider>
      </template>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import BarChart from "@/charts/bar.js";
import CountryService from "@/services/countryService.js";
import Search from "@/components/Search.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "home",
  data() {
    return {
      years: null,
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
    },
    visible: function() {
      return this.countries.length;
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

        this.years = this.years || _.map(country.emissions, "year");

        // Selecting the latest available year (usually 2014).
        var latestRecord = _.takeRight(
          _.dropRightWhile(country.emissions, [this.property, null])
        )[0];

        var latestYear = latestRecord
          ? latestRecord.year
          : this.year || _.takeRight(country.emissions)[0].year;

        if (this.year == latestYear) {
          this.refreshChart();
        } else {
          this.year = latestYear; // Triggers refreshChart().
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

      // Bars.
      this.options.series[0].data = _.map(this.countries, c => {
        return {
          value: _.find(c.emissions, e => e.year == that.year)[that.property],
          income: c.income
        };
      });

      // Superpower icons.
      this.options.series[1].data = _.map(this.countries, c => {
        return {
          value: c.superpower
            ? _.find(c.emissions, e => e.year == that.year)[that.property]
            : null
        };
      });
    }
  },
  components: {
    Search,
    VueSlider
  }
};
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
}
</style>