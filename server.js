const db = require('./db/connection');
// const mysql = require("mysql2");
const express = require("express");
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });



// Deafualt response for any other request (Not found)
app.use((req, res) => {
  res.status(404).end();
});


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });