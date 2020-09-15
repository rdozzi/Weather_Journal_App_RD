## Udacity Weather-Journal App Project
##### Raphael Dozzi - September 2020

### Overview
This project introduced me to asynchronous web app design using vanilla Javascript promises, the fetch API, and other tools like Javascript Node and Express. 

The program collects user input, a five digit zip code and personal "feeling" string, and then returns the feeling along with weather data from the zip code using the https://openweathermap.org API.

### Summary
A local server (__server.js__) is set up with an object endpoint to collect and store both user and selected parts of the API response from the Open Weather Map website.

The client side (__website/app.js__) is then used fetch the data and then update the UI dynamically. The content and styles are laid out using the __website/index.html__ and __website/style.css__ files respectively.