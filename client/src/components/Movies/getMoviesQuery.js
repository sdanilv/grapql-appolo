import {gql} from "apollo-boost";

export const getMoviesQuery = gql`query Movies{ movies { name, genre, director{name, id}, id }} `