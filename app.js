var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testuser',
  password : 'test',
  database : 'test_db'
});

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err);
        return;
    }

    console.log('connected to ' + connection.threadId);
});

var sql = 'SELECT * from test_db.foo where foo_id = ?;';
var value = 1;

connection.query({
  sql: sql,
  values: [value]
}, function (error, results, fields) {
  if (error) throw error;

  for(var i = 0; i < results.length; i++){
    console.log('foo_id: ' + results[i].foo_id + '. foo_name: ' + results[i].foo_name);
  }
});

connection.end();