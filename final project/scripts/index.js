document.getElementById("copyrightYear").innerHTML = new Date().getFullYear()

document.getElementById("lastUpdated").innerHTML = new Date(document.lastModified).toLocaleString()


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const captionDesc = document.querySelector('figcaption');

const url = 
    'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&APPID=437e346f1d953d63444305b1748afbd3';

function calcWindChill(currentTemp, windSpeed) {
    return 35.74 + 0.6215 * currentTemp - 35.75 * (windSpeed)^0.16 + 0.4275 * currentTemp * (windSpeed)^0.16
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    windChill.innerHTML = calcWindChill(currentTemp, windSpeed);
    captionDesc.textContent = desc;
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }
    
apiFetch();