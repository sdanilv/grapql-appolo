import {gql} from "apollo-boost";

export const getMoviesQuery = gql`query Movies{ movies { name, genre, director{name, id}, id }} `
export const addMovieQuery = gql`
mutation addMovie($name:String!, $genre:String, $director:ID){
addMovie(name:$name, genre:$genre, director:$director){
name}}`
export const editMovieQuery = gql`
mutation updateMovie($id: ID!, $name:String, $genre:String, $director:ID ){
updateMovie(id:$id, name:$name, genre:$genre, directorId:$director){name}} `
export const deleteMovieQuery = gql`
mutation deleteMovie($id: ID!){
deleteMovie(id:$id){name}}`