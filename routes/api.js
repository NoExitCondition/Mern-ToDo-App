/*Dependencies*/
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

/*View all tasks 
  Will return all data and expose only id and action field to client
*/
router.get('/todos', (req, res, next) => {
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});

/*Create a task*/
router.post('/todos', (req, res, next) =>{
    if(req.body.action){
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }
    else{
        res.json({
            error: "The input field is empty"
        })
    }
});

/*Delete a task */
router.delete('/todos', (req, res, next) =>{
    Todo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;