var express = require('express');
var Todo = require('../models/todo');
var router = express.Router();

router.get('/', function(req, res){
	Todo.find(function(err, todos){
		if(err) res.send(err);

		res.json(todos);
	});
})

router.post('/', function(req, res) {
    var todo = new Todo();
    todo.name = req.body.name;

    todo.save(function(err) {
    	if (err) res.send(err);

    	res.json({ message: 'Todo created!' });
    });
});

router.get('/:todo_id', function(req, res){
    Todo.findById(req.params.todo_id, function(err, todo){
        if(err) res.send(err);

        res.json(todo);
    });


});

router.put('/:todo_id', function(req, res){
    Todo.findById(req.params.todo_id, function(err, todo){
        if(err) res.send(err);

        todo.name = req.body.name;

        todo.save(function(err){
            if(err) res.json({ message: 'Error when updating!' });

            res.json({message: 'Todo updated!'});
        });
    });
});

router.delete('/:todo_id', function(req, res){
    Todo.remove({ _id: req.params.todo_id}, function(err){
        if(err) res.send(err);

        res.json({ message: 'Todo deleted!'});
    });
});

module.exports = router;