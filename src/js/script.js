const URL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apiKey = '894f491b1ba65bde37433d90eb193d01';

const userInput = document.getElementById('userInput');
const userButton = document.getElementById('userButton');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (location) => {
    const response = await fetch(URL + location + `&appid=${apiKey}`);
    let data = await response.json();
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'src/images/clouds.png';
            break;
        case 'Rain':
            weatherIcon.src = 'src/images/rain.png';
            break;
        case 'Clear':
            weatherIcon.src = 'src/images/clear.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'src/images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'src/images/mist.png';
            break;
    }
}

userButton.addEventListener('click', () => {
    let location = userInput.value
    if (location != '') {
        checkWeather(location);

        userInput.focus()
        userInput.value = ''
    }
});

userInput.addEventListener('keypress', (e) => {
    let location = userInput.value
    if (location != '') {
        if (e.key === 'Enter') {
            checkWeather(location);

            userInput.focus()
            userInput.value = ''
    }
}
});