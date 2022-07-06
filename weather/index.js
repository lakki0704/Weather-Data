function weather() {

    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    // const temperature = document.getElementById("data");



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=f96d6c32e339d569e99cde87ee3eaf9a`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                var temp = data.main.temp;
                var humidity = data.main.humidity;
                var windspeed = data.wind.speed;
                var temperature = document.getElementById("data");
                var humid = document.getElementById("humid");
                var wind = document.getElementById("wind");

                console.log(temp);
                console.log(humidity);
                temperature.innerHTML = "Temperature : " + (temp - 273.15).toFixed(2) + " deg celcius";
                humid.innerHTML = "Humidity : " + humidity.toFixed(2);
                wind.innerHTML = "Wind Speed : " + windspeed.toFixed(2);
            }
            if (data.main.temp == false) {
                var temperature = document.getElementById("data");
                temperature.innerHTML = "Please check your spellings";

            }
        });

}