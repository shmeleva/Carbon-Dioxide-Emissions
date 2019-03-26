// TODO: Shared SCSS & JS colours & font families.
const colours = {
  "High income": "#246A73",
  "Upper middle income": "#1F8A84",
  "Lower middle income": "#3DA989",
  "Low income": "#71C784",
};
const defaultColour = "#CCCCCC";
const fontFamily = "Raleway, sans-serif";
// Source: https://fontawesome.com/icons/crown?style=solid
const crown = "path://M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z";

export default {
  options: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none"
      },
      textStyle: {
        fontFamily: fontFamily
      },
      formatter: function (params) {
        return params[0].name + ": " + (params[0].value ? parseFloat(params[0].value.toFixed(5)) : "NA");
      }
    },
    yAxis: {
      data: [],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        textStyle: {
          fontFamily: fontFamily
        },
        formatter: function (name) {
          // Hide country names on smaller screens.
          // TODO: Move `width` to share with other modules.
          if (screen.width <= 768) {
            return "";
          }
          const n = 12;
          return name.length > n ? name.substr(0, n - 1) + "…" : name;
        }
      },
      inverse: true
    },
    xAxis: {
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [{
      name: "bar",
      type: "bar",
      itemStyle: {
        color: function (params) {
          return colours[params.data.income] || defaultColour;
        },
      },
      data: [],
    }, {
      name: "glyph",
      type: "pictorialBar",
      symbolPosition: "end",
      symbolSize: 16,
      symbolOffset: [24, 0],
      symbol: crown,
      itemStyle: {
        color: () => "#DDDC4C"
      },
      data: []
    }]
  }
}