var io = require('socket.io')(3000);

var redis = require("redis");
var subscriber = redis.createClient();

//subscriber.subscribe('progress-chanel');
//
//subscriber.on("message", function(channel, message) {
//  console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
//});


io.sockets.on('connection', function (socket) {

    console.log('client connected');

    subscriber.subscribe('progress-chanel');

    subscriber.on("message", function(channel, message) {
        console.log("Message '" + message + "' on channel '" + channel + "' arrived!")

        //send message to browser
        socket.emit('progressbar', message);
    });

    //send message to browser
    //socket.emit('progressbar', { hello: 'world' });

    socket.on('disconnect', function () {
        console.log('client disconnected');
    });

});

