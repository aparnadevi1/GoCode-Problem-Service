const mongoose=require('mongoose');
mongoose.set('debug', true);

require("dotenv").config();
const { ATLAS_DB_URL, NODE_ENV, LOG_DB_URL } = require('./server.config')


async function connectToDB(){
    try{
        

        if(NODE_ENV=="development")
        {
           

            await mongoose.connect(ATLAS_DB_URL);
            
           
        }

        //if there is another enviroment then we will connect to another db not mongodb eg production is using another db
        
    }
    catch(error)
    {
       console.log("Unable to connect to DB server");
       console.log(error);
    }
}
module.exports={connectToDB}