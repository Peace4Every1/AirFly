class UI{
    constructor(){
        this.barca = document.getElementById('a');
        
        this.brazil = document.getElementById('b');
        
        this.china = document.getElementById('c');
        
        this.dubai = document.getElementById('d');
        
        this.france = document.getElementById('e');
        
        this.london = document.getElementById('f');
        
        this.ny = document.getElementById('g');
        
        this.tagil = document.getElementById('h');
        
        this.reykyavik = document.getElementById('i');
        
        this.rome = document.getElementById('j');
        
        this.stockholm = document.getElementById('k');
        
        this.tokyo = document.getElementById('l');
        
    }

    paintA(weather){
        this.barca.textContent = `Temp:${weather.temperature_string}
        Current conditions:${weather.weather}`;
    }

    paintB(weatherBr){
        this.brazil.textContent = `Temp:${weatherBr.temperature_string}
        Current conditions:${weatherBr.weather}`;
    }

    paintC(weatherCh){
        this.china.textContent = `Temp:${weatherCh.temperature_string}
        Current conditions:${weatherCh.weather}`;
    }

    paintD(weatherDub){
        this.dubai.textContent = `Temp:${weatherDub.temperature_string}
        Current conditions:${weatherDub.weather}`;
    }

    paintE(weatherPar){
        this.france.textContent = `Temp:${weatherPar.temperature_string}
        Current conditions:${weatherPar.weather}`;
    }

    paintF(weatherLon){
        this.london.textContent = `Temp:${weatherLon.temperature_string}
        Current conditions:${weatherLon.weather}`;
    }

    paintG(weatherNy){
        this.ny.textContent = `Temp:${weatherNy.temperature_string}
        Current conditions:${weatherNy.weather}`;
    }

    paintH(weatherTag){
        this.tagil.textContent = `Temp:${weatherTag.temperature_string}
        Current conditions:${weatherTag.weather}`;
    }

    paintI(weatherIce){
        this.reykyavik.textContent = `Temp:${weatherIce.temperature_string}
        Current conditions:${weatherIce.weather}`;
    }

    paintJ(weatherIt){
        this.rome.textContent = `Temp:${weatherIt.temperature_string}
        Current conditions:${weatherIt.weather}`;
    }

    paintK(weatherSw){
        this.stockholm.textContent = `Temp:${weatherSw.temperature_string}
        Current conditions:${weatherSw.weather}`;
    }

    paintL(weatherJp){
        this.tokyo.textContent = `Temp:${weatherJp.temperature_string}
        Current conditions:${weatherJp.weather}`;
    }
}

