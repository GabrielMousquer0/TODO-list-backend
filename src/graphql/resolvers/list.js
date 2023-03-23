const { createLists, editElement, deleteElement } = require('./mutations')
const { lists } = require("./query")

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