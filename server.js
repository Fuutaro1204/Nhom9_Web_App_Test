const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Node.js Demo - Nhóm 9' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login - Bảo mật Web' });
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Register - Bảo mật Web' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard - Nhóm 9' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});