const {FlightRepository,AirplaneRepository} = require('../repositories/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepostory = new AirplaneRepository();
    }
    
    async createFlight(data){
        try{
            if(!compareTime(data.departureTime,data.arrivalTime)){
                throw {error:"departure time cannot be greater than arrival time"};
            }
            const airplane = await this.airplaneRepostory.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log("something went wrong on the service layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong on the service layer");
            throw {error};
        }
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        }
        catch(error){
            console.log("something went wrong on the service layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data){
         try {
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
         } catch (error) {
            console.log("something went wrong on the service layer");
            throw {error};
         }
    }
}

module.exports = FlightService;