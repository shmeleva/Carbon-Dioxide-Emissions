var colors = ["#5793f3", "#d14a61"];

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
                    data: [{ type: "average", name: "Average" }]
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
}