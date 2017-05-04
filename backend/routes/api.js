var express = require('express');
var router = express.Router();
var Sanic = require('../models/sanic')



router.get('/sanics', function(req, res, next) {
  Sanic.find({}, function(err, sanic){
    if (err) {
      console.log("Driver.find all sanics error: ", err);
    } else {
      res.status(200).json({
        status: 'OK',
        sanic: sanic
      });
    }
  });
});

/* GET home page. */
router.get('/:sanic_id', function(req, res, next) {
  sanic_id = req.params.sanic_id;
  Sanic.find({'sanic_id': sanic_id}, function(err, sanic){
    if (err) {
      console.log("Driver.find all Sanics error: ", err);
    } else {
      res.status(200).json({
        status: 'OK',
        sanic: sanic
      });
    }
  });
});






module.exports = router;



// Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
//   if (err) return handleError(err);
//   console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
// })
