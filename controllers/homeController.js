var express = require('express');
var router = express.Router();

var homeController = {};

/* GET home page. */
homeController.show = function(req, res, next) {
	let data = {
		layout: 'layout.njk',
		title: 'sToy Robot',
	}

	res.render('home.njk', data);
};

module.exports = homeController;