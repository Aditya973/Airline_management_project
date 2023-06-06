const { CityRepository } = require('../repositories/index');

class cityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }
    
    async createCity(){
        try{
            const city = await this.CityRepository.createCity();
            return city;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }

    async deletCity(cityId){
        try{
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.CityRepository.updateCity(cityId,data);
            return city;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }
    
    async getCity(cityId){
        try{
            const city = await this.CityRepository.getCity(cityId);
            return city;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }
}