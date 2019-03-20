var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 64
  },
  code: {
    type: String,
    required: true,
    max: 3
  },
  income: {
    type: String,
    required: true,
    max: 64
  },
  region: {
    type: String,
    required: true,
    max: 64
  },
  emissions: [Emission],
  version: {
    type: ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('Country', CountrySchema);