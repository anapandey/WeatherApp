// script coded by Ana Pandey
//getting device's current geolocation position
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
} else {
    console.log('Geolocation is Not available');
}

//setting co-ordinates based on current position
function getPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var weatherURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=d23737fe086028a8aeaea31d43a6817d";

 var forecastURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=d23737fe086028a8aeaea31d43a6817d";

     //to get search item input
    $(document).keypress(function(e) {
        var searchItem = $('#search').val();
        if (e.keyCode === 13) {
            e.preventDefault();
            if (searchItem != '') {
                weatherURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?" + 'q=' + searchItem + "&units=metric" + '&APPID=d23737fe086028a8aeaea31d43a6817d' ;
                forecastURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?" + 'q=' + searchItem + "&units=metric" + '&APPID=d23737fe086028a8aeaea31d43a6817d' ;
                
           



    $.getJSON(weatherURL, function(data) {
             console.log(data);
            $('#cityName').html(data.name + ', ' + data.sys.country);
            $('#forecast').html(data.weather[0].description);
            $('#wind').html('Wind' + ': ' + data.wind.speed * 3600 / 1000 + ' Km/h');
            $('#humidity').html('Humidity' + ': ' + data.main.humidity + '%');
            var celsius = (Math.round(data.main.temp));
         console.log(data.main.temp);
            var fahrenheit = Math.round(data.main.temp) * 9 / 5 + 32;
            var counter = 0;
            $('#temp').html(celsius + '&deg;C');
            //converts temperature unit with changed input (toggle button)
           $("input").change(function() {
               counter += 1;
                if (counter % 2 == 1) {
                    $('#temp').text(celsius + '  °C');
                } else {
                    $('#temp').text(fahrenheit + '  °F');

                }
            });

        }


    )
    $.getJSON(forecastURL,function(data){
        console.log(data);
            $('#forecasttwo').html(data.list[5].weather[0].description);
        
    });
                 }
        }
    });
}




/*
var unit = "&units=metric";
var apiKey = "&APPID=d23737fe086028a8aeaea31d43a6817d";
var locationAPI = 'http://ip-api.com/json/';
var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?';
var forecastAPI = 'http://api.openweathermap.org/data/2.5/forecast?';
var imgURL = 'http://openweathermap.org/img/w/';

$(document).ready(function() {
    //api call to get location data
    $.getJSON(locationAPI, function(data) {
        console.log(data.lat);
        var weatherURL = weatherAPI + 'lat=' + data.lat + '&lon=' + data.lon + unit + apiKey;
        var forecastURL = forecastAPI + 'lat=' + data.lat + '&lon=' + data.lon + unit + apiKey;
        getWeather(weatherURL, forecastURL);
    });
    //to get search item input
    $(document).keypress(function(e) {
        var searchItem = $('#search').val();
        if (e.keyCode === 13) {
            e.preventDefault();
            if (searchItem != '') {
                weatherURL = weatherAPI + 'q=' + searchItem + unit + apiKey;
                forecastURL = forecastAPI + 'q=' + searchItem + unit + apiKey;
                getWeather(weatherURL, forecastURL);
            }
        }
    });
});

//ajax call to get main weather data, first ajax call for current weather data
function getWeather(weatherURL, forecastURL) {

    $.ajax({
        url: weatherURL,
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            $('#cityName').html(data.name + ', ' + data.sys.country);
            $('#forecast').html(data.weather[0].description);
            $('#wind').html('Wind' + ': ' + data.wind.speed * 3600 / 1000 + ' Km/h');
            $('#humidity').html('Humidity' + ': ' + data.main.humidity + '%');
            var icon = data.weather[0].icon;
            var iconSrc = imgURL + icon + '.png';
            $('#iconOne').empty();
            $('#iconOne').prepend('<img src=" ' + iconSrc + ' ">');
            var celsius = (Math.round(data.main.temp));
            var fahrenheit = Math.round(data.main.temp) * 9 / 5 + 32;
            var counter = 0;
            $('#temp').html(celsius + '&deg;C');
            //converts temperature unit with changed input (toggle button)
            $("input").change(function() {
                counter += 1;
                if (counter % 2 == 1) {
                    $('#temp').text(celsius + '  °C');

                } else {
                    $('#temp').text(fahrenheit + '  °F');

                }
            });
        }

    });
    // for next day forecast data
    $.ajax({
        url: forecastURL,
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            $('#forecasttwo').html(data.list[5].weather[0].description);
            var icon = data.list[5].weather[0].icon;
            var iconSrc = imgURL + icon + '.png';
            $('#icontwo').empty();
            $('#icontwo').prepend('<img src=" ' + iconSrc + ' ">');

        }
    });

};

*/