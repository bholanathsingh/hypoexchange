var index = require('./index');
var bittrex=require('./bittrex');
var ups=require('./ups');

module.exports = function (app) {
    app.use('/bittrex',bittrex);
    app.use('/ups',ups);
    app.use('/api', index);
};
