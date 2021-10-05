var city = ""
var APIKey="01ba57fd295b828746a188dea79c4db5"


function presentCity(city){
    city = $("#city_search").val()
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url : weatherURL,
        method : "GET",
    }).then(function(response){
        console.log(response);
        var cityN = city.toUpperCase()
        var date = new Date(response.dt*1000).toLocaleDateString();
        var icon = response.weather[0].icon;
        var iconImage = "<img src= 'https://openweathermap.org/img/w/" + icon + ".png'/>"
        $(".city-name").html(" " + cityN + " (" + date + ") " + iconImage)
        console.log(iconImage)
        var temp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
        $("#temperature").text(" " + temp + "°F")
        var humd = (response.main.humidity);
        $("#humidity").text(" " + humd + "%")
        var wind = (response.wind.speed);
        $("#wind_speed").text(" " + wind + "mph")
        var lon = (response.coord.lon)
        var lat = (response.coord.lat)
        var UVIAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
        $.ajax ({
            url : UVIAPI,
            method : "GET",
        }).then(function(response){
            console.log(response)
            var UVIn = (response.current.uvi);
        $("#uvi").text(" " + UVIn)
        if (UVIn <= 4) {
            $("#uvi").css("background-color", "green")
        }
        else if (UVIn >= 5 && UVIn <= 7) {
            $("#uvi").css("background-color", "yellow")
        }
        else {
            $("#uvi").css("background-color", "red")
        }
        })

    })


    // function forecast(city){
        // var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + APIKey;
        // $.ajax({
        //     url : forecastURL,
        //     method : "GET",
        // }).then(function(response){
        //     console.log(response)
        //     for (i=0; i<5; i++) {
                
        //         var dt = ((response.list[((i+1)*8)-1].dt) * 1000);
        //         var date = new Date(dt)
        //         var dateFormat = date.toLocaleString
        //         $("#date1").text(dateFormat)
        //         console.log(dateFormat)
        //     }
        // })
    // }
}



$("#sbutton").on("click", presentCity)