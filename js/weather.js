class Weather{
    constructor(city, state){
        this.apiKey='5e2a9c1410be5e84';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    //adding async means that it'll return a promise
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    //Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}
