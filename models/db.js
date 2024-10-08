const dotenv = require('dotenv')
const Sequelize = require('sequelize');
const winston = require('winston/lib/winston/config');
dotenv.config({path:'./config.env'})

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0, 
        acquire: 30000,
        idle: 10000
    },
})

sequelize.options.logging = winston.debug

module.exports = sequelize;