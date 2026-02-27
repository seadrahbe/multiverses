// Import the express module
import express from 'express';

// Create an express application
const app = express();

// Define a port number where server will listen
const PORT = 3009;

// Enable static file serving
app.use(express.static('public'));

// "Middleware" allows express to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

const poems = [];

// Define our main route ('/')
// Default route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Form route
app.get('/submit-poem', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/form.html`);
});

app.post('/submit-poem', (req, res) => {
    const poem = {
        author: req.body.author,
        title: req.body.title,
        tags: req.body.tags,
        date: req.body.date,
        poem: req.body.poem
    };

    poems.push(poem);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Start server and listen on designated port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});