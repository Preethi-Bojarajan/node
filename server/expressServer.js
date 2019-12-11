let http = require('http');
let express = require('express');
let server = express();
let portNo = 6080;
let bodyParser = require('body-parser');
let restHandler = require('./restHandler');

module.exports = {
 startServer : function startServer() {
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded());
	/* server.get('/', (error, req, res, next) => {
		console.log('Cookies :  ', req.cookies);
	}); */
	server.use('/rest/api/latest',restHandler);
    let httpServer = http.createServer(server);
		httpServer.listen(portNo, () => {
			console.log(`Express listening on port ${portNo}`);
		});
    }
}