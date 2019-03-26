const fontFamily = "Raleway, sans-serif";

export default {
  options: {
    color: ["#246A73", "#6E4555"],
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
        formatter: function (value) {
          // Hide country names on smaller screens.
          // TODO: Move `width` to share with other modules.
          return (screen.width <= 768) ? "" : `${value} kt`;
        }
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