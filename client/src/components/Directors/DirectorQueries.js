import {gql} from "apollo-boost";

export const getDirectorsQuery = gql`query Directors{ directors { name, age, movies{name, id}, id }} `
export const addDirectorsQuery = gql`
mutation addDirector($name:String!, $age:Int){
addDirector(name:$name, age:$age){
name}}`
export const editDirectorQuery = gql`
mutation updateDirector($id: ID!, $name:String, $age:String ){
updateDirector(id:$id, name:$name, age:$age){name}} `
export const deleteDirectorsQuery = gql`
mutation deleteDirector($id: ID!){
deleteDirector(id:$id){name}}`