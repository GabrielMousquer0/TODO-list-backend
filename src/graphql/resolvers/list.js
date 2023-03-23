const knex = require('../../database/')
const myLists = knex('lists').select('*')

const lists = () => myLists

const listResolver = {
    Query: {
        lists
    },
    Mutation: {
        async createLists(_, args) {

            await knex('lists').insert(args)
            return myLists

        },
        async deleteElement(_, {
            id
        }) {
            await knex('lists').delete().where({
                id: id
            })
            return myLists

        },
        async editElement(_, {
            content,
            id
        }) {
            await knex('lists').update({
                content: content
            }).where('id', '=', id)
            return myLists
        }
    },

}

module.exports = {
    listResolver
}