let db = require('../../config/db');

let User = {
    getUsers: function(callback)
    {
        let query =  db.query('SELECT * from users', callback);
        return query;
    },
    createUser: function (User, callback) {
        console.log('coucou');
    }
};

module.exports = User;
