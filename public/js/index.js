var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
    	from: 'Daniel',
    	text: 'Yup that works for me.'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});

// new message and create
//from text created at
//from, text