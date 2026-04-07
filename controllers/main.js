const login = (req, res) =>{
    res.send("Fake login/register/signup route")
}

const dashboard = (req, res) =>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hi you are now authorized! Here is your secret key ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}