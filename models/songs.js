const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  song: {
    type: String,
    required: true
  },
  singer: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  musician: {
    type: String,
    required: true
  }
});

const songs = mongoose.model('songs', songSchema);

module.exports = songs;