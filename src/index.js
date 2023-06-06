const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');   
 
const CityRepository = require('./repositories/city-repositories');
const city = require('./models/city');

const setupAndStartServer = async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log("server listening to port ",PORT);
        const repo = new CityRepository();
        repo.createCity({name : "jabalpur"});
    });
}
setupAndStartServer();