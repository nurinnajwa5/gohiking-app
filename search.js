function buttonClicked(){

    var city = document.getElementById("city_input").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
    
        document.getElementById("p1").innerHTML = "City: " + data.name;
        //convert the temperature from kelvin to celcius
        var temperature = data.main.temp - 273.15;
        //display the temperature
        document.getElementById("p2").innerHTML = "Temperature: " + temperature.toFixed(2) + "℃";

        //display weather data
        for(var i=0; i<data.weather.length; i++){
            var weather = data.weather[i].main
            document.getElementById("p3").innerHTML = "Weather: " + weather;
        }

        //convert wind speed from metre per second to kilometre per hour
        var windspeed = (data.wind.speed*3600)/1000
        document.getElementById("p4").innerHTML = "Wind Speed: " + windspeed.toFixed(2) + " km/h";

        //convert sunrise data to datetime
        var sunrise = data.sys.sunrise;
        var sunrisechange = new Date(sunrise*1000)
        document.getElementById("p5").innerHTML = "Sunrise: " + sunrisechange;
        //convert sunset data to datetime
        var sunset = data.sys.sunset;
        var sunsetchange = new Date(sunset*1000)
        document.getElementById("p6").innerHTML = "Sunset: " + sunsetchange;
        
        //display whether the weather is suitable or not for hiking
        if (temperature >=5 && temperature <=30){
            if(weather=="Clouds" || weather=="Clear"){
                if(windspeed <= 38){
                    document.getElementById("p7").innerHTML = "The temperature, weather and windspeed in " + data.name + " is suitable for hiking!"
                }
                else{
                    document.getElementById("p7").innerHTML = "The temperature, weather and windspeed in " + data.name + " is NOT suitable for hiking. Please come another day for hiking."
                }
            }
            else{
                document.getElementById("p7").innerHTML = "The temperature, weather and windspeed in " + data.name + " is NOT suitable for hiking. Please come another day for hiking."
            }
        }
        else{
            document.getElementById("p7").innerHTML = "The temperature, weather and windspeed in " + data.name + " is NOT suitable for hiking. Please come another day for hiking."
        }
    } )
    document.getElementById("city_input").value = "";
}