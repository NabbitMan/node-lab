const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

// connect to mongo and create a database and a collection
MongoClient.connect(url, { useNewUrlParser: true }, function(err, conn) {
  if (err) throw err;
  console.log('Database created.');
  const db = conn.db('newdb');
  db.createCollection('users', function(err, res){
    if (err) throw err;
    console.log('Collection created');
    conn.close();
  });  
});