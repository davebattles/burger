var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// router.get('/', function(req,res){
//   res.render('index');
// })

router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});
  })
})


router.put('/burgers/update',function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create',function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

app.get("/favicon.ico", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/favicon/favicon.ico"));
});

module.exports = router;