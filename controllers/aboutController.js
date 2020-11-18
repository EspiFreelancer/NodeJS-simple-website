var express = require('express');
var router = express.Router();

var aboutController = {};

/* GET home page. */
aboutController.show = function(req, res, next) {
	let data = {
		layout: 'layout.njk',
	}

	res.render('about.njk', data);
};

module.exports = aboutController;