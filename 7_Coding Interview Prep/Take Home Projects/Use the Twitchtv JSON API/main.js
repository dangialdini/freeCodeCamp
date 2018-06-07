function getTwitchStream() {
    var status;
    var game;
    var logo;
    var channel;
    var link;
    //var accounts = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var accounts = ['freecodecamp'];
    var url = '';

    accounts.forEach(function(account) {
        function makeUrl(type, account) {
            return 'https://wind-bow.gomix.me/twitch-api/'+type+'/'+account+'?callback=?';
        }
        $.getJSON(makeUrl('channels', account), function (data) {
            debugger;
            channel = data.display_name;
            logo = data.logo;
            // game = data.game;
            // status = data.status;
            link = data.url;
        });
        $.getJSON(makeUrl('streams', account), function(data){
            debugger;
            if (data.stream == null) {
                status = 'offline';
                game = 'Offline'
            } else {

            }
        });
    });



}