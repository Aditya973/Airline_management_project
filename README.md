/
    -src
        index.js
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
    -tests/[later]
    -static/
    -temp/

Airplane Table
    - Id
    -model_number
    -capacity
    -created_at
    -updated_at

Flights 
    -id
    -src_airport_id
    -dest_airport_id
    -departure_date
    -arrival_date
    -departure time
    -arrival time

city
    - id
    - name

Airport 
    -id
    -name
    -city_id
    -address

npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize db:migrate
npx sequelize db:migrate:undo

expose an api that can add multiple cities in one go(pass an array in req body,no loops at all)
write a crud for airports
Add an api in the City resource to get all the airports of the city