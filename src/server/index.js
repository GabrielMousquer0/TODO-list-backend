const { ApolloServer } = require("apollo-server")
const { resolvers, typeDefs } = require("../graphql/schemas.js")

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({port: 8080}).then(({url}) => console.log(url))

