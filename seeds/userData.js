const {User} = require('../models');

const userData = [
    {
        "name": "Harry Kane",
        "password": "harry123"
    },
    {
        "name": "Kyrie Irving",
        "password": "kyrie123"
    },
    {
        "name":"Tony Romo",
        "password": "tony123"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;