// Import the express module
import express from "express";

// Create an express application
const app = express();

// Define a port number where server will listen
const PORT = 3009;

// Enable static file serving
app.use(express.static("public"));

// Set view engine to EJS
app.set('view engine', 'ejs');

// "Middleware" allows express to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

const poems = [];

// Define our main route ('/')
// Default route
app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Form route
app.get("/submit-poem", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/form.html`);
});

// Poem submission route
app.post('/submit-poem', (req, res) => {

    const poem = {
        author: req.body.author,
        title: req.body.title,
        tags: req.body.tags ? req.body.tags : "none",
        date: req.body.date,
        poem_body: req.body.poem,
        timestamp: new Date()
    };

    poems.push(poem);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Admin route
app.get("/admin", (req, res) => {
  res.render('admin', { poems })
});

// Start server and listen on designated port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
