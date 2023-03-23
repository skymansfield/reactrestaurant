const router = require('express').Router();

const {
  signUp,
  mainPage,
  login,
  deleteUser
} = require('../controllers/AdminControllers');

const { ensureAuthenticated } = require('../../ensure');
router.route('/signup').post(signUp);
router.route('/login').post(login);
router.route('/api/main').get(ensureAuthenticated,mainPage)
router.route('/delete').post(deleteUser);
module.exports = router;