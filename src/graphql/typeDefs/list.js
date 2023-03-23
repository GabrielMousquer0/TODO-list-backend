const {
    gql
} = require("apollo-server")

const listType = gql`
    extend type Query {
        lists: [List!]!
}

    extend type Mutation {
        createLists(content: String!, title: String!, id: ID!): [List!]
        deleteElement(id: ID!): [List!]
        editElement(id: ID!, content: String!): [List!]
}

    type List {
        title: String!
        content: String!
        id: ID!

}
`

module.exports = {
    listType
}