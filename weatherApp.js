import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WeatherApp extends LightningElement {
    city = '';  // Store user input for the city
    weatherData = {};  // To store fetched weather data
    isWeatherLoaded = false;  // Flag for checking if weather data is loaded
    errorMessage = '';  // To store error messages

    // Handler for the input change
    handleCityChange(event) {
        this.city = event.target.value;
        this.getWeatherData();  // Call to get weather data on city change
    }

    // Fetching weather data from OpenWeatherMap API
    async getWeatherData() {
        if (!this.city) return;
        
        const apiKey = '2737e5aadcdb46350629eab36a72c196';  // Replace with your actual OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${'2737e5aadcdb46350629eab36a72c196'}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                this.weatherData = data;
                this.isWeatherLoaded = true;
                this.errorMessage = '';
            } else {
                this.weatherData = {};
                this.isWeatherLoaded = false;
                this.errorMessage = data.message || 'City not found.';
            }
        } catch (error) {
            this.weatherData = {};
            this.isWeatherLoaded = false;
            this.errorMessage = 'Error fetching weather data.';
        }
    }

    // Get weather icon URL
    get weatherIcon() {
        if (this.weatherData.weather && this.weatherData.weather[0]) {
            return `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`;
        }
        return '';
    }

    // Get temperature in Celsius
    get temperature() {
        return this.weatherData.main ? this.weatherData.main.temp : '--';
    }

    // Get weather description
    get weatherDescription() {
        return this.weatherData.weather && this.weatherData.weather[0]
            ? this.weatherData.weather[0].description
            : '';
    }

    // Get city and country info
    get city() {
        return this.weatherData.name || '--';
    }

    get country() {
        return this.weatherData.sys ? this.weatherData.sys.country : '--';
    }
}
