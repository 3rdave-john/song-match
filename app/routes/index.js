const router = require('express').Router();
const userRoutes = require('./user.routes');

// register routes

router.use('/api/user', userRoutes);

module.exports = router;
