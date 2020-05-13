import React from 'react'
import {graphql} from "react-apollo"
import Movie from "./Movie"
import {addMovieQuery, getMoviesQuery} from "../MoviesQuery"

const addMovieMutation = graphql(addMovieQuery, {
    props: (props) =>
        ({mutation: movie => props.mutate({variables: movie})}),
    options: {refetchQueries: [{query: getMoviesQuery}]}
})

const AddMovie = props => {
    return <Movie title={"Add Movie"} buttonName="Add"  {...props}/>
}

export default addMovieMutation(AddMovie) 

