var express = require('express');
var router = express.Router();
var Robot = require('../models/robotModel')


var productController = {};


/* List all products */
productController.list = async function(req, res) {

	// Get data from the database
	try	{
		const arrayProducts = await Robot.find()
		console.log(arrayProducts)

		// Send content and render template
		let data = {
			arrayRobots: arrayProducts,
			layout: 'layout.njk',
			title: 'sToy Robot - Productos'
		}

		res.render('products.njk', data);

	} catch (error) {
		console.log(error)
	}

};

/* Detail product */
productController.show =  function(req, res){
    Robot.findOne({_id: req.params.id}).exec(function(err, product){
        if( err ){ console.log('Error: ', err); return; }
        
		// Send content and render template
		let data = {
			robot: product,
			layout: 'layout.njk',
			title: 'sToy Robot: ' + product.model
		}

        res.render('product_detail.njk', data );
    });
    
};

module.exports = productController;