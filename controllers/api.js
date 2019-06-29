var db = require("../models");


module.exports = function(app) {
//calls for user
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
        
          res.json(dbuser);
        });
        
      });
     
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
        //calls for user posts
        app.get("/api/userposts/", function(req, res) {
          console.log(req.query.id)
          db.user.findOne({
            where: {
              id: req.query.id
            },
            include: [db.userPosts]
          }).then(function(response) {
            res.json(response);
          });
        });
        // call for getting single user
        app.get("/api/getuser/", function(req, res) {
          
          
          db.user.findOne({
            where: {
              id: req.query.id
            },
          }).then(function(response) {
            res.json(response);
          });
        });

        // add a post
        app.post("/api/newposts", function(req, res) {
          var newPost= req.body.firstParam;
            console.log(newPost);
          db.userPosts.create({
            trailname:newPost.trailname ,
            name:newPost.name,
            userId:newPost.userId
          }).then(function(dbuserPosts) {
          
            res.json(dbuserPosts);
          });
          
        });
       

    };
    




