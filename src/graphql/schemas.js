const { gql } = require("apollo-server")
const { userType } = require("./typeDefs")
const { userResolver } = require("./resolvers")

const rootTypeDefs = gql`
type Query {
    _empty: Boolean
}
`

const rootResolvers = {
    Query: {
        _empty: () => true, 
    }
}

module.exports =  {
 resolvers: [rootResolvers, userResolver],
 typeDefs: [rootTypeDefs, userType]
}

