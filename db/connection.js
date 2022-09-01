const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lngbrds9!",
    database: "corey_tracker",
});

// connection.connect(function (err) {
//   if (err) throw err;
// });

module.exports = connection;