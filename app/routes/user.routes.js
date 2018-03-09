const router = require('express').Router();

const userController = require('../controllers/user.controller');
// api routes ===================
router.get('/', userController.getAll);
router.post('/', userController.register);
router.get('/:id', userController.getOneById);
router.put('/:id', userController.getOneAndUpdate);
router.delete('/:id', userController.removeOne);

module.exports = router;
