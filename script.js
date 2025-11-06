const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check user credentials (replace with your own logic)
  if (username === 'user' && password === 'pass') {
    res.send('Login successful!');
  } else {
    res.send('Invalid credentials.');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
