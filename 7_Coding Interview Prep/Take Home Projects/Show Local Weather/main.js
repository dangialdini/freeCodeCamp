$(document).ready(function () {
    var longitude;
    var latitude;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            $.ajax({
                url: "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude +
                    "&lon=" + longitude,
                success: function (response) {
                    $('#location').html(response.name);
                    $('#temperature').html(Math.round(response.main.temp));
                    $('#description').html(response.weather[0].description);
                    $('#icon').attr('src', response.weather[0].icon);
                }
            });
        });
    }
    $('#toggle-temp').click(function () {
        var newTemp;
        var currentTemp = $('#temperature').html();
        var currentTempUnit = $('#temperature-unit').html();

        if(currentTempUnit == 'C'){
            newTemp = currentTemp  * 9 / 5 + 32;
            $('#temperature').html(Math.round(newTemp));
            $('#temperature-unit').html('F');
        }
        else {
            newTemp = (currentTemp - 32)  * 5 / 9;
            $('#temperature').html(Math.round(newTemp));
            $('#temperature-unit').html('C');
        }
    });
});