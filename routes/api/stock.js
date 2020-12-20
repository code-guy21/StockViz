const router = require('express').Router();
const stocksController = require('../../controllers/stocksController');

router.route('/:id').get(stocksController.findStock);

module.exports = router;
