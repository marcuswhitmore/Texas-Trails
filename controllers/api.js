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
      // app.get("/api/posts/category/:category", function(req, res) {
      //   db.Post.findAll({
      //     where: {
      //       category: req.params.category
      //     }
      //   })
      //     .then(function(dbPost) {
      //       res.json(dbPost) ;
      //     });
      // });
      app.get("/api/authenticate/", (req, res) => {
      
       console.log(req.query.user);
        db.user.findOne({

          where:{
            username:req.query.user,
            password:req.query.p
          }
        }).then(function(dbuser) {
          console.log(dbuser)
          
          res.json(dbuser)
          
        })
       
        });
       
       

    };




