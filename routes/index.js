const express = require('express');

const router = express.Router();

const AppController = require('../controllers/AppController');

const AuthController = require('../controllers/AuthController');

const UsersController = require('../controllers/UsersController');

router.get('/status', (req, res) => AppController.getStatus(req, res));

router.get('/stats', (req, res) => AppController.getStats(req, res));

router.get('/connect', (req, res) => AuthController.getConnect(req, res));

router.get('/disconnect', (req, res) => AuthController.getDisconnect(req, res));

router.get('/users/me', (req, res) => UsersController.getMe(req, res));

module.exports = router;
