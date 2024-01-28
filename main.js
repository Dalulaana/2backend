// for weather api
let lat = 52.299999;
let lon = 76.949997;

function display_weather (lat, lon) {
    let key = 'e12b69028265dc341d9b468ea6103a30';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data)

        // let rainVol = 0;
        // if (data.rain && data.rain['3h']) {
        //     rainVol = data.rain['3h'];
        // }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = `Temperature: ${Math.round(data.main.temp - 273)}` + '&deg;';
        document.querySelector('.description').innerHTML = data.weather[0].description;
        document.querySelector('.icon').innerHTML = `<img src="https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        document.querySelector('.lon').innerHTML = `Longitude: ${data.coord.lon}`;
        document.querySelector('.lat').innerHTML = `Latitude: ${data.coord.lat}`;
        document.querySelector('.feels-like-temp').innerHTML = `Feels like: ${Math.round(data.main.feels_like - 273)}°C`;
        document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
        document.querySelector('.pressure').innerHTML = `Pressure: ${data.main.pressure} hPa`;
        document.querySelector('.wind-speed').innerHTML = `Wind Speed: ${(data.wind.speed)} m/s`;
        document.querySelector('.country-code').innerHTML = `Country Code: ${data.sys.country}`;
        // document.querySelector('.rain-volume').innerHTML = `Rain Volume: ${rainVol} mm`;

        })
        .catch(console.error);
}

display_weather(lat, lon);

// for maps
var map = L.map('map').setView([lat, lon], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// meme api
(async () => {
    const url_m = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '74cc1f1248msh40fe9031f7ef4e3p1188f8jsnc144d818a1ad',
            'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url_m, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
