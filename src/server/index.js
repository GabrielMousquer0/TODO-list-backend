const { ApolloServer, gql } = require("apollo-server")
const { resolvers, typeDefs } = require("../graphql/schemas")


const server = new ApolloServer({
    typeDefs,
    resolvers,
})


server.listen({port: 8080}).then(({url}) => console.log(url))

