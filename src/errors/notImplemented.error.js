const {BaseError} =require('./base.error');
const {StatusCodes}=require('http-status-codes');
class NotImplemented extends BaseError{
    constructor(methodName)
    {
        super("BadRequest",StatusCodes.BAD_REQUEST,`${methodName} Not Implemented`)
    }
}
module.exports=NotImplemented;