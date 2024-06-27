document.addEventListener('DOMContentLoaded', () => {
       const form = document.getElementById('location-form');
       const locationInput = document.getElementById('location-input');
       const weatherInfo = document.getElementById('weather-info');
       const locationName = document.getElementById('location-name');
       const weatherDescription = document.getElementById('weather-description');
       const temperature = document.getElementById('temperature');
       const humidity = document.getElementById('humidity');
       const windSpeed = document.getElementById('wind-speed');
     const apiKey = 'YOUR_API_KEY_HERE';
    form.addEventListener('submit', async (e) => {
           e.preventDefault();
           const location = locationInput.value;
           const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try {
               const response = await fetch(apiUrl);
               const data = await response.json();
   
               if (data.cod === 200) {
                   locationName.textContent = `${data.name}, ${data.sys.country}`;
                   weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
                   temperature.textContent = `Temperature: ${data.main.temp}°C`;
                   humidity.textContent = `Humidity: ${data.main.humidity}%`;
                   windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
   
                   weatherInfo.classList.remove('hidden');
               } else {
                   alert('Location not found. Please enter a valid location.');
               }
           } catch (error) {
               console.error('Error fetching weather data:', error);
               alert('An error occurred while fetching weather data. Please try again later.');
