import React from "react"
import MyTable from "../../Tools/MyTable";
import {gql} from "apollo-boost";
import {graphql} from "@apollo/react-hoc";

const cols = ["Name", "Genre", "Director", "Options"]
const query = gql`
      query Movies{
        movies {
          name
          genre
          director{
          name
          }
          id
        }
      }
    `
const Movies = ({data}) => {
    const {movies=[]} =data
    return (
        <MyTable cols={cols} data={movies}/>
    )
}

export default graphql(query)(Movies)