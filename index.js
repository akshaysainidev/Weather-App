document.addEventListener('DOMContentLoaded',()=>{
    const searchBtn=document.getElementById("searchBtn");
    const temp=document.querySelector(".temp");
    const city=document.querySelector(".city");
    const inputCity=document.getElementById("cityInput");
    const humidity=document.querySelector(".humidity");
    const windSpeed=document.querySelector(".wind");
    const weatherIcon=document.querySelector(".weather-icon");

    const apiKey="760d53909fe97acef0a02e5b995f0837";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric`;
    async function checkWeather() {
        try{
            const response = await fetch(apiUrl+`&q=${inputCity.value}`+`&appid=${apiKey}`);
            var data= await response.json();
            if(response.status==404)
            {
                document.querySelector(".error").style.display="block"

            }
            else
            {
                document.querySelector(".error").style.display="none";
                console.log(data);
                temp.textContent=`${data.main.temp}°C`;
                city.textContent=`${data.name}`
                humidity.textContent=`${data.main.humidity}%`;
                windSpeed.textContent=`${data.wind.speed} km/h`;
                let weather=data.weather[0].main;
                console.log(weather);
                switch(weather){
                    case 'Clear':
                        weatherIcon.src="images/clear.png";
                        break;
                    case 'Clouds':
                        weatherIcon.src="images/clouds.png";
                        break;
                    case 'Drizzle':
                        weatherIcon.src="images/drizzle.png";
                        break;
                    case 'Mist':
                        weatherIcon.src="images/mist.png";
                        break;
                    case 'Rain':
                        weatherIcon.src="images/rain.png";
                        break;
                    default:
                        weatherIcon.src="images/snow.png";
                }
            }
        }
        catch(error){
            console.log(error);
        }

    }
    searchBtn.addEventListener('click',checkWeather);
})


// {
//     "coord": {
//         "lon": 77.2167,
//         "lat": 28.6667
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 43.94,
//         "feels_like": 40.99,
//         "temp_min": 43.94,
//         "temp_max": 43.94,
//         "pressure": 997,
//         "humidity": 10,
//         "sea_level": 997,
//         "grnd_level": 972
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.85,
//         "deg": 292,
//         "gust": 6.49
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1749548914,
//     "sys": {
//         "country": "IN",
//         "sunrise": 1749513164,
//         "sunset": 1749563316
//     },
//     "timezone": 19800,
//     "id": 1273294,
//     "name": "Delhi",
//     "cod": 200
// }
