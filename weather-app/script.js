// Initialize Leaflet map
let map = L.map('map').setView([20, 77], 5); // Default center (India)

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to fetch weather and update map
async function getWeather() {
    const location = document.getElementById("locationInput").value;
    if (!location) {
        alert("Please enter a location!");
        return;
    }

    const weatherApiKey = "b2b062f9f7a9a729420bb5b1179d8ca1"; 
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("Location not found!");
            return;
        }

        document.getElementById("weather").innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>${data.weather[0].description}</p>
        `;

        updateMap(data.coord.lat, data.coord.lon);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to update map location and add a marker
function updateMap(lat, lon) {
    map.setView([lat, lon], 10); // Move and zoom to new location

    // Remove old markers
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add a new marker
    L.marker([lat, lon]).addTo(map)
        .bindPopup("Location Selected").openPopup();
}
