import React from 'react' 
import {graphql} from "react-apollo"
import {gql} from "apollo-boost" 
import Movie from "./Movie" 
import {getMoviesQuery} from "../getMoviesQuery"

const addMovieMutation = graphql(gql`
mutation addMovie($name:String!, $genre:String, $director:ID){
addMovie(name:$name, genre:$genre, director:$director){
name}}`, {props: (props) =>
        ({mutation: movie =>
                props.mutate({variables: movie})}),
    options : {
        refetchQueries: [{query: getMoviesQuery}]

}})

const AddMovie = props => {
    return <Movie title={"Add Movie"}  buttonName="Add"  {...props}/>
}

export default addMovieMutation(AddMovie) 

