const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');   
const ApiRoutes = require('./routes/index');
const dotenv = require('dotenv');
const db = require('./models/index');

const {City,Airport} = require('./models/index');
 
dotenv.config();

const setupAndStartServer = async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async ()=>{
        console.log("server listening to port ",PORT);
        console.log(process.env.SYNC_DB);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        const city = await City.findOne({
            where:{
                id:2
            }
        });
        const airports = await city.getAirports();
        console.log(airports);
    });
}
setupAndStartServer();