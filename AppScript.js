let weather = {
    apiKey: "92a26c998500c36ac94be6acbb94c13a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, main, description } = data.weather[0];
        const { temp, feels_like, pressure, humidity } = data.main;
        const { visibility } = data;
        const { speed } = data.wind;
        const { all } = data.clouds;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".Main").innerText = main;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " Km/h";
        document.querySelector(".feelsLike").innerText = "Feels Like: " + feels_like + " °C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + " mBar";
        document.querySelector(".visibility").innerText = "Visibility: " + visibility + " Km";
        document.querySelector(".cloud").innerText = "Clouds:" + all + " %";

        document.querySelector(".weather").classList.remove("loading");

        let weatherType = document.getElementById('Main');

        if (weatherType.textContent == "Clouds") {
            document.body.style.backgroundImage = "url('img/cloubs.jpg')"
        }
        else if (weatherType.textContent == "Thunderstorm") {
            document.body.style.backgroundImage = "url('img/thunderstromre.jpg')"
        }
        else if (weatherType.textContent == "Drizzle") {
            document.body.style.backgroundImage = "url('img/Rain.jpg')"
        }
        else if (weatherType.textContent == "Rain") {
            document.body.style.backgroundImage = "url('img/Rain.jpg')"
        }
        else if (weatherType.textContent == "Clear") {
            document.body.style.backgroundImage = "url('img/clear.jpg')"
        }
        else if (weatherType.textContent == "Snow") {
            document.body.style.backgroundImage = "url('img/snow.jpg')"
        }
        else {
            //if not working use this :)
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + main + "')"
            //
        }
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};



document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Gwalior");

let date = document.getElementById('date');
let todaydate = new Date();
date.innerText = dateManager(todaydate);


function dateManager(dateArg) {
    let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    let dinak = (month + ',' + date + " " + year + "  (" + day + ")");

    return dinak;

}