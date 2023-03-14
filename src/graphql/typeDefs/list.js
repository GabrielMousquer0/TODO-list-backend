const { gql } = require("apollo-server")

const listType = gql`
extend type Query {
    list: [List] 
}

type List {
    title: String!
    content: String!
    id: Int!
}
`

module.exports.listType