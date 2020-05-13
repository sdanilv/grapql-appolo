const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Director = new Schema(
    {

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
