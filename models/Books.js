var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

BooksSchema.methods.getAllBooks = function(callback){
    return this.model('Book').find({}, callback);
};

BooksSchema.methods.getBookById = function(callback){
    return this.model('Book').findOne({
        id: this.id
    }, callback);
};

BooksSchema.methods.createNewBook = function(callback){
    return this.model('Book').create({
        id: this.id,
        name: this.name,
        genre: this.genre
    }, callback);
};

BooksSchema.methods.deleteBook = function(callback){
    return this.model('Book').remove({
        id: this.id
    }, callback);
};

BooksSchema.methods.updateBookDetails = function(callback){
    return this.model('Book').update({
        id: this.id
    }, {
        id: this.id,
        name: this.name,
        genre: this.genre
    }, callback);
}

exports = module.exports = mongoose.model('Book', BooksSchema);