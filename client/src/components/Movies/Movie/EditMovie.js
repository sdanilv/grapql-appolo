import React from 'react'
import Movie from "./Movie";
import {graphql} from "react-apollo";
import {editMovieQuery, getMoviesQuery} from "../MoviesQuery";


const editMovieMutation = graphql(editMovieQuery, {
    props: props => ({
        mutation: movie => props.mutate({variables: movie})
    }),
    options: {refetchQueries: [{query: getMoviesQuery}]}
})

const EditMovie = ({movie, ...props}) => {
    let initialData = {}
    if (movie.director)
        initialData = {...movie, director: movie.director.id}

    return <Movie initialData={initialData} title={"Edit Movie"} buttonName="Save"  {...props}/>
}

export default editMovieMutation(EditMovie);
