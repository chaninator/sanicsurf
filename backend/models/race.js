var mongoose = require('mongoose');

var stats = new mongoose.Schema({
  { votes: number,
    supporters: [string]}
})

var raceSchema = new mongoose.Schema({
  sanic_1: { stats },
  sanic_1: {},
  sanic_1: {},
  sanic_1: {},
  sanic_1: {},
  sanic_1: {}
});

var Race = mongoose.model('sanics', sanicSchema);

module.exports = Race;
