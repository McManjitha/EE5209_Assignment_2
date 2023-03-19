const mongoose = require('mongoose');

const tvSeriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cast: {
    type: [String],
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const tv_series = mongoose.model('tv_series', tvSeriesSchema);

module.exports = tv_series;
