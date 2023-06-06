const { CityRepository } = require('../repositories/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    
    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city; 
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }

    async deletCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }
    
    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(e){
            console.log("something went wrong in the service layer");
            throw(e);
        }
    }
}

module.exports = CityService;