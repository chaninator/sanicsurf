
module.exports = function(server){
  //var Votes = require('./models/Votes')

  // this will be the domain where our frontend is located
  url = 'http://localhost:4000'

  var io = require('socket.io')(server, {origins: url});

  function updateVotes () {
    //Votes.find... the vote talley and emit
    io.emit('vote tally', {newTally})
  }

  function getWinner() {

  }

  let started = false

  io.on('connect', function(socket){
    if (started) {
      console.log('A user connected and the ')
      socket.emit('start')
    }
    console.log('a fucking computer connected via socket.io: ')

    // if admin sends start, broadcast start to others connected
     // io.on('start', function(){
    socket.on('start-game', () => {
      started = true
      io.emit('start')
      console.log('Game start has been pressed')
    })
    // })

    // listen for a vote from a user
    socket.on('vote', function(vote){
      // save the vote to the DB, then call updateVotes()
      // to send everything as an update
      //Votes.save(vote)
      console.log('vote value:', vote)
      //updateVotes()
    })

    // when admin declares complete, send everybody results
    socket.on('complete', function() {
      winner = getWinner()
      io.broadcast.emit('complete', winner)
    })
  })
}


/* socket listeners to create:
******************************/
// backend -> admin
//   - votes for Sanic

// backend-> user
//   - start event
//   - race stats (votes, location, etc)
//   - race location update
//   - race winner

// admin -> backend
//   - start event

// user -> backend
//   - logged in and waiting
//     - user info
//   - Vote for Sanic
