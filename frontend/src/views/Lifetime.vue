<template>
  <div class="lifetime">
    <h3 class="text-primary font-weight-bold pb-3">
      How the situation has&nbsp;changed
      <br>during your lifetime?
    </h3>
    <div class="form-row">
      <div class="form-group col-12 col-lg-6">
        <label for="countrySearch">Country</label>
        <search
          id="countrySearch"
          :multiple="false"
          @select="x => countryCode = x.code"
          @remove="_ => countryCode = null"
        />
      </div>
      <div class="form-group col-12 col-lg-6">
        <label for="ageInput">Age</label>
        <input id="ageInput" class="form-control" type="number" placeholder="Age" v-model="age">
      </div>
    </div>
    <v-chart :options="options"/>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "Lifetime",
  data() {
    var colors = ["#5793f3", "#d14a61"];
    return {
      countryCode: null,
      country: null,
      age: null,
      options: {
        color: colors,
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["Total", "Per Capita"]
        },
        xAxis: {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: colors[1]
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} kt"
          }
        },
        series: [
          {
            name: "Total",
            data: [],
            type: "line",
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "Maximum" },
                { type: "min", name: "Minimum" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "Per Capita",
            data: [],
            type: "line",
            smooth: true
          }
        ]
      }
    };
  },
  // https://ecomfe.github.io/echarts-examples/public/editor.html?c=pictorialBar-velocity&theme=dark
  watch: {
    countryCode: async function(newValue, oldValue) {
      if (newValue == null) {
        this.country = null;
        return;
      }
      try {
        var response = await axios.get("/countries", {
          responseType: "json",
          params: {
            codes: newValue
          }
        });
        if (response.data.length) {
          this.country = response.data[0];
          this.options.xAxis.data = _.map(this.country.emissions, "year");
          this.options.series[0].data = _.map(this.country.emissions, "value");
          this.options.series[1].data = _.map(
            this.country.emissions,
            "valuePerCapita"
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    age: function(newValue, oldValue) {}
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