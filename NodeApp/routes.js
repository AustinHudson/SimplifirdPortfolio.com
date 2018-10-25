var request = require('request');

module.exports = function(app) {

    app.get('/api/stories', function(req, res) {
        request('https://api.iextrading.com/1.0/stock/market/news/last/10', { json: true }, function (error, response, body) {
             console.log('fetching general news stories'); 
             res.jsonp(body);
           }) 
        })

    app.get('/api/getStories', function(req, res) {
        request('https://api.iextrading.com/1.0/stock/' + req.query.symbol + '/news/last/10', { json: true }, function (error, response, body) {
            console.log('fetching selected news stories for ' + req.query.symbol); 
            res.jsonp(body);
          }) 
    })
    
    app.get('/api/basicInfo/', function(req, res) {
        request('https://api.iextrading.com/1.0/stock/' + req.query.symbol + '/quote?displayPercent=true', { json: true }, function (error, response, body) {
             console.log('fetching basic stock info for ' + req.query.symbol); 
             res.jsonp(body);
           }) 
    })

    app.get('/api/gainers', function(req, res) {
        request('https://api.iextrading.com/1.0/stock/market/list/gainers?displayPercent=true', { json: true }, function (error, response, body) {
             console.log('fetching top gainers'); 
             res.jsonp(body);
           }) 
    })

    app.get('/api/losers', function(req, res) {
        request('https://api.iextrading.com/1.0/stock/market/list/losers?displayPercent=true', { json: true }, function (error, response, body) {
            console.log('fetching top losers'); 
            res.jsonp(body);
          }) 
    })

    app.get('/api/sectors', function(req, res){
        request('https://api.iextrading.com/1.0/stock/market/sector-performance?displayPercent=true', { json: true }, function (error, response, body) {
            console.log('fetching sector performances'); 
            res.jsonp(body);
          }) 
    })

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};