const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema({
  name: String,
  symptoms: [String],
  predictedDisease: String,
  precautions: [String],
  causes: [String],
  resources: [String],
});

module.exports = mongoose.model("HealthRecord", HealthSchema);
