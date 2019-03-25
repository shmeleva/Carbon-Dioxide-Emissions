var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VersionSchema = new Schema({
  dirty: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('Version', VersionSchema);