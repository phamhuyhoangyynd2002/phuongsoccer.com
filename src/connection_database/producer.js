const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'This field is required.'
  }
});


module.exports = mongoose.model('producer', producerSchema);