import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
    },
};

export default resolvers;

/*
const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
    },
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { name }) => deleteMovie(name),
    },
};

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getAPIMovies(limit, rating),
    },
};
*/
// export default resolvers;
