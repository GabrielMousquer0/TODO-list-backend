const createLists = async (_, args, {
    knex
}) => {
    const [result] = await knex('lists').insert(args, ['id', 'content', 'title'])
    return result
}
const deleteElement = async (_, {
    id
}, {
    knex
}) => {
    const del = await knex('lists').delete().where({
        id: id
    })
    return !!del
}
const editElement = async (_, {
    title,
    content,
    id
}, {
    knex
}) => {
    const [update] = await knex('lists').where('id', '=', id).update({
        content: content,
        title: title
    }, ['content', 'title'])
    return update
}

module.exports = {
    createLists,
    deleteElement,
    editElement
}