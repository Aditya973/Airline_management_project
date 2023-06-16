const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:  data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flight.findAll(
                {
                    where:filterObject
                }
            );
            return flights;
        }
        catch(error){
            console.log("something went wrong on the repository layer");
            throw {error};
        }

    }

    async updateFlight(flightId,data){
        try {
            await Flight.update(data,{
                where:{
                    id: flightId
                }
            })
            return true;
        } catch (error) {
            console.log(error);
            console.log("something went wrong on the repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;