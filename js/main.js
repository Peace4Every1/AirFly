// //Init storage
// const storage = new Storage();
// //Get stored location data
// const weatherLocation = storage.getLocationData();

//Initialize weather object
const weather = new Weather('Barcelona', 'Spain');
const weatherBr = new Weather('rio_de_janeiro', 'Brazil');

const weatherCh = new Weather('beijing', 'china');

const weatherDub = new Weather('dubai', 'uae');

const weatherPar = new Weather('paris', 'france');

const weatherLon = new Weather('london', 'uk');

const weatherNy = new Weather('new_york', 'new_york');

const weatherTag = new Weather('tagil', 'russia');

const weatherIce = new Weather('reykjavik', 'is');

const weatherIt = new Weather('rome', 'italy');

const weatherSw = new Weather('gothenburg', 'se');

const weatherJp = new Weather('tokyo', 'japan');


// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation();

function getWeather(){

    weather.getWeather()
    .then(results => {
        ui.paintA(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherBr.getWeather()
    .then(results =>{
        ui.paintB(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherCh.getWeather()
    .then(results =>{
        ui.paintC(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherDub.getWeather()
    .then(results =>{
        ui.paintD(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherPar.getWeather()
    .then(results =>{
        ui.paintE(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherLon.getWeather()
    .then(results =>{
        ui.paintF(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherNy.getWeather()
    .then(results =>{
        ui.paintG(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherTag.getWeather()
    .then(results =>{
        ui.paintH(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherIce.getWeather()
    .then(results =>{
        ui.paintI(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherIt.getWeather()
    .then(results =>{
        ui.paintJ(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherSw.getWeather()
    .then(results =>{
        ui.paintK(results);
        console.log(results);
    })
    .catch(err => console.log(err));

    weatherJp.getWeather()
    .then(results =>{
        ui.paintL(results);
        console.log(results);
    })
    .catch(err => console.log(err));
}
    //will return a promise, cos the getWeather is ASYNC


// const braz = weather.changeLocation('rio_de_janeiro', 'brazil');




        // weatherLocation.city, weatherLocation.state