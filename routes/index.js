'use strict';

module.exports = function(app) {
	// Landing Page
    app.get('/', function(req, res) {
    	var title = "Whoami Microservice";
        res.render('index', {title: title});
    });

    app.get('/api/whoami', function(req, res) {
        var headers = req.headers;
        var obj = {"ipaddress":req.ip,
        	   "Language":headers['accept-language'],
        	   "Software":headers['user-agent']
        	   };
   		res.json(obj);
    });
};