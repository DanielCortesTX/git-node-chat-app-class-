const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public')

var app = express(); 

app.use(express.static(publicPath));

app.get("/", (req, res) => {
	res.render('index.html');
});

//express static middleware
//port.listn 3000 message
//start in terminal
app.listen(3000, () => {
	console.log('Started on port 3000');
})