const lists = (_, __, {
    knex
}) => knex('lists').select("*")

module.exports = {
    lists
}