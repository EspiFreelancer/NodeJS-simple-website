var express = require('express');
var router = express.Router();

var contactController = {};

/* GET home page. */
contactController.show = function(req, res, next) {
	let data = {
		layout: 'layout.njk',
	}

	res.render('home.njk', data);
};

module.exports = contactController;