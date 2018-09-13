const express = require('express');
const path = require('path');
const app = express();

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* 
setup where app looks up static files - js, css, images
static files will be referenced with a prefix - /static. For eg. /static/css/style.css
/static is a virtual file path; it doesn't exist physically
*/
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('listening on port 3000'));