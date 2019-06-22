var db = require("../models");


module.exports = function(app) {

    app.post("/api/createuser", function(req, res) {
        var newUser= req.body.firstParam;

        db.user.create({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          password:newUser.password,
          favColor:newUser.favColor,
          firstCar: newUser.firstCar,
          username: newUser.username
        }).then(function(dbuser) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbuser);
        });
        
      });

    };




