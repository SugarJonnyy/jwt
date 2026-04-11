const express = require('express')
const asyncWrapper = require('../middlewares/async')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

router.route('/dashboard').get(asyncWrapper(dashboard))
router.route('/login').post(asyncWrapper(login))


module.exports = router