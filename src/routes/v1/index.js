const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const FlightMiddleware = require('../../middlewares/flight-middleware');

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);
router.get('/airport',AirportController.getAll);
router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAll);
router.post('/airplane',AirplaneController.create);
router.get('/airplane',AirplaneController.getAll);
router.get('/airplane/:id',AirplaneController.get);
router.get('/flight/:id',FlightController.get);
router.get('/flight',FlightController.getAllFlightsBetweenCities);
router.patch('/flight/:id',FlightController.update);

module.exports = router;