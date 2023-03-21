 const myArray = [{
    content: 'test0',
    title: 'List0',
    id: Math.floor(Math.random() * 10000000)
}]
 
 const lists = () => myArray

 const listResolver = {
    Query: { lists },
    Mutation: { 
        createLists(_, args) {
           myArray.push(args)
            return myArray
        },
        deleteElement(_, {id}) {
            const indice = myArray.indexOf(id)
           const [result] = myArray.splice(indice, 1)
            return result
        },
        editElement(_, { content, id }) {
            const index = myArray.findIndex((a) => a.id === id)
            myArray[index].content = content
            return myArray
        } 
    },
    
}

module.exports = { listResolver }
