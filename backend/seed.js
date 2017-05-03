// seed.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.SANIC_DB);

var Sanic = require('./models/sanic');

var sanicData = [
        {
          'sanic_id': 0,
          'url': 'http://www.briannedrouhard.com/images/sonicpoops.gif',
          'name': 'Sanic Sanderson',
          'stats': 'Speed'
        }, {
          'sanic_id': 1,
          'url': 'http://i.imgur.com/ZFGYvlL.gif',
          'name': 'Sanic Bronak',
          'stats': 'Brofessional'
        }, {
          'sanic_id': 2,
          'url': 'http://i.imgur.com/Af4W6eJ.gif',
          'name': 'Sanak Singh',
          'stats': 'AR/VR'
        }, {
          'sanic_id': 3,
          'url': 'http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif',
          'name': 'Sanic on Speed',
          'stats': 'Pills'
        }, {
          'sanic_id': 4,
          'url': 'http://i.imgur.com/xqAtBQn.gif',
          'name': 'Sanic Attack',
          'stats': 'Props'
        }, {
          'sanic_id': 5,
          'url': 'http://i.imgur.com/tK6IrC9.gif',
          'name': 'Sanic at the Disco',
          'stats': 'Beats'
        }
      ]

Sanic.create(sanicData, function(err, sanics) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Races inserted: ', sanics);
  process.exit();
});
