const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": process.env.DB_DEV_USER, 
    "password": process.env.DB_DEV_PASS, 
    "database": process.env.DB_DEV_NAME, 
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "tutortimesDB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_STAGING_USER,
    "password": process.env.DB_STAGING_PASS,
    "database": process.env.DB_STAGING_NAME,
    "host": process.env.DB_STAGING_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}