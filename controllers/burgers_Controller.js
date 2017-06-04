var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require('../models/');


//Index Page (render all burgers to DOM)
router.get("/", function(req, res){
  res.redirect("/burgers");
})

router.get('/burgers', function(req, res) {
    db.Burger.findAll().then(function(data) {
      var hbsObject = {burgers: data}
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post('/', function(req, res) {
    db.Burger.create({ 
      burger_name: req.body.burger_name }, 
      { devoured: req.body.devoured 
      }).then(function(data) {
        res.redirect('/');
    });
});

router.post('/burgers/devour/:id', function(req, res) {
  console.log(req.body);
    db.Burger.update({ devoured: true}, 
    {
      where: {id:req.body.burger_id }
    }).then(function(data) {
      res.redirect('/')
    });
});

module.exports = router;