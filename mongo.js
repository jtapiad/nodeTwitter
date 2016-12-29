var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 't8O5k9HFwyLUlDNEaqnrTJfnE',
  consumer_secret: 'vac9xseTKAbsnOe6SlGTMyxDSTPp5APLTjwIiMzuRlhafDU83U',
  access_token_key: '45302210-uQCAUowNFHPRSWzYh7wzOp2yNj4b3uZ94SxmC3lYb',
  access_token_secret: 'W0NLPjYUI6OjAa6mmQ1KkVr3IEphR82liq423Eu5SHyUS'
});
var tuits = [];
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  var col = db.collection('twitter');
  client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
  	col.insertMany(tweets,function(err,result){
  		col.find().toArray(function(err,result){
  			for (let i = 0; i < result.length; i++) {
  				console.log(result[i].text);
  			}
  			console.log(result.length);
  		db.close();

  		})
  	});
  }
  // col.insert(tuits);
});

  
});