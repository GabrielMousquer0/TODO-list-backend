const {
    ApolloServer
} = require("apollo-server")
const knex = require('../database')
const {
    resolvers,
    typeDefs
} = require("../graphql/schemas.js")
require('dotenv').config()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return {
            knex
        }
    }
})

server.listen({
    port: process.env.SERVER_PORT
}).then(({
    url
}) => console.log(url))