const {
    ApolloServer
} = require("apollo-server")
const {
    context
} = require('../graphql/context')
const {
    resolvers,
    typeDefs
} = require("../graphql/schemas.js")
require('dotenv').config()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
})

server.listen({
    port: process.env.SERVER_PORT
}).then(({
    url
}) => console.log(url))