/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
//API URL Call Info: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const apiKey = '&appid=a2fea88075160726190f7a9ad4721097';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

//Create DOM selection variables
const getZip = document.getElementById('zip');
const getFeeling = document.getElementById('feelings');
const generateAction = document.getElementById('generate');

const getDate = document.getElementById('date');
const getLocation = document.getElementById('location');
const getTemp = document.getElementById('temp');
const getContent = document.getElementById('content');


//

// Event listener to add function to existing HTML DOM element
generateAction.addEventListener('click', performAction);

function performAction(e){
    const newZip = getZip.value;
    const newFeeling = getFeeling.value;
    getWeatherData(baseURL,newZip,apiKey)

        .then(function(data){
            console.log(data); // Used to see what data output
            const tempRounded = Math.round(data.main.temp) - 273; //Convert from Kelvin to Celsius
            postWeatherData('/add', {date:newDate,location:data.name,temp:tempRounded,content:newFeeling});
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
        //console.log(weatherInfo);
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
        getLocation.innerHTML = `${allData.location}`;
        getTemp.innerHTML = `${allData.temp} C`;
        getContent.innerHTML = `${allData.content}`
    }
    catch(error){
        console.log('error', error);
    }
}