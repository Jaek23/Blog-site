const {Post} = require('../models');

 const postData = [
    {
        "title":"First Blog Post",
        "description":"This is the description for the first post.",
        "user_id":1
    },
    {
        "title":"Second Blog Post",
        "description":"This is the description for the second post.",
        "user_id":2
    },
    {
        "title":"Third Blog Post",
        "description":"This is the description for the Third post.",
        "user_id":3
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;