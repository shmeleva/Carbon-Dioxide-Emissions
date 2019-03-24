<template>
  <div class="home">
    <div>
      <search class="pb-3" :multiple="true" @select="add" @remove="remove"/>
      <div class="form-check">
        <input id="perCapitaCheckbox" class="form-check-input" type="checkbox" v-model="perCapita">
        <label class="form-check-label" for="perCapitaCheckbox">Per capita</label>
      </div>
      <bar-chart :chart-data="highIncomeData" :options="options"></bar-chart>
      <!--<bar-chart :chart-data="lowIncomeData" :options="options"></bar-chart>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import BarChart from "@/components/BarChart.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "home",
  data() {
    return {
      countries: [],
      perCapita: false,
      options: { responsive: true, maxBarThickness: 5 },
      highIncomeData: null,
      lowIncomeData: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    async add(country) {
      try {
        var response = await axios.get("/countries", {
          responseType: "json",
          params: {
            codes: country.code
          }
        });
        if (response.data.length) {
          this.highIncomeData = {
            labels: this.highIncomeData.labels,
            datasets: _.concat(this.highIncomeData.datasets, [
              {
                label: "Thailand",
                backgroundColor: "#03F303",
                data: [this.getRandomInt()]
              }
            ])
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
    remove(country) {
      _.remove(this.countries, {
        code: country.code
      });
    },
    fillData() {
      this.highIncomeData = {
        labels: ["High Income"],
        datasets: [
          {
            label: "Russia",
            backgroundColor: "#f87979",
            data: [this.getRandomInt()]
          },
          {
            label: "Finland",
            backgroundColor: "#03F303",
            data: [this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
  components: {
    Search,
    BarChart
  }
};
</script>
