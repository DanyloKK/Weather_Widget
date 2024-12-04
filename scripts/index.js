"use strict";
/*
const lat = 45.657974;
const lon = 25.601198;
const apiKey = "64db660f3bcd4fe50dfe661901e547f6";
const resetButton = document.querySelector(".reset");

function sendRequest() {
    const getWeather = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    getWeather
        .then((weatherResult) => weatherResult.json())
        .then(weatherData => {
            const temperature = weatherData.main.temp;
            const getCelcius = Math.floor(temperature - 273.15);
            const findTempBlock = document.querySelector(".temperature");
            findTempBlock.textContent = `${getCelcius} C`;
            const pressure = weatherData.main.pressure;
            const findPressureBlock = document.querySelector(".pressure");
            findPressureBlock.textContent = `Pressure:${pressure}`
            const humidity = weatherData.main.humidity
            const findHumidity = document.querySelector(".humidity");
            findHumidity.textContent = `Humidity:${humidity}`
            const getWindSpeed = weatherData.wind.speed;
            const findWindSpeedBlock = document.querySelector(".wind")
            findWindSpeedBlock.textContent = `Wind: ${getWindSpeed} mp/h SSE`
            const feelsLikeTemp = weatherData.main.feels_like;
            const toCelcius = Math.floor(feelsLikeTemp - 273.15)
            const findFeelsTemp = document.querySelector(".temperature-two")
            findFeelsTemp.textContent = `${toCelcius} C`
            const conditionWeather = weatherData.weather[0].description;
            const findWeatherCond = document.querySelector(".condition")
            findWeatherCond.textContent = `${conditionWeather}`
        })

}

function timeLocal() {
    const currentDate = new Date();
    const getHours = currentDate.getHours().toString().padStart(2, "0")
    const getMinutes = currentDate.getMinutes().toString().padStart(2, "0")
    const getSeconds = currentDate.getSeconds().toString().padStart(2, "0")
    const time = `${getHours}:${getMinutes}:${getSeconds}`
    const findTimeBlock = document.querySelector(".time")
    findTimeBlock.textContent = time
}

function dateLocal() {
    let now = new Date();
    let year = now.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[now.getMonth()];
    let dayOfMonth = now.getDate();
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayName = days[now.getDay()];
    const dateBlock = document.querySelector(".date")
    dateBlock.textContent = `${month} ${dayOfMonth}, ${year} - ${dayName}`
    const dateTime = document.querySelector(".date-time")
    const getHours = now.getHours().toString().padStart(2, "0")
    const getMinutes = now.getMinutes().toString().padStart(2, "0")
    dateTime.textContent = `${month} ${dayOfMonth} ${getHours}:${getMinutes}`
}

dateLocal();
setInterval(() => {
    timeLocal()
    dateLocal()
}, 1000)
const currentDate = new Date();
const dateString = currentDate.toLocaleDateString();``
resetButton.addEventListener("click", sendRequest)
sendRequest()

 */
