function onGeoOk(position){
    API_KEY = 'ca8a3e0085e27915a4447bec96c34bf2';
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#top-bar span:first-child");
            const city = document.querySelector("#top-bar span:last-child");
            city.innerText = `${data.name} /`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
        });

}   
function onGeoError(){
    alert("You can't use weather service.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);