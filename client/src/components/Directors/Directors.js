import React from "react"

import {gql} from 'apollo-boost';
import {graphql} from "react-apollo"
import MyTable from "../../Tools/MyTable";

const query = gql`
      query Movies{
        movies {
          name
          genre
        }
      }
    `
const directors = [
    {id: 1, name: "a", movies: "Movie", age: 11},
    {id: 2, name: "q", movies: "Movie", age: 21},
    {id: 3, name: "w", movies: "Movie", age: 31},
    {id: 4, name: "e", movies: "Movie", age: 41}
]

const cols = ["Name", "Movies", "Age", "Options"]
const Directors = (props) => {

    return (<MyTable cols={cols} data={directors}/>
    )
};

export default graphql(query)(Directors)