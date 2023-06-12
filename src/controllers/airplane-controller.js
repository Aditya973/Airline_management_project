const { AirplaneService }  = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const airplaneService = new AirplaneService();

const create = async (req,res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success:true,
            message:'successfully created',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success: false,
            message : 'failed to create',
            err: error
        });
    }
}
const destroy = async (req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            data : {},
            success: false,
            message : 'failed to delete',
            err: error
        });
    }
}
const get = async (req,res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data : airplane,
            success: true,
            message: 'successfully fetched',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success: false,
            message : 'failed to fetch',
            err: error
        });
    }
}
const update = async (req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            data : {},
            success: false,
            message : 'failed to update',
            err: error
        });
    }
}
const getAll = async (req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            data : {},
            success: false,
            message : 'failed to fetch',
            err: error
        });
    }
}

module.exports = {
    create,getAll,get,destroy,update
}
