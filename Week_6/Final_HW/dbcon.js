var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs290_griffiwy',
  password: 'Wyg13309',
  database: 'cs290_griffiwy'
});

module.exports.pool = pool;
