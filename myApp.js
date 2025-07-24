require('dotenv').config()

let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.use('/', (req, res, next) => {
	message = `${req.method} ${req.path} - ${req.ip}`;
	console.log(message);
	next();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {

	let response;
	if (process.env.MESSAGE_STYLE === 'uppercase'){
		response = "HELLO JSON";
	}
	else{
		response = "Hello json";
	}

	res.json({"message": response});

});



































 module.exports = app;
