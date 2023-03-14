const { gql } = require("apollo-server")

 const listType = gql`
extend type Query {
    lists: [List] 
}

type List {
    title: String
    content: String
    id: Int
}
`

module.exports = { listType }