var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Emission = require('./emission');

var CountrySchema = new Schema({
  code: {
    type: String,
    required: true,
    max: 3,
  },
  name: {
    type: String,
    required: true,
    max: 64,
  },
  region: {
    type: String,
    required: true,
    max: 64,
  },
  income: {
    type: String,
    required: true,
    max: 64,
  },
  emissions: [Emission.schema],
  version: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Version',
    required: true,
  },
});

CountrySchema.index({
  version: -1,
  code: 1,
});

module.exports = mongoose.model('Country', CountrySchema);