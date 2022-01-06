const path = require('path');
const express = require('express');
const app = express();
const port = 5000;
app.set('view engine', 'ejs');


const mainRouter = require('./routes/main') 
app.use(mainRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, function() {
    console.log(`Example app listing on port ${port}!`)
});
