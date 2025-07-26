require('dotenv').config()
bodyParser = require('body-parser')

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

//middleware

app.use('/public', express.static(__dirname + '/public'))

app.use('/', (req, res, next) => {
	message = `${req.method} ${req.path} - ${req.ip}`;
	console.log(message);
	next();
});

app.use(bodyParser.urlencoded({extended: false}));


//routes

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

app.get('/now',
	(req,res,next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({time: req.time});
	}
);

app.get('/:word/echo',
	(req,res) =>{
		res.json({ echo: req.params.word });
	}
);

app.get('/name',
	(req, res) => {

		let name_string = `${req.query.first} ${req.query.last}`
		res.json({ name: name_string });
	}
);






























 module.exports = app;
