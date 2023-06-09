const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try{
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message : 'succesfully created an airport',
            err: {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to create an airport',
            err: error
        });
    }
}

const destroy = async (req,res) =>{
    try{
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data : response,
            success : true,
            message : 'successfully deleted the airport',
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to delete the airport',
            err: error
        });
    }
}

const get = async (req,res) => {
    try{
        const airport = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data : airport,
            success: true,
            message: 'successfully fetched the airport',
            err: {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to fetch the airport',
            err: error
        });
    }
}

const update = async (req,res) => {
    try{
        const airport =  await airportService.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'successfully updated the airport',
            err: {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to update the airport',
            err: error
        });
    }

}

const getAll = async (req,res) => {
    try{
        const airports = await airportService.getAllAirports(req.query);
        return res.status(201).json({
            data : airports,
            success: true,
            message : 'successfully fetched all the airports',
            err:{}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to fetch the airports',
            err: error
        });
    }
}

module.exports = {create,destroy,get,update,getAll};