$(document).ready(function () {

    $(".btn-search").on("click", function (e) {
        e.preventDefault();

        var cityNameInput = $("#citySearch").val();
        var cityAPIKey = "fe3159840b5c26414006c3611a7f67ab";
        var cityQueryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&api-key=" + cityAPIKey;

        $.ajax({
            url: cityQueryURL,
            method: "GET"
        })
            .then(function (response) {//response is now an object the stored data is in
                console.log(response);



            });
    });






})

