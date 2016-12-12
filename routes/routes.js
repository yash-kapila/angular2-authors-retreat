var express = require("express");
var router = express.Router();
var config = require("../config");
var Authors = require("../models/Authors");

router.use(function(req, res, next) {
    console.log("Inside Router use()");
    next();
});

router.get('/authors', function(req, res){
    var author = new Authors();

    author.getAllAuthors(function(err, record){
       if(err) res.status(500).json("Error while fetching authors list");
       else{
           res.status(200).json(record);
       }
    });    
});

router.get('/author/:id', function(req, res){
    var author = new Authors({
        id: req.params.id
    });

    author.getAuthorById(function(err, record){
        if(err) res.status(500).json("Error while fetching author details");
        else{
            res.status(200).json(record);
        }
    })
});

router.post('/author/new', function(req, res){
    var author = new Authors({
        id: req.body.id,
        name: req.body.name,
        country: req.body.country
    });

    author.createNewAuthor(function(err, record){
        if(err) res.status(500).json("Error while creating new author");
        else{
            res.status(200).json(record);
        }
    })
});

router.put('/author/update', function(req, res){
    var author = new Authors({
        id: req.body.id,
        name: req.body.name,
        country: req.body.country
    });

    author.updateAuthorDetails(function(err, record){
        if(err) res.status(500).json("Error while updating author details");
        else{
           res.status(200).json({
               success: true,
               message: "Author details were updated"
           });
        }
    })
});

router.delete('/author/delete/:id', function(req, res){
    var author = new Authors({
        id: req.params.id
    });
    
    author.deleteAuthor(function(err, record){
       if(err) res.status(500).json("Error while deleting author record");
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
