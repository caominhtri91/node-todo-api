const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// delete many
	//db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
		//console.log(result);
	//});

	// delete one
	//db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
		//console.log(result);
	//});

	//find one and delete
	//db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
		//console.log(result);
	//});
	

	//db.collection('Users').deleteMany({name: 'xem'}).then( (result) => {
		//console.log(result);
	//});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('58c188a3333738bbb1439b14')
	}).then( (result) => {
		console.log(result);
	});
	
	//db.close();
});
