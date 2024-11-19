const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const session = require('express-session');

const app = express();

// Middleware for sessions with expiration
app.use(
    session({
        secret: 'your_secret_key', // Replace with a secure key
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true, // Prevents client-side scripts from accessing the cookie
            maxAge: 10 * 1000, // Session expires after 10 sec (adjust as needed)
        },
    })
);

// Multer configuration
const storage = multer.memoryStorage(); // Store image in memory as binary data
const upload = multer({ storage: storage });

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL client setup
const pool = new Pool({
    user: 'postgres',       
    host: 'localhost',      
    database: 'admin',  
    password: 'Alpha 123.', 
    port: 5432,             
});

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.isAuthenticated) {
        return next(); // User is authenticated, proceed to the next middleware/route
    }
    res.redirect('/login'); // Redirect to login if not authenticated
}

// Route to display the login form
app.get('/login', (req, res) => {
    res.render('login', { errorMessage: null }); // Pass null as default for errorMessage
});

// Route to handle form submission (login)
app.post('/login', async (req, res) => {
    const username = req.body.username; // Get the username from the form
    const password = req.body.password; // Get the password from the form

    try {
        // Query to find the user in the 'admins' table by username
        const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);

        if (result.rows.length === 0) {
            // Username not found in the admins table
            return res.render('login', { errorMessage: 'Invalid username or password.' });
        }

        const user = result.rows[0];

        // Compare the input password with the stored password
        if (user.password === password) { // Replace with bcrypt.compare for hashed passwords
            req.session.isAuthenticated = true; // Set session authenticated flag
            res.redirect('/admin_dash'); // Redirect to admin dashboard
        } else {
            res.render('login', { errorMessage: 'Invalid username or password.' });
        }
    } catch (err) {
        console.error(err);
        res.render('login', { errorMessage: 'An error occurred. Please try again.' });
    }
});

// Route for admin dashboard (protected)
app.get('/admin_dash', isAuthenticated, (req, res) => {
    res.render('admin_dash');
});

// Route to log out and destroy the session
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/login'); // Redirect to login after logout
    });
});

// Route for the root path
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirect to the login page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
