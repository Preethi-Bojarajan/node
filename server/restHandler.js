let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let bookMaster = require('./models/bookMaster');
let url = require('url');
let qs = require('qs');


router.get('/getBook', (req, res) => {
    if (req.url) {
        let data = bookMaster.find({})
        data.exec((err, books) => {
            if (err) return res.send(err);
            res.send(books);
        })
    }
});

router.post('/addBook', (req, res) => {
    if (req.body) {
        let data = req.body.book;
        let bookNew = new bookMaster(data)
        bookNew.save((err, book) => {
            if (err) return res.send(err);
            res.send(book.title + " saved to bookstore collection.");
        })
    }
});

router.get('/getBookOne/:id', (req, res) => {
    if (req.url) {
        let data = bookMaster.findOne({
            isbn: req.params.id
        })
        data.exec((err, books) => {
            if (err) return res.send(err);
            res.send(books);
        })
    }
});

module.exports = router;