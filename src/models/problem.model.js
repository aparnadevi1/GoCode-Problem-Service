const mongoose=require('mongoose');
const problemSchema=new mongoose.Schema({
      title:{
        type:String,
        require:[true,'Title can not be empty']
      },
      description:{
        type:String,
        required:[true,'Description can not be empty']
      },
      difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty can not be empty'],
        default:'easy'
      },
      testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
      ],
      editorial:{
        type:String
      }
});

const Problem=mongoose.model('Problem',problemSchema);