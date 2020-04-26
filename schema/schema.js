const graphql = require("graphql");
const {GraphQLString, GraphQLInt, GraphQLID, GraphQLObjectType, GraphQLSchema} = graphql;
const movies = [
    {id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1',},
    {id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2',},
    {id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3',},
    {id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4',},
];

const directors = [
    {id: '1', name: 'Quentin Tarantino', age: 55},
    {id: '2', name: 'Michael Radford', age: 72},
    {id: '3', name: 'James McTeigue', age: 51},
    {id: '4', name: 'Guy Ritchie', age: 50},
];

const DirectType = new GraphQLObjectType({
    name: "Direct",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});


const MovieType = new GraphQLObjectType({
        name: "Movie",
        fields: () => ({
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            genre: {type: GraphQLString},
            direct: {
                type: DirectType,
                resolve(parents, args) {
                    return directors.find(direct => direct.id === parents.id)
                }
            }
        })
    })
;

const Query = new GraphQLObjectType({
    name: "Query", fields: {
        movie: {
            type: MovieType,
            resolve(parents, args) {
                return movies.find(movie => movie.id === args.id)
            }
        },
        direct: {
            type: DirectType,
            resolve(parents, arg) {
                return directors.find(direct => direct.id === arg.id)
            }
        }

    }
});

module.exports = new GraphQLSchema({query: Query});