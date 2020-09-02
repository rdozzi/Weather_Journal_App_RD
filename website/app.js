/* Global Variables */

// Personal API Key for OpenWeatherMap API
//API URL Call Info: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const apiKey = 'a2fea88075160726190f7a9ad4721097';
const baseURL = 'api.openweathermap.org/data/2.5/weather?q=';
// const newCity = document.getElementById('city').value;

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction)

/* Function called by event listener */
const performAction = (e) => {
    getWeather(baseURL,newCity,apiKey);
}

/* Function to GET Web API Data*/
const getWeather = async(baseURL,newCity,apiKey) => {
    const res = (baseURL+newCity+apiKey);
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */