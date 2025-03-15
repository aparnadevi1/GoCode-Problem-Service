const {Problem}=require('../models');

class ProblemRepository{
   async createProblem(problemData)
   {
    try{
      // throw {"err":"some error"};
      const problem=await Problem.create({
        title:problemData.title,
        description:problemData.description,
        testCases:(problemData.testCases)?problemData.testCases:[]

      });
      return problem;
    }
    catch(error)
    {
       console.log(error);
       throw error;
    }
   }
}
module.exports=ProblemRepository;