const { gql } = require("apollo-server")

const userType = gql`
extend type Query {
    users: [User] 
}

type User {
    name: String
    id: Int
}
`

module.exports.userType