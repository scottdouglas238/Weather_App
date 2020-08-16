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
                temperature = ((returnedWeather[3].temp - 273.15) * 1.80 + 32).toFixed(1);
                // console.log(temperature);
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
                                // console.log(response3);

                                var fiveDayForecast = Object.values(response3);
                                // console.log(fiveDayForecast);
                                var targetedF5 = fiveDayForecast[3].slice(2, 40);
                                console.log(targetedF5);
                                //for loop goes here
                                
                                
                                
                                // function pushToHash(key, value) {
                                //     for (var t = 0, x = 0; t < value.length; t++, x += 2) {
                                //         MQHash[key[t]] = value.slice(0, lineLength[x]);
                                //     }
                                // }
                               
                            //   while(element.length < 5){
                                
                                  for (var x = 0, y = 0; x < targetedF5.length; x++, y += 8) {
                                    var element = targetedF5[y];
                                    
                                // var fDate5 = element.dt_txt.slice(5, 10) + "-" + element.dt_txt.slice(0, 4);
                                // var iconNumber5 = element.weather[0].icon;
                                // var temperature5 = ((element.main.temp - 273.15) * 1.80 + 32).toFixed(2);
                                var humidity5 = element.main.humidity;
                                console.log(humidity5);
                                // console.log(fiveDayForecast);
                                // console.log();
                                
                                // var card5 = $("<div>");
                                // card5.attr("class", "card text-white bg-primary mb-3 w-25 blueCard");
                                // var newResult5 = $("<div>");
                                // newResult5.attr("id", "new-result5");
                                // newResult5.attr("class", "card-body");
                                // var fDateFive = $("<h3>");
                                // fDateFive.attr("class", "card-title").text(fDate5);
                                // fDateFive.attr("id", "dateFont")
                                // var iconNumberFive = $("<h3>");
                                // iconNumberFive.attr("class", "card-text").append("<img src = 'http://openweathermap.org/img/wn/" + iconNumber5 + "@2x.png'>");
                                // var temperatureFive = $("<h3>");
                                // temperatureFive.attr("class", "card-text").text("Temp: " + temperature5 + " °F");
                                // var humidityFive = $("<h3>");
                                // humidityFive.attr("class", "card-text").text("Humidity: " + humidity5 + "%");
                                // newResult5.append(fDateFive, iconNumberFive, temperatureFive, humidityFive);
                                // $("#fiveDayForecast").append(card5);
                                // card5.append(newResult5);
                                }
                        //    }
                            
            


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
                                windSpeedD.attr("class", "card-text").text("Wind Speed: " + windSpeed + " MPH");
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
    // console.log(date);
});









