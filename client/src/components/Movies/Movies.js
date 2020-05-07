import React from "react"
import MyTable from "../../Tools/MyTable";
import {gql} from "apollo-boost";
import {graphql} from "@apollo/react-hoc";

const cols = ["Name", "Genre", "Director", "Options"]
const query = gql`query Movies{ movies { name, genre, director{name}, id }} `
const cell = (row, key) => typeof row[key] === "object" ? row[key]["name"] : row[key]!=="Movie"&&row[key]

const Movies = ({data}) => {

    return (
        <MyTable cols={cols} data={data.movies} cell={cell}/>
    )
}

export default graphql(query)(Movies)