document.getElementById("copyrightYear").innerHTML = new Date().getFullYear()

document.getElementById("lastUpdated").innerHTML = new Date(document.lastModified).toLocaleString()

// fruits json pull
const fruiturl = './fruits.json';

async function fruitAPI() {
    try {
        const response = await fetch(fruiturl);
        if (response.ok) {
        const fruits = await response.json();
        console.log(fruits); // this is for testing the call
        displayFruit(fruits);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }

function displayFruit(fruits) {
    const fruit1select = document.getElementById('fruit1');
    const fruit2select = document.getElementById('fruit2');
    const fruit3select = document.getElementById('fruit3');

    fruitOption(null, fruit1select);
    fruitOption(null, fruit2select);
    fruitOption(null, fruit3select);

    fruits.forEach(fruit => {
        fruitOption(fruit, fruit1select);
        fruitOption(fruit, fruit2select);
        fruitOption(fruit, fruit3select);
    });

function fruitOption(fruit, select) {
    const child = document.createElement('option');
        if (fruit != null) {
            child.innerHTML = fruit.name;
            child.value = fruit.name;
        }
        select.appendChild(child);
}   
}

// Weather API
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const captionDesc = document.querySelector('figcaption');

const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&APPID=437e346f1d953d63444305b1748afbd3';

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
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
fruitAPI();