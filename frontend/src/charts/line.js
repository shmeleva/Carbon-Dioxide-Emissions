var colors = ["#246A73", "#6E4555"];

export default {
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