var express = require('express');
var router = express.Router();
var Robot = require('../models/robotModel')


var productsController = {};

productsController.list = async function(req, res) {

	// Get data from the database
	try	{
		const arrayRobots = await Robot.find()
		console.log(arrayRobots)

		// Send content and render template
		let data = {
			arrayRobots: arrayRobots,
			layout: 'layout.njk',
			title: 'Nuestros Robots',
		}

		res.render('products.njk', data);

	} catch (error) {
		console.log(error)
	}

};

module.exports = productsController;