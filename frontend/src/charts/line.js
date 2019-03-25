const colors = ["#246A73", "#6E4555"];
const fontFamily = "Raleway, sans-serif";

export default {
  options: {
    color: colors,
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["Total", "Per Capita"],
      textStyle: {
        fontFamily: fontFamily
      }
    },
    xAxis: {
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      textStyle: {
        fontFamily: fontFamily
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} kt"
      },
      textStyle: {
        fontFamily: fontFamily
      }
    },
    series: [
      {
        name: "Total",
        data: [],
        type: "line",
        smooth: true,
      },
      {
        name: "Per Capita",
        data: [],
        type: "line",
        smooth: true,
      }
    ]
  }
}