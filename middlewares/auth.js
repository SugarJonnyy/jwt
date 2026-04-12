const {unauthenticatedError} = require('../errors/index')
const jwt = require('jsonwebtoken')

const authorizationMiddleware = async (req, res , next ) =>{
       const authHeader = req.headers.authorization
    
        if(!authHeader || !authHeader.startsWith('Bearer')){
            throw new unauthenticatedError("No token provided")
        }
        const token = authHeader.split(' ')[1]

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const {id, username} = decoded
            req.user = {id, username}
            next()
        }catch(error){
            throw new unauthenticated("Not authorized to access this route")
            
        }


   
}

module.exports = authorizationMiddleware