const { CityService } = require('../services/index');

const cityService = new CityService();

// POST -> /city
const create = async (req,res)=>{
    try{
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success : true,
            message : 'Succesfully created a city',
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success : false,
            message : 'Not able to create a city',
            err : error
        });
    }
}

// DELETE ->    /city/:id
const destroy = async (req,res) => {
    try{
        const response = await cityService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success : true,
            message : 'Succesfully delete the city',
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success : false,
            message : 'Not able to delete the city',
            err : error
        });
    }
}

//GET -> /city/:id
const get = async (req,res) => {
    try{
        const city = await cityService.get(req.params.id);
        return res.status(201).json({
            data: city,
            success : true,
            message : 'successfully fetched the city',
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success : false,
            message : 'Not able to get the city',
            err : error
        });
    }
}

//PATCH -> /city/:id -> req.body
const update = async (req,res) => {
    try{
        const city = await cityService.update(req.params.id,req.body);
        return res.status(201).json({
            data : city,
            success:true,
            message : 'successfully updated a city',
            err : {}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success : false,
            message : 'Not able to update the city',
            err : error
        });
    }
}

const getAll = async (req,res) =>{
    // res.header("Access-Control-Allow-Origin", "*");
    try{
        const cities = await cityService.getAll(req.query);
        return res.status(201).json({
            data : cities,
            success : true,
            message: 'successfully fetched all the cities',
            error : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get all the cities',
            err : error
        })
    }
}

module.exports = {create,destroy,update,get,getAll};