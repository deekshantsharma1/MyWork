import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherApiController.getWeatherData';


export default class WeatherAPIApp extends LightningElement {

    city;
    weatherIcon;
    weatherText;

    handlecity(Event){
        this.city= Event.target.value;
    
    }

    handleGetWeather(){
        getWeatherData({city:this.city})
        .then(response=>{
console.log(response)
            let weatherParseData = JSON.parse(response);
            console.log(weatherParseData)
            
            this.weatherIcon = weatherParseData.current.condition.icon;
            this.weatherText = weatherParseData.current.condition.text;


        })

        .catch(error=>{
            this.weatherText ='No matchig city found.'
            console.error('----error---', JSON.stringify());

        })

    }
}

