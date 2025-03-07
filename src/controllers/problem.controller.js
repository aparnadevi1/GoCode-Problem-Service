const {StatusCodes}=require('http-status-codes');
const NotImplemented=require('../errors/notImplemented.error');
const BadRequest =require('../errors/badrequest.error');
function pingProblemController(req,res,next){
    return res.json({message:'Ping controller is up'});
}
function addProblem(req,res,next){
    try{
             throw new BadRequest('Problem Name',{missing:["Problem Name"]});
    } 
    catch(error)
    {
        next(error);
    }
}
function getProblem(req,res,next){
    try{
        throw new NotImplemented('getProblem');
    } 
    catch(error)
    {
    next(error);
    }
}
function getProblems(req,res,next)
{
    try{
        throw new NotImplemented('getProblems');
    } 
    catch(error)
    {
    next(error);
    }
    
}
function deleteProblem(req,res,next){
    try{
        throw new NotImplemented('deleteProblem');
    } 
    catch(error)
    {
    next(error);
    }
}
function updateProblem(req,res,next)
{
    try{
        throw new NotImplemented('updateProblem');
    } 
    catch(error)
    {
    next(error);
    }
}
module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}