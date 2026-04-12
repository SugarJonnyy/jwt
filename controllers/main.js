const {badRequestError} = require('../errors/index')
const jwt = require('jsonwebtoken')

const login = async (req, res) =>{
    const {username, password} = req.body
    console.log(username, password) 

    if(!username || !password){
        throw new badRequestError("Please provide email and password!")
    }

    // for only demo normally provided by the db!!!
    const id = new Date().getDate() 

    // try try  keep payload small, better experince  for the user
    // just for this demo, for the production use unguessable complex values as a string
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    
    res.status(200).json({msg: "user created", token})
}

const dashboard = async (req, res) =>{

    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({msg: `Hi ${req.user.username} are now authorized! Here is your secret key ${luckyNumber}`})


}

module.exports = {
    login,
    dashboard
}