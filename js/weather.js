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













//Brazil/rio_de_janeiro.json`;

//     async getWeather3(){
//         q/china/Beijing.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather4(){
//         q/dubai/uae.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather5(){
//         q/france/paris.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather6(){
//         q/uk/london.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather7(){
//         q/ny/new_york.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather8(){
//         q/russia/tagil.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather9(){
//         q/reykjavik/iceland.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather10(){
//         q/italy/rome.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather11(){
//         q/sweden/stockholm.json`);

//          response.json();

//         return responseData.current_observation;
//     }
//     async getWeather12(){
//         q/japan/tokyo.json`);

//          response.json();

//         return responseData.current_observation;
//     }


//     
