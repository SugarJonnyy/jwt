const {customAPIError} = require('../errors/customErrorHandler')
const jwt = require('jsonwebtoken')

const login = async (req, res) =>{
    const {username, password} = req.body
    console.log(username, password) 

    if(!username || !password){
        throw new customAPIError("Please provide email and password!", 400)
    }

    // for only demo normally provided by the db!!!
    const id = new Date().getDate() 

    // try try  keep payload small, better experince  for the user
    // just for this demo, for the production use unguessable complex values as a string
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    
    res.status(200).json({msg: "user created", token})
}

const dashboard = async (req, res) =>{

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new customAPIError("No token provided", 401)
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({msg: `Hi ${decoded.username} are now authorized! Here is your secret key ${luckyNumber}`})
    } catch (error) {
        throw new customAPIError("Not authorized to access this route", 401)
    }
}

module.exports = {
    login,
    dashboard
}