const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/home_controller');

const postsController = require('../controllers/posts_controller');
router.get('/', homeController.home);
router.post('/create', passport.checkAuthentication, postsController.create);
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy)

module.exports = router;