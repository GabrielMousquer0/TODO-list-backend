const lists = (_, __, { myLists }) => myLists 

const listResolver = {
    Query: {
        lists
    },
    Mutation: {
        async createLists(_, args, { knex, myLists }) {
            await knex('lists').insert(args)
            return myLists

        },
        async deleteElement(_, {
            id
        }, { knex, myLists }) {
            await knex('lists').delete().where({
                id: id
            })
            return myLists

        },
        async editElement(_, {
            content,
            id
        }, { knex, myLists }) {
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