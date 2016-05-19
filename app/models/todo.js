var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   text : {type : String, default: ''},
   remove: {type: Boolean, default: false},
   snoz: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);
