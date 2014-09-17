var net = require('net'),
	server = net.createServer();

	sockets = [];

	server.on('connection', function (socket){
		console.log('got a new connection');

		sockets.push(socket);

		socket.on('data', function (data){
			console.log('got: ', data);

			sockets.forEach(function (otherSockets){
				if(otherSockets !== socket){
					otherSockets.write(data);
				}
			});
		});

		socket.on('close', function (){
			console.log('connection closed')
			var index = sockets.indexOf(socket);
			sockets.splice(index, 1);
		})
	});




	server.on('error', function (err){
		console.log('Server error: ', err.message);
	});

	server.on('close', function (){
		console.log('Bye bye', 'Server now closed');
	});

	server.listen(4001);