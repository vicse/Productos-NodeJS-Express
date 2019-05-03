var express = require('express');
const controller = require('../controllers/producto');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    controller.show(req, res);
});

router.get('/:id', function(req, res, next) {
    controller.detail(req, res);
});

router.post('/', function(req, res, next) {
    controller.create(req, res);
});

router.put('/:id', function(req, res, next) {
    controller.update(req, res);
});

router.delete('/:id', function(req, res, next) {
    controller.delete(req, res);
});

module.exports = router;