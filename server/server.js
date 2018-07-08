const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express(); 

app.use(express.static(publicPath));

//express static middleware
//port.listn 3000 message
//start in terminal
app.listen(port, () => {
	console.log(`Server is up on ${port}`);
})