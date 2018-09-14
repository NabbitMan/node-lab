const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true}, function(err, conn) {
  const dbo = conn.db('newdb');
  let obj = {
    name: 'Tonmoy Chow',
    city: 'Kolkata',
    country: 'India',
    mobile: '9090565667'
  };
  dbo.collection('users').insertOne(obj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + ' document(s) inserted');
  });

  let objs = [
    {name: 'Tom', city: 'Kolkata'},
    {name: 'John', city: 'NJ'},
    {name: 'Van', city: 'Indie'},
    {name: 'Sam', city: 'London'},
    {name: 'Will', city: 'Minneapolis'},
  ];

  dbo.collection('users').insertMany(objs, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + ' document(s) inserted');
  });
  conn.close();
});