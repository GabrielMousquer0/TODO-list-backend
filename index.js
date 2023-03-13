const { ApolloServer } = require("apollo-server")

const typeDefs = `
    type User {
        name: String
        description: String
        id: Int
    }

    type Query {
        users: [User]
    }
`;

const users = [
    {
        name: 'Rafael',
        description: 'LOrem impsum',
        id: Math.floor(Math.random() * (100000 - 10000) + 10000)
    },
    {
        name: 'Jean',
        description: 'kkdkawjwa',
        id: Math.floor(Math.random() * (100000 - 10000) + 10000)
    }
]


const resolvers = {
    Query: {
users: () => users,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})


server.listen({port: 8080}).then(({url}) => console.log(url))

