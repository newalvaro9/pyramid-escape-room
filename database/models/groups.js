const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  countryCode: {type: String, required: true},
  timeToFinish: {type: String, default: "15:00"}
})

module.exports = mongoose.model('groups', groupsSchema)