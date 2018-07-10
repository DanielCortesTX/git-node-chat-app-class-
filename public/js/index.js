var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

   
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});

// socket.on('logOn', function(message){
// 	console.log(`${message.from} says:`, message.text);
// });

// socket.on('join', function (message) {
// 	console.log(message.text);
// })

// new message and create
//from text created at
//from, text