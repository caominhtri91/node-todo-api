const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then( (result) => {
	//console.log(result);
//} );

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove({})


Todo.findByIdAndRemove('58c553022a39dc5c67608b37').then( (doc) => {
	console.log(doc);
} );
