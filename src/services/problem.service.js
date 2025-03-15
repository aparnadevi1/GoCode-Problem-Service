const { sanitizeMarkdownContent } = require("../utils/markdownSanitizer")


class ProblemService{
     constructor(problemRepository)
     {
        this.problemRepository=problemRepository;
     }
     async createProblem(problemData)
    { 
            //1.Sanitize the markdown for description
            problemData.description=sanitizeMarkdownContent(problemData.description);

            console.log("Problem data",problemData);
            const problem=await this.problemRepository.createProblem(problemData);

            console.log("problem created",problem);
            return problem;
    }
    async getAllProblems()
    {
            const problems=await this.problemRepository.getAllProblems();
            return problems;    
    }
    async getProblem(problemId)
    {
            console.log(problemId);
            const problem=await this.problemRepository.getProblem(problemId);
            return problem;    
    }
}
module.exports={ProblemService};