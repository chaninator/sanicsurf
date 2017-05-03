var mongoose = require('mongoose');

var sanicSchema = new mongoose.Schema({
  sanic_id: { type: String, required: true },
  url: { type: String, required: true },
  name: { type: String, required: true },
  stats: { type: String, required: true }
});

var Sanic = mongoose.model('sanics', sanicSchema);

module.exports = Sanic;

 // {
 //          "id": 0,
 //          "url": "http://www.briannedrouhard.com/images/sonicpoops.gif",
 //          "name": "Sanic Sanderson",
 //          "stats": "Speed"
 //        }
