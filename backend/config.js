module.exports = {
    mongo: {
        url: process.env.MONGODB
    },
    worldBank: {
        countries: "http://api.worldbank.org/v2/country",
        emissions: "http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT",
        populations: "http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL"
    },
    superpowers: ["USA", "CHN", "RUS"],
    tasks: {
        update: {
            interval: "53 23 * * 0",
            runOnInit: false
        },
        clear: {
            interval: "53 23 * * 1",
            runOnInit: false
        }
    }
} 