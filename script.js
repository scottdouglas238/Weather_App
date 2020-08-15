$(document).ready(function () {

    $(".btn-search").on("click", function () {
        

        let cityNameInput = $("#citySearch").val();
        // let APIKey = "81b8efee373b3e6d158e294464dbc522";
        let cityQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&apid=81b8efee373b3e6d158e294464dbc522";

        $.ajax({
            url: cityQueryURL,
            method: "GET"
        })
            .then(function (response) {//response is now an object the stored data is in
                console.log(response);



            });
    });






})

