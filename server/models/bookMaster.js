let db = require('../config/db');
let Schema = db.Schema;

const bookMasterSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    isbn: {
        type: String
    }
});

module.exports = db.model('bookMaster', bookMasterSchema);