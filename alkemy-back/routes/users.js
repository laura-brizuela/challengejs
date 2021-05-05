var express = require('express');
var router = express.Router();
var userModel = require('./../models/users.model')


/* GET users listing. */
router.get('/', function(req, res, next) {


  let usersResponse = userModel.getUsers();
  console.log(usersResponse);
  res.send(usersResponse);
});


router.post("/",function(req, res, next){
  res.send("Dani")
})

module.exports = router;
