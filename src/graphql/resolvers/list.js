const lists = (_, __, { knex }) => knex('lists').select('*') 

const listResolver = {
    Query: {
        lists
    },
    Mutation: {
        async createLists(_, args, { knex }) {
            await knex('lists').insert(args)
            return knex('lists').select('*')

        },
        async deleteElement(_, {
            id
        }, { knex }) {
            await knex('lists').delete().where({
                id: id
            })
            return knex('lists').select('*')

        },
        async editElement(_, {
            content,
            id
        }, { knex }) {
            await knex('lists').update({
                content: content
            }).where('id', '=', id)
            return knex('lists').select('*')
        }
    },

}

module.exports = {
    listResolver
}