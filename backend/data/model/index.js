const mongoose = require('mongoose');

const todo = require('./todo');

const connction = require('./connection');

mongoose.onConnection(console.log('models working'));


Todo.findByTitle('Title', function(err, title) {
        if (err) throw err(
          console.log('Title Not Found'))
        else{
         console.log('Title successfully found');
         }
});


Todo.findByUid('#', function(err, Uid) {
  if (err) throw err(console.log('# not found'))
  else{console.log('# Found')
  }
});


module.exports = Models;