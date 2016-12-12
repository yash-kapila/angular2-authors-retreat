var express = require("express");
var router = express.Router();
var config = require("../config");
var Books = require("../models/Books");

router.use(function(req, res, next) {
    console.log("Inside Books Router use()");
    next();
});

router.get('/', function(req, res){
    var book = new Books();

    book.getAllBooks(function(err, record){
       if(err) res.status(500).json("Error while fetching books list");
       else{
           res.status(200).json(record);
       }
    });    
});

router.get('/:id', function(req, res){
    var book = new Books({
        id: req.params.id
    });

    book.getBookById(function(err, record){
        if(err) res.status(500).json("Error while fetching book details");
        else{
            res.status(200).json(record);
        }
    })
});

router.post('/new', function(req, res){
    var book = new Books({
        id: req.body.id,
        name: req.body.name,
        genre: req.body.genre
    });

    book.createNewBook(function(err, record){
        if(err) res.status(500).json("Error while creating new book");
        else{
            res.status(200).json(record);
        }
    })
});

router.put('/update', function(req, res){
    var book = new Books({
        id: req.body.id,
        name: req.body.name,
        genre: req.body.genre
    });

    book.updateBookDetails(function(err, record){
        if(err) res.status(500).json("Error while updating book details");
        else{
           res.status(200).json({
               success: true,
               message: "Book details were updated"
           });
        }
    })
});

router.delete('/delete/:id', function(req, res){
    var book = new Books({
        id: req.params.id
    });
    
    book.deleteBook(function(err, record){
       if(err) res.status(500).json("Error while deleting book record");
       else{
           res.status(200).json({
               success: true,
               message: "Author was deleted"
           });
       }
    })
});

// expose router           
exports = module.exports = router;