const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true , tlsAllowInvalidCertificates: true});
app.use(cors());
app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB'));


app.listen(PORT, (err) => err ? console.log(err) : console.log("Server start"));





