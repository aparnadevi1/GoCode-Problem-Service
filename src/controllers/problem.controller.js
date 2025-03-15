const {StatusCodes}=require('http-status-codes');
const NotImplemented=require('../errors/notImplemented.error');
const BadRequest =require('../errors/badrequest.error');

const {ProblemService}=require('../services');
const {ProblemRepository}=require('../repositories');
const problemService=new ProblemService(new ProblemRepository());
function pingProblemController(req,res,next){
    return res.json({message:'Ping controller is up'});
}
async function addProblem(req,res,next){
    try{
          console.log("incoming req body",req.body);
           const newProblem=await problemService.createProblem(req.body);
           return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully created a new problem',
            error:{},
            data:newProblem
           })
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