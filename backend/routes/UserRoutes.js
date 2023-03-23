const router = require('express').Router()
const {
  reservation,
  getReservation
} = require('../controllers/UserControllers')

router.route('/reservation').get(getReservation).post(reservation)
module.exports = router;