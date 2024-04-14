const apiKey = "913d119b8d052f1226b059b8eaa19c63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(city){
    let response = await fetch(apiUrl + `&q=${city}`+ `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".incorrectCity").style.display="block";
    }
    else{
        document.querySelector(".incorrectCity").style.display="none";
        var data = await response.json();

        
        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    var weatherImg = document.querySelector(".weatherImg");
    switch(data.weather[0].main)
    {
        case "Rain": weatherImg.src="rain.png"; 
                    return;
        case "Clouds": weatherImg.src="clouds.png"; return;
        case "Drizzle": weatherImg.src="drizzle.png"; return;
        
        case "Mist": weatherImg.src="mist.png"; return ;
        case "Clear": weatherImg.src="clear.png"; return ;
        case "Snow": weatherImg.src="snow.png";return ; 
        case "Haze": weatherImg.src="haze.png";return ; 
        default: weatherImg.src = "weather-app.png";return;
    }
    }
}

document.querySelector(".search button").addEventListener("click",()=>{
    checkWeather(document.querySelector(".search input").value);
})

