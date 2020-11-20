var express = require('express');
var router = express.Router();

var contactController = {};

/* GET home page. */
contactController.show = function(req, res, next) {
	let data = {
		layout: 'layout.njk',
		title: 'sToy Robot - Contacto'
	}

	res.render('contact.njk', data);
};

module.exports = contactController;