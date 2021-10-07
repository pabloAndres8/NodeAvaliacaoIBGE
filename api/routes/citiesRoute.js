const { Router } = require('express');
const Controller = require('../controller/control');

const router = Router();

router.get('/api/city', Controller.getAllCities);


module.exports = router;
