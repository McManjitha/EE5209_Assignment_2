const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },
    releaseDate : {type : String},
    cast : [String],
    cost : String,
    description : String
});

const movies = mongoose.model('movies', MovieSchema);

module.exports = movies;