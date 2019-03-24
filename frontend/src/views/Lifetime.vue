<template>
  <div class="lifetime">
    <h3 class="text-primary font-weight-bold pb-3">
      How the situation has&nbsp;changed
      <br>during your lifetime?
    </h3>
    <div class="form-row">
      <div class="form-group col-12 col-lg-6">
        <label for="countrySearch" :class="{ 'text-danger' : !code }">Country*</label>
        <search
          id="countrySearch"
          :multiple="false"
          @select="x => code = x.code"
          @remove="_ => code = null"
        />
      </div>
      <div class="form-group col-12 col-lg-6">
        <label for="ageInput" :class="{ 'text-danger' : !age }">Age*</label>
        <input
          id="ageInput"
          class="form-control"
          type="number"
          min="0"
          placeholder="Age"
          v-model="age"
        >
      </div>
    </div>
    <v-chart v-if="visibility" :options="options"/>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import CountryService from "@/services/countryService.js";
import LineChart from "@/charts/line.js";
import _ from "lodash";

export default {
  name: "Lifetime",
  data() {
    return {
      code: null,
      country: null,
      age: null,
      visibility: false,
      options: LineChart.options
    };
  },
  watch: {
    code: async function(newValue) {
      this.country = newValue ? await CountryService.get(newValue) : null;
      this.refreshChart();
    },
    age: function() {
      this.refreshChart();
    }
  },
  methods: {
    getData: function(property) {
      return _.map(_.takeRight(this.country.emissions, this.age), property);
    },
    refreshChart: function() {
      if ((this.visibility = this.country && this.age)) {
        this.options.xAxis.data = this.getData("year");
        this.options.series[0].data = this.getData("value");
        this.options.series[1].data = _.map(this.getData("valuePerCapita"), v =>
          v ? parseFloat(v.toFixed(5)) : null
        );
        console.log(this.options.series[1].data);
      }
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