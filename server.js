const express = require('express');
const app = express();
const PORT = 3000;
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoDb = require('./connection/mongoDb');

const server = new ApolloServer({
    typeDefs,
    resolvers
});
mongoDb();
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});