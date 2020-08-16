$(document).ready(function () {

    $(".btn-search").on("click", function () {


        let cityNameInput = $("#citySearch").val();

        let cityQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&appid=81b8efee373b3e6d158e294464dbc522";

        $.ajax({
            url: cityQueryURL,
            method: "GET"
        })
            .then(function (response) {//response is now an object the stored data is in
                // console.log(response)
                var returnedWeather = Object.values(response);
                var returnedWeather2 = Object.values(response.weather[0]);
                // console.log(returnedWeather);
                cityNm = returnedWeather[11];
                cityName = returnedWeather[11] + " " + "(" + date + ")";
                temperature = Math.round((returnedWeather[3].temp - 273.15) * 1.80 + 32);
                humidity = returnedWeather[3].humidity;
                windSpeed = returnedWeather[5].speed;
                iconNumber = (returnedWeather2[3])
                latitude = returnedWeather[0].lat;
                longitude = returnedWeather[0].lon;


                let UvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=81b8efee373b3e6d158e294464dbc522&lat=" + latitude + "&lon=" + longitude;
                $.ajax({
                    url: UvQueryURL,
                    method: "GET"
                })
                    .then(function (response2) {
                        const returnedWeather2 = Object.values(response2);
                        var ultraViolet = returnedWeather2[4];
                        // console.log(ultraViolet)

                        let forecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityNm + "&appid=81b8efee373b3e6d158e294464dbc522"
                        $.ajax({
                            url: forecast,
                            method: "GET"
                        })
                            .then(function (response3) {
                                console.log(response3);
                                
                                var fiveDayForecast = Object.values(response3);
                                var fDate = fiveDayForecast[3][0].dt_txt.slice(5, 10) + "-" + fiveDayForecast[3][0].dt_txt.slice(0, 4);
                                var iconNumber5 = fiveDayForecast[3][0].weather[0].icon;
                                var temperature5 = Math.round((fiveDayForecast[3][0].main.temp - 273.15) * 1.80 + 32);
                                
                                console.log(fiveDayForecast);
                                console.log(temperature5);
                                //     for (let i = 0; i < returnedWeather.length; i++) {
                                //     let returned = returnedWeather[i];

                                //     //creating elements of the card dynamically
                                var card = $("<div>");
                                card.attr("class", "card");
                                var newResult = $("<div>");
                                newResult.attr("id", "new-result");
                                newResult.attr("class", "card-body");
                                var cityNameD = $("<h3>");
                                cityNameD.attr("class", "card-title").append(cityName + "<img src = 'http://openweathermap.org/img/wn/" + iconNumber + "@2x.png'>");
                                var temperatureD = $("<h3>");
                                temperatureD.attr("class", "card-text").text("Temperature: " + temperature + " °F");
                                var humidityD = $("<h3>");
                                humidityD.attr("class", "card-text").text("Humidity: " + humidity + "%");
                                var windSpeedD = $("<h3>");
                                windSpeedD.attr("class", "card-text").text("WindSpeed: " + windSpeed + " MPH");
                                var ultraVioletD = $("<h3>");
                                ultraVioletD.attr("class", "card-text").text("UV Index: " + ultraViolet)
                                //append to the card
                                newResult.append(cityNameD, temperatureD, humidityD, windSpeedD, ultraVioletD);
                                $("#results").append(card);
                                card.append(newResult);

                            })
                    })



            });
    });
    var date = moment().format('MMMM Do YYYY')
    console.log(date);
});









