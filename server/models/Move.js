const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Movie = Schema({
    name: String,
    genre: String,
    directorId: String
    // director: {
    //     type: {
    //         type: Schema.Types.ObjectId,
    //         ref: "director"
    //     }
    // }
});

module.exports = mongoose.model("movie", Movie);