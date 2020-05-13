const graphql = require("graphql");
const Directors = require("../models/Director");
const Movies = require("../models/Move");
const {GraphQLString, GraphQLInt, GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLList} = graphql;


const DirectType = new GraphQLObjectType({
    name: "Direct",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parents, arg) {
                return Movies.find({directorId: parents._id})
            }
        }
    })
});


const MovieType = new GraphQLObjectType({
        name: "Movie",
        fields: () => ({
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            genre: {type: GraphQLString},
            director: {
                type: DirectType,
                resolve(parents, args) {
                    return Directors.findById(parents.directorId)
                }
            }
        })
    })
;

const Query = new GraphQLObjectType({
    name: "Query", fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parents, args) {
                return Movies.findById(args.id)
            }
        },
        director: {
            type: DirectType,
            args: {id: {type: GraphQLID}},
            resolve(parents, args) {

                return Directors.findById(args.id)
            }
        },
        directors: {
            type: new GraphQLList(DirectType),
            resolve(parents, arg) {
                return Directors.find({});

            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parents, arg) {
                return Movies.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType(
    {
        name: "Mutation",
        fields: {
            addMovie: {
                type: MovieType,
                args: {name: {type: GraphQLString}, genre: {type: GraphQLString}, director: {type: GraphQLID}},
                resolve(parents, args) {
                    const movie = new Movies({name: args.name, genre: args.genre, directorId: args.director});
                    return movie.save()
                }
            },
            addDirector: {
                type: DirectType,
                args: {name: {type: GraphQLString}, age: {type: GraphQLInt}},
                resolve(parents, args) {
                    const director = new Directors({name: args.name, age: args.age});
                    return director.save()
                }
            },
            updateMovie: {
                type: MovieType,
                args: {
                    id: {type: GraphQLID},
                    name: {type: GraphQLString},
                    genre: {type: GraphQLString},
                    directorId: {type: GraphQLID}
                },
                resolve(parents, args) {
                    return Movies.findByIdAndUpdate(args.id, {...args},{new:true})
                }
            },
            updateDirector: {
                type: DirectType,
                args: {
                    id: {type: GraphQLID},
                    name: {type: GraphQLString},
                    age: {type: GraphQLInt},
                },
                resolve(parents, args) {
                    return Directors.findByIdAndUpdate(args.id, {...args},{new:true})
                }
            },
            deleteMovie: {
                type: MovieType,
                args: {id: {type: GraphQLID}},
                resolve(parents, args) {
                    return Movies.findByIdAndDelete(args.id)
                }
            },
            deleteDirector: {
                type: DirectType,
                args: {id: {type: GraphQLID}},
                resolve(parents, args) {
                    return Directors.findByIdAndDelete(args.id)
                }
            }

        }
    }
);

module.exports = new GraphQLSchema({query: Query, mutation: Mutation});