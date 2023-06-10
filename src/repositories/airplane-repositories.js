const { Airplane } = require('../models/index');

class AirplaneRepository{
    async getAirplane(airplaneId){
        try{
            const airplane = Airplane.findByPk(airplaneId);
            return airplane;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;