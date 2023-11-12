const {Comment} = require('../models');

const commentData = [
    
    {
        "description":"Nice!",
        "user_id":1,
        "post_id":1
    },
    {
        "description":"I agree!",
        "user_id":2,
        "post_id":2
    },
    {
        "description":"Great post!",
        "user_id":3,
        "post_id":3
    }
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;