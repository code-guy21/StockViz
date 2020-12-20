const router = require('express').Router();
const stockRoutes = require('./stock');

router.use('/stock', stockRoutes);

module.exports = router;
