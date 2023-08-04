const {FlightService} = require('../services/index');
const { SuccessCodes, ServerErrors } = require('../utils/error-codes')

const flightService = new FlightService();

const create = async (req,res) => {
    try{
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data : flight,
            success : true,
            message : 'successfully created a flight',
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to create the flight',
            err: error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data : flights,
            success : true,
            message : 'successfully fetched the flights',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to fetch the flights',
            err: error
        })
    }
}

const get = async (req,res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message : 'successfully fetched the flight',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to fetch the flight',
            err: error
        })
    }
}

const update = async (req,res) => {
    try {
         const response = await flightService.updateFlight(req.params.id,req.body);
         return res.status(200).json({
            data: response,
            success:true,
            message: 'successfully updated the flight',
            err: {}
         })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to fetch the flight',
            err: error
        })
    }
}

const getAllFlightsBetweenCities = async(req,res) => {
    try {
        const flights = await flightService.getAllFlightByCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data : flights,
            success : true,
            message : 'successfully fetched the flights',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to fetch the flights',
            err: error
        })
    }
}
module.exports = {create,getAll,get,update,getAllFlightsBetweenCities};

