var db = require("../models");


module.exports = function(app) {

    app.post("/api/todos", function(req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Todo.create({
          text: req.body.text,
          complete: req.body.complete
        }).then(function(dbTodo) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbTodo);
        });
      });

}




