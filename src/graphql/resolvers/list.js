const { createLists, editElement, deleteElement } = require('./mutations')
const lists = (_, __, { myLists }) => myLists 

const listResolver = {
    Query: {
        lists
    },
    Mutation: {
        createLists,
        editElement,
        deleteElement
    },

}

module.exports = {
    listResolver
}