const dotenv = require('dotenv');

dotenv.config();

const obj = {
    PORT : process.env.PORT
}

module.exports = obj;