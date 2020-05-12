import React from 'react'
import Movie from "./Movie";
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";
import {getMoviesQuery} from "../getMoviesQuery ";


const editMovieMutation = graphql(gql`
mutation updateMovie($id: ID!, $name:String, $genre:String, $director:ID ){
updateMovie(id:$id, name:$name, genre:$genre, directorId:$director){name}} `, {
    props: props => ({
        mutation: movie => props.mutate({variables: movie})
    }),
    options: {refetchQueries:[{query:getMoviesQuery}]}
})

const EditMovie = ({movie, ...props}) => {
let initialData = {}
if(movie.director)
    initialData = {...movie, director: movie.director.id}

    return  <Movie initialData={initialData} title={"Edit Movie"} buttonName="Save"  {...props}/>
}

export default editMovieMutation(EditMovie);
