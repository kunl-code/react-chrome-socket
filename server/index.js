var http = require('http');
var socket = require('socket.io');


var server = http.createServer();
var io = module.exports.io = socket(server);

const PORT =  process.env.PORT || 1231;

const socketManager = require('./socketManager.js');

io.on('connection', socketManager);

server.listen(PORT, () => {
    console.log('connected to port: 1231');
});