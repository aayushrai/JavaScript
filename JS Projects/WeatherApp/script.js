const apiKey = "597aacea84a3fa90620802a09d633c28";

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${apiKey}`;
    console.log(FULL_URL);
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response)=>{
        return response.json()
    })
}

const searchCity = () => {
    const city = document.getElementById('search').value;
    console.log(city)
    getWeatherData(city)
    .then((response) =>{
        console.log(response);
        showData(response);
    }).catch((error)=>{
        console.log(error);
    })
}

const showData = (data) => {
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("min-temp").innerHTML = data.main.temp_min;
    document.getElementById("max-temp").innerHTML = data.main.temp_max;
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("weather-type").innerHTML = data.weather[0].main;

}
