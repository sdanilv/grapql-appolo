const express = require("express");
const app =  express();
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const PORT = 3001;

app.use("/graphql", graphqlHTTP({schema, graphiql:true}));
app.listen(PORT, (err)=> err?console.log(err):console.log("Server start"));



