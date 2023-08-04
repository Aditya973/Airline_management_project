const {FlightRepository,AirplaneRepository,AirportRepository} = require('../repositories/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepostory = new AirplaneRepository();
        this.airportRepository = new AirportRepository();
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

    async getAllFlightByCities(data){
        try {
            const departureCityId = data.departureCityId;
            const arrivalCityId = data.arrivalCityId;
            const departureAirports = await this.airportRepository.getAllAirports({cityId:departureCityId});
            // console.log(departureAirports);
            const arrivalAirports = await this.airportRepository.getAllAirports({cityId:arrivalCityId});
            // console.log(arrivalAirports);
            let totalFlights = [];
            for(const fromAirport of departureAirports){
                for(const toAirport of arrivalAirports){
                    let flights = await this.flightRepository.getAllFlights({
                        departureAirportId:fromAirport.id,
                        arrivalAirportId: toAirport.id
                    });
                    let flightsData = flights.map((flight)=>flight.dataValues);
                    // console.log(flightsData);
                    flightsData.forEach((item)=>{
                        totalFlights.push(item);
                    })
                }
            }
            // console.log(totalFlights);
            return totalFlights;
        } 
        catch (error) {
            console.log("something went wrong on the service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;