// const { AirportService } = require('.');
const { AirplaneRepository } = require('../repositories');
const CrudService  = require('./crud-service');

class AirplaneService extends CrudService{
    constructor(){
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }
}

module.exports = AirplaneService;