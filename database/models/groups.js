const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  countryCode: { type: String },
  timeToFinish: { type: String, default: "15:00" },
  mate1: { type: String, default: null },
  mate2: { type: String, default: null },
  mate3: { type: String, default: null },
  mate4: { type: String, default: null },
  mate5: { type: String, default: null },
  mate6: { type: String, default: null }
})

module.exports = mongoose.model('groups', groupsSchema)