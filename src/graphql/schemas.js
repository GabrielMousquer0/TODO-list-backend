const { gql } = require("apollo-server")
const  { listType }  = require("./typeDefs")
const  { listResolver }  = require("./resolvers")

const rootTypeDefs = gql`
type Query {
    _empty: Boolean
}

type Mutation {
    _empty: Boolean
}
`


const rootResolvers = {
    Query: {
        _empty: () => true, 
    },
    Mutation: {
        _empty: () => true,
    }
}

module.exports = {
  resolvers: [rootResolvers, listResolver],
  typeDefs: [rootTypeDefs, listType]  
}
