const express = require('express');
const app = express();

// handle HTTP GET requests from clients
app.get('/', (req, res) => res.send('Hello World'));

// listen on port 3000 on localhost to listen to HTTP requests
app.listen(3000, () => console.log('listening on port 3000'));

// From the terminal, run: node index.js
// Next, open the URL from the browser: http://localhost:3000