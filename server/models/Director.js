const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Director = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        name: String,
        age: Number,

        // movies: {
        //     type: {
        //         type: Schema.Types.ObjectId,
        //         ref: "movie"
        //     }
        // }
    }
);

module.exports = mongoose.model("director", Director);
