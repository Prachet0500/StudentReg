const winston = require("winston");
const { combine, timestamp, printf, colorize, align } = winston.format;
const logger = winston.createLogger({  
    format: combine(    
        // colorize({ all: true }),    
        timestamp({      format: "YYYY-MM-DD hh:mm:ss.SSS A",    }),
            align(),
            printf((info) => `${info.level}: ${info.message}: [${info.timestamp}]`) 
         ),  
         transports: [new winston.transports.Console({format: combine(    
            colorize({ all: true }),    
            timestamp({      format: "YYYY-MM-DD hh:mm:ss.SSS A",    }),
                align(),
                printf((info) => `${info.level}: ${info.message}: [${info.timestamp}]`) 
             )}),
                      new winston.transports.File({ filename: "logs.log" })]
        //  transports: [new winston.transports.File({ filename: "logs.log" })],
    });
         
module.exports = logger;