const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/server.config');
const apiRouter=require('./routes');
const {BaseError} = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use('/api',apiRouter);
app.get('/ping',(req,res)=>{
    return res.json({message:'Problem Service is alive'});
})
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`server started listening at PORT:${PORT}`);
    //throw new BaseError("Some Error",404,"Something went wrong");
    // try{
    //     throw new BaseError("Some Error",404,"Something went wrong");
    // }
    //  catch(error)
    //  {
    //     console.log("Something went wrong");
    //  }
});