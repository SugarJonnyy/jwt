require('dotenv').config()
const express = require('express')
const app = express()
const asyncWrapper = require('./middlewares/async')
const notFoundMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorhandler')



//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = asyncWrapper(async ()=>{
    app.listen(port, ()=>{
        console.log(`Server is listening to the ${port}...`);
    })
})

start()