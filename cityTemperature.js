import { LightningElement, track } from 'lwc';

export default class CityTemperature extends LightningElement {
  @track city = '';
  @track weatherData;
  @track error;

  get hasWeatherDescription() {
    // Check if weather data and description exist
    return this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0;
  }

  get weatherDescription() {
    // Safely return the weather description
    return this.hasWeatherDescription ? this.weatherData.weather[0].description : '';
  }

  handleCityChange(event) {
    this.city = event.target.value;
  }

  async fetchTemperature() {
    if (!this.city) {
      this.error = 'Please enter a city name.';
      this.weatherData = null;
      return;
    }

    const apiKey = '<6a260bdc64063cd35e66d4a42beddb21>';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${'6a260bdc64063cd35e66d4a42beddb21'}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Unable to fetch data. Please check the city name.');
      }
      const data = await response.json();

      // Ensure the response contains the expected properties
      if (!data || !data.main || !data.weather) {
        throw new Error('Unexpected response format from the API.');
      }

      this.weatherData = data;
      this.error = null;
    } catch (err) {
      this.weatherData = null;
      this.error = err.message;
    }
  }
}
