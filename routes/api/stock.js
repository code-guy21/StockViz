const router = require('express').Router();
const stocksController = require('../../controllers/stocksController');

router.route('/:id').get(stocksController.findStock);

router.route('/intraday/:id').get(stocksController.intraDay);

module.exports = router;
