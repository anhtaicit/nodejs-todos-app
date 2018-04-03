var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get("/api/setupTodos", (req, res) => {
        // setup seed data
        var seedTodos = [
            {
                text: "Hoc nodejs",
                isDone: false
            },
            {
                text: "Hoc angularjs",
                isDone: false
            },
            {
                text: "Viet ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, (err, results) => {
            res.send(results);
        })
    });
}