var express = require('express');
var router = express.Router();
var bittrex = require('node-bittrex-api');

bittrex.options({
  'apikey' : 'e663bd7c5c454a28b6b4d4b147de9d4b',
  'apisecret' : '66c0014fbe4949a68a54a5d40325c3bf',
});


/* GET home page. */
router.get('/', function(req, res, next) {
  bittrex.getmarkethistory( function( data, err ) {
    if (err) 
      return console.error(err);

      res.send(data.result);
  });
});


/* GET home page. */
router.get('/getbalance', function(req, res, next) {
    bittrex.getbalance({ currency : 'BTC' }, function( data, err ) {
      if (err)
        return console.error(err);
      res.send(data);
    });
});


router.get('/getorderbook', function(req, res, next) {
    bittrex.getorderbook({ market : 'BTC-XVG', depth : 10, type : 'both' }, function( data, err ) {
      if (err)
      return console.error(err);
    res.send(data);
    });
});

router.get('/getorderhistory', function(req, res, next) {
      bittrex.getorderhistory({ market : 'BTC-XVG', depth : 10, type : 'both' },function( data, err ) {
        if (err)
        return console.error(err);
      res.send(data);
      });     
});


router.get('/getmarketsummaries', function(req, res, next) {
    bittrex.getmarketsummaries(function( data, err ) {
      if (err)
        return console.error(err);
        res.send(data);
    });
});

router.get('/getopenorders', function(req, res, next) {
    bittrex.getopenorders({ market : 'BTC-XVG'},function( data, err ) {
      if (err)
        return console.error(err);
        res.send(data);
    });
});  

router.get('/getmarketsummary', function(req, res, next) {
    bittrex.getmarketsummary({ market : 'BTC-XVG'},function( data, err ) {
      if (err)
        return console.error(err);
        res.send(data);
      });
});

// trade buy

router.get('/tradebuy', function(req, res, next) {
    bittrex.tradebuy({
        MarketName: 'BTC-XVG',
        OrderType: 'LIMIT',
     // Quantity: 745.0,
     // Rate: 0.00000067,
        TimeInEffect: 'IMMEDIATE_OR_CANCEL', // supported options are 'IMMEDIATE_OR_CANCEL', 'GOOD_TIL_CANCELLED', 'FILL_OR_KILL'
        ConditionType: 'NONE', // supported options are 'NONE', 'GREATER_THAN', 'LESS_THAN'
        Target: 0, // used in conjunction with ConditionType
        },function( data, err ) {
        if (err)
          return console.error(err);
          res.send(data);
        });  
});
  
// trade sale

router.get('/tradesell', function(req, res, next) {
          bittrex.tradesell({
          MarketName: 'BTC-XVG',
          OrderType: 'LIMIT',
          Quantity: 1.00000000,
          Rate: 0.04423432,
          TimeInEffect: 'IMMEDIATE_OR_CANCEL', // supported options are 'IMMEDIATE_OR_CANCEL', 'GOOD_TIL_CANCELLED', 'FILL_OR_KILL'
          ConditionType: 'NONE', // supported options are 'NONE', 'GREATER_THAN', 'LESS_THAN'
          Target: 0, // used in conjunction with ConditionType
          },function( data, err ) {
            if (err)
            return console.error(err);
          res.send(data);
          });         
});


router.route('/buylimit')
.post(function (req, res) {
  console.log(req.body);
  bittrex.buylimit(req.body,function( data, err ) {
        if (err)
        res.send(err);
        res.send(data);
    }); 
});


router.route('/selllimit')
.post(function (req, res) {
  console.log(req.body);
  bittrex.selllimit(req.body,function( data, err ) {
        if (err)
        res.send(err);
        res.send(data);
    }); 
});

module.exports = router;
