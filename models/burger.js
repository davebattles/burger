var orm = require('../config/orm.js');

var burger = {
  all: function(cb){
    orm.all('burgers', function(res){
      cb(res);
    })
  },

  update: function(id,cb){
    orm.update('burgers',id,cb);
  },

  create: function(names, cb){
    orm.create('burgers', names, cb);
  } 
}

module.exports = burger;