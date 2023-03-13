const { gql } = require("apollo-server")
const { userType } = require("./typeDefs/index.js")
const { userResolver } = require("./resolvers/index.js")

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

module.exports.resolver = [rootResolvers, userResolver]
module.exports.typeDefs = [rootTypeDefs, userType]

