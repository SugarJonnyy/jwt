const {customAPIError} = require('../errors/customErrorHandler')
const errorHandlerMiddleware = (err, req, res, next) =>{
    if (err instanceof customAPIError){
        return res.status(err.statusCode).json(err.message)
    }
    return res.status(500).json({msg: err})
}

module.exports = errorHandlerMiddleware