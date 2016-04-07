$(document).ready(function(){

    var socket = io.connect(Config.clientHost + ':' + Config.clientPort);

    //get messages from server
    socket.on('progressbar', function (data) {
        console.log(data);

        renderProgressBar(data);
    });


    function renderProgressBar(persent)
    {
        $('#progressbar').width(persent + '%');
    }


});
