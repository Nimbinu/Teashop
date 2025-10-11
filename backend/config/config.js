const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/teashop',
  jwtSecret: process.env.JWT_SECRET || 'teashop_secret_key',
  jwtExpire: process.env.JWT_EXPIRE || '30d'
};