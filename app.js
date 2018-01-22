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

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();