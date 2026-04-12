const express = require('express')
const asyncWrapper = require('../middlewares/async')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')
const authMiddleware = require('../middlewares/auth') 

router.route('/dashboard').get(asyncWrapper(authMiddleware), asyncWrapper(dashboard))
router.route('/login').post(asyncWrapper(login))


module.exports = router