const createLists = async (_, args, { knex, myLists }) => {
    await knex('lists').insert(args)
    return myLists

}
const deleteElement = async (_, {
    id
}, { knex, myLists }) => {
    await knex('lists').delete().where({
        id: id
    })
    return myLists

}
const editElement = async (_, {
    content,
    id
}, { knex, myLists }) => {
   await knex('lists').update({
        content: content
    }).where('id', '=', id)
    return myLists
}

module.exports = { createLists, deleteElement, editElement }