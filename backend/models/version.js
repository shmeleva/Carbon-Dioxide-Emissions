var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VersionSchema = new Schema({
  checksum: {
    type: String,
    required: true,
    max: 64,
  },
  valid: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('Version', VersionSchema);