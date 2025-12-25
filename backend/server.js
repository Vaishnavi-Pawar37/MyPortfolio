const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Your MySQL username
    password: 'Vaishnavi@123', // Your MySQL password
    database: 'portfolio_db'
});

db.connect(err => {
    if (err) console.error('Database connection failed: ' + err.stack);
    else console.log('Connected to MySQL Database');
});

// API Route to save contact form data
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    
    db.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Data saved successfully!" });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));