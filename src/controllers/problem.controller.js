
const NotImplemented=require('../errors/notImplemented.error');
const {ProblemService}=require('../services');
const {ProblemRepository}=require('../repositories');
const {StatusCodes}=require('http-status-codes');
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


async function getProblem(req,res,next){
    try{
        console.log(req.params.id);
        const problem=await problemService.getProblem(req.params.id);
      
       return res.status(StatusCodes.OK).json({
        success:true,
        message:'Successfully fetched a problem',
        error:{},
        data:problem
       });
       
    } 
    catch(error)
    {
    next(error);
    }
}
async function getProblems(req,res,next)
{
    try{
        
       const response=await problemService.getAllProblems();
      
       return res.status(StatusCodes.OK).json({
        success:true,
        message:'Successfully fetched all the problems',
        error:{},
        data:response
       })
       
    } 
    catch(error)
    {
    next(error);
    }
    
}
async function deleteProblem(req,res,next){
    try{
        const deletedProblem=await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully deleted the problem',
            error:{},
            data:deletedProblem
        })
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