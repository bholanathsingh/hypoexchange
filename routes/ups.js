var express = require('express');
var router = express.Router();
var shippo = require('shippo')('8D3D94D577AB682C');


/* GET home page. */
router.get('/', function(req, res) {
  
    shippo.address.create({
        'name' : 'Mr Hippo',
        'company' : 'SF Zoo',
        'street1' : '2945 Sloat Blvd',
        'city' : 'San Francisco',
        'state' : 'CA',
        'zip' : '94132',
        'country' : 'US',
        'phone' : '+1 555 341 9393',
        'email' : 'mrhippo@goshippo.com'
  }).then(function(address){
    console.log("shipment : %s", JSON.stringify(address));
  });

  res.send({send:'data'});

});


module.exports = router;
