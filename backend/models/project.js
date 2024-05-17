// models/project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Project1 = mongoose.model('Project1', ProjectSchema);

module.exports = Project1;
