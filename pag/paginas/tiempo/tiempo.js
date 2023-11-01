function getWeather() {
    const apiKey = 'b91a275b40db05ec91d94fde6740d75a'; // Reemplaza con tu clave de API
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            
            // Verificar si se recibieron datos válidos
            if (data.name && data.sys && data.main && data.weather) {
                weatherInfo.innerHTML = `
                    <h2>El tiempo en ${data.name}, ${data.sys.country}</h2>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Descripción: ${data.weather[0].description}</p>
                `;
            } else {
                weatherInfo.innerHTML = 'No se encontraron datos para la ciudad especificada.';
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos meteorológicos', error);
        });
}
