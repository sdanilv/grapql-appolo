import React from 'react';
import {graphql} from "@apollo/react-hoc";
import {gql} from "apollo-boost";
import Movie from "./Movie";

const addMovieMutation = graphql(gql`
mutation addMovie($name:String!, $genre:String, $director:ID){
addMovie(name:$name, genre:$genre, director:$director){
name}}`, {props: (props) =>
        ({mutation: movie =>
                props.mutate({variables: movie})})
})

const AddMovie = props => {
    return <Movie   buttonName="Add"  {...props}/>
};

export default addMovieMutation(AddMovie);

