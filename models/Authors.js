var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthorsSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

AuthorsSchema.methods.getAllAuthors = function(callback){
    return this.model('Author').find({}, callback);
};

AuthorsSchema.methods.getAuthorById = function(callback){
    return this.model('Author').findOne({
        id: this.id
    }, callback);
};

AuthorsSchema.methods.createNewAuthor = function(callback){
    return this.model('Author').create({
        id: this.id,
        name: this.name,
        country: this.country
    }, callback);
};

AuthorsSchema.methods.deleteAuthor = function(callback){
    return this.model('Author').remove({
        id: this.id
    }, callback);
};

exports = module.exports = mongoose.model('Author', AuthorsSchema);