const express = require('express');
const { start } = require('repl');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//mysql connection
const connection = mysql.CreateConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Lngbrds9!',
    database: 'corey-tracker'

})
//connect to mysql then start server
connection.connect(function(err) {
    if (err) throw err;
    start();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});