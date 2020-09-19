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
    }).catch((error)=>{
        console.log(error);
    })
}