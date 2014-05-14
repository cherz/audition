var express = require('express');
var router = express.Router();
var fs = require('fs'),
    json;


// Read Database.json
fs.readFile('data/Database.json', "utf8", function (err,data) {

	if (err) {
		return console.log(err);
	}
  
	try {
		json = JSON.parse(data);
	}
	catch (e) {
		console.log(e);
	}

});


/* Get Product Grid */
router.get('/', function(req, res) {

	res.render('index', {products : json});

});

/* Get Product */
router.get('/product', function(req, res) {

	var sid = req.query.sid;
	var product;

	// Locate the product. If not found, display Product Not Found via product.jade
  	for(var i in json) {
  		if (json[i].style_id === sid) {
  			product = json[i];
  			console.log(product);
  			break;
  		}
  	}
  	
  	res.render('product', {product : product});

});

module.exports = router;
