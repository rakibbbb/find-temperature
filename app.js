document.getElementById('search-btn').addEventListener('click', function(){
    const city = document.getElementById('input-city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=269ddc5246d5ddf5a53e67131e8c7c05`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.name;
            document.getElementById('city-name').innerText = cityName;

            const mainData = data.main;
            const temperature = mainData.temp;
            document.getElementById('temp-value').innerText = temperature;
            document.getElementById('deg-f').style.display = "block";

            const weather = data.weather;
            const desc = weather.map(weather => weather.main);
            document.getElementById('description').innerText = desc;

        })
    .catch(err => alert('City not found'));
})