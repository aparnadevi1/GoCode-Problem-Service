const winston=require('winston');
const { LOG_DB_URL } = require('./server.config');
const path=require('path');
require('winston-mongodb');
const allowedTransports=[];
//the below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
    }),
   
    winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));
console.log(`URL${LOG_DB_URL}`);

//the below transport configuration enables logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs'
}))

allowedTransports.push(new winston.transports.File({
    filename:`app.log`
}))

const logger=winston.createLogger({

    //default formatting given by us 
    format:winston.format.combine(
        
        //First argument to combine method is defining how we want the timestamo to come up
        winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
        }),
        //second argument ito the combine methid,which defines what is exactly going to be printed in log 
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports:allowedTransports
});
module.exports=logger;