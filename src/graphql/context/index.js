const knex = require('../../database')

const context = () => {
    return {
        knex,
        myLists: knex('lists').select('*')
    }
}

module.exports = { context }