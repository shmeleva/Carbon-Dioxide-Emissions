var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VersionSchema = new Schema({
  checksum: {
    type: String,
    required: false,
    max: 64,
  },
  valid: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('Version', VersionSchema);