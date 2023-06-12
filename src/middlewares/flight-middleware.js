const {ClientErrors}  = require('../utils/error-codes');

const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price 
    ){
        return res.status(ClientErrors.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'invalid request body for create Flight',
            err : 'missing mandatory properties to create a flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}