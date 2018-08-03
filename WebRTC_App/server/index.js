'use strict';

const os = require('os');
const nodeStatic = require('node-static');
const fs = require('fs');
const https = require('https');
const socketIO = require('socket.io');
var express = require('express');  
var app = express();  
const path = require("path");

// Yes, TLS is required
const serverConfig = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem'),
};

app.get('/', function(request, response, next) {
	console.log('request received: ' + request.url);
	response.sendFile(path.join(__dirname, '../client/', 'index.html'));
});

app.use(express.static('client'));

const httpsServer = https.createServer(serverConfig, app);
httpsServer.listen(8080, '0.0.0.0');

// ----------------------------------------------------------------------------------------

// Create a server for handling websocket calls
var io = socketIO.listen(httpsServer);
io.sockets.on('connection', function(socket) {

	// convenience function to log server messages on the client
	function log() {
		var array = ['Message from server:'];
		array.push.apply(array, arguments);
		socket.emit('log', array);
	}

	socket.on('message', function(message) {
		log('Client said: ', message);
		// for a real app, would be room-only (not broadcast)
		socket.broadcast.emit('message', message);
	});

	socket.on('create or join', function(room) {
		log('Received request to create or join room ' + room);

		var clientsInRoom = io.sockets.adapter.rooms[room];
		var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

		log('Room ' + room + ' now has ' + numClients + ' client(s)');

		if (numClients === 0) {
			socket.join(room);
			log('Client ID ' + socket.id + ' created room ' + room);
			socket.emit('created', room, socket.id);

		} else if (numClients === 1) {
			log('Client ID ' + socket.id + ' joined room ' + room);
			io.sockets.in(room).emit('join', room);
			socket.join(room);
			socket.emit('joined', room, socket.id);
			io.sockets.in(room).emit('ready');
		} else { // max two clients
			socket.emit('full', room);
		}
	});

	socket.on('ipaddr', function() {
		var ifaces = os.networkInterfaces();
		for (var dev in ifaces) {
			ifaces[dev].forEach(function(details) {
				if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
					socket.emit('ipaddr', details.address);
				}
			});
		}
	});
});


const rclnodejs = require('../../rclnodejs/index.js');

rclnodejs.init().then(() => {
	const node = rclnodejs.createNode('subscription_example_node');

	node.createSubscription('std_msgs/msg/String', 'call_button_state', (msg) => {
		console.log(`Received message: ${typeof msg}`, msg);
		io.emit('message', String(msg.data));
	});

	rclnodejs.spin(node);
});