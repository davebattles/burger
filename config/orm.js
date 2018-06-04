var connection = require('./connection.js');

var orm = {
  all: function(tableInput, cb){
    connection.query('select * from '+tableInput+';', function(err, results){
      if (err) throw err;
      cb(results)
    })
  },

  update: function(tableInput, condition, cb){
    connection.query('update '+tableInput+' set devoured=true where id='+condition+';', function(err,result){
      if(err)throw err;
      cb(result);
    })
  },
  create: function(tableInput,val,cb){
    connection.query('insert into '+tableInput+" (burger_name) values ("+val+");", function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
}



module.exports = orm;
