'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  passwordHash: {
    type: String
  },
  campus: {
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Mexico", "Sao Paulo", "Lisbon"]
  },
  course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
  image: String

});

module.exports = mongoose.model('User', schema);
