/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
//API URL Call Info: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const apiKey = '&appid=a2fea88075160726190f7a9ad4721097';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

//Create DOM selection variables
const getDate = document.getElementById('date');
const getTemp = document.getElementById('temp');
const getContent = document.getElementById('content');
const getZip = document.getElementById('zip');
const getFeeling = document.getElementById('feelings');
const generateAction = document.getElementById('generate');

// Event listener to add function to existing HTML DOM element
generateAction.addEventListener('click', performAction);

function performAction(e){
    const newZip = getZip.value;
    const newFeeling = getFeeling.value;
    getWeatherData(baseURL,newZip,apiKey)

        .then(function(data){
            console.log(data);
            postWeatherData('/add', {date:d,temp:data.main.temp,content:newFeeling});
            updateUI();
        });
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL,zip,key) => {
    const res = await fetch(baseURL+zip+key)
    try {
        const weatherInfo = await res.json();
        return weatherInfo;
    } catch(error){
        console.log('error', error);
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

    console.log(response); 
    try {
        const weatherInfo = await response.json();
        console.log(weatherInfo);
        return weatherInfo;
    }
    catch(error){
        console.log('error',error);
    }
}

/* Function to get project data */
const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData);
        getDate.innerHTML = `${allData.date}`;
        getTemp.innerHTML = `${allData.temp}`;
        getContent.innerHTML = `${allData.content}`
    }
    catch(error){
        console.log('error', error);
    }
}

/* Function to GET Web API Data*/
// const getWeatherData = async(baseURL,newCity,apiKey) => {
//     const res = await fetch(baseURL+newCity+apiKey)

//     try {
//         const weatherInfo = await res.json();
//         console.log(weatherInfo);
//         return weatherInfo;
//     } 
//     catch(error){
//         console.log('error',error);
//     }
// }

/* Function to POST data */
// const postWeatherData = async(url='', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     });
// }

/* Function to GET Project Data */

/* Function called by event listener */
// const performAction = (e) => {
//     getWeather(baseURL,newCity,apiKey);
// }

// Event listener to add function to existing HTML DOM element
// document.getElementById('generate').addEventListener('click', performAction)
