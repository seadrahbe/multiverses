// Import the express module
import express from "express";

import mysql2 from 'mysql2';

import dotenv from 'dotenv';

dotenv.config();

// Create an express application
const app = express();

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

app.get('/db-test', async (req, res) => {
    try {
        const poems = await pool.query('SELECT * FROM poems');
        res.send(poems[0]);
    } catch (err) {
       console.error('Database error:', err);
       res.status(500).send('Database error: ' + err.message);
    }
});

// Define a port number where server will listen
const PORT = 3009;

// Enable static file serving
app.use(express.static("public"));

// Set view engine to EJS
app.set("view engine", "ejs");

// "Middleware" allows express to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

const poems = [];

// Define our main route ('/')
// Default route
app.get("/", (req, res) => {
  res.render("home");
});

// Form route
app.get("/submit-poem", (req, res) => {
  res.render("form");
});

// Poem submission route
app.post("/submit-poem", (req, res) => {
  const rawTags = req.body.tags ?? "";
  const tagsString = Array.isArray(rawTags) ? rawTags.join(",") :
    String(rawTags);
  const tags = tagsString
  .split(",")
  .map(t => t.trim())
  .filter(Boolean);

  const poem = {
    author: req.body.author,
    title: req.body.title,
    tags, 
    date: req.body.date,
    poem_body: req.body.poem,
    timestamp: new Date()
  };

  poems.push(poem);

  res.render("confirmation", { poem });
});

// Admin route
app.get('/admin', async (req, res) => {
    try {
        // Fetch all orders from database, newest first
        const [poems] = await pool.query('SELECT * FROM poems ORDER BY timestamp DESC');  

        // Render the admin page
        res.render('admin', { poems });        

    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Error loading orders: ' + err.message);
    }
});

// Start server and listen on designated port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
