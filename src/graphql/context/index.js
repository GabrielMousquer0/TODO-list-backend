const knex = require('../../database')

const context = () => {
    return {
        knex
    }
}

module.exports = {
    context
}