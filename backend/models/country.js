var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 64,
  },
  code: {
    type: String,
    required: true,
    max: 3,
  },
  income: {
    type: String,
    required: true,
    max: 64,
  },
  region: {
    type: String,
    required: true,
    max: 64,
  },
  emissions: [Emission],
  version: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

CountrySchema.index({
  version: -1,
  code: 1,
});

module.exports = mongoose.model('Country', CountrySchema);