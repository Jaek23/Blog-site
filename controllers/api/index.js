const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-route');
const postRoute = require('./newpost-route');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoute);

module.exports = router;