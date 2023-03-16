const { gql } = require("apollo-server")

const listType = gql`
    extend type Query {
        lists: [List!]!
}

    extend type Mutation {
        createLists(content: String!, title: String!): [List!]!
}

    type List {
        title: String!
        content: String!
}
`

module.exports = { listType }