var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmissionSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: false,
  },
  valuePerCapita: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Emission", EmissionSchema);