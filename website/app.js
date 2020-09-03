/* Global Variables */

// Personal API Key for OpenWeatherMap API
//API URL Call Info: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const apiKey = 'a2fea88075160726190f7a9ad4721097';
const baseURL = 'api.openweathermap.org/data/2.5/weather?q=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Function to GET Web API Data*/
const getWeatherData = async(baseURL,newCity,apiKey) => {
    const res = await fetch(baseURL+newCity+apiKey)

    try {
        const weatherInfo = await res.json();
        console.log(weatherInfo);
        return weatherInfo;
    } 
    catch(error){
        console.log('error',error);
    }
}

/* Function to POST data */
const postWeatherData = async(url='', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}

/* Function to GET Project Data */

/* Function called by event listener */
// const performAction = (e) => {
//     getWeather(baseURL,newCity,apiKey);
// }

// Event listener to add function to existing HTML DOM element
// document.getElementById('generate').addEventListener('click', performAction)