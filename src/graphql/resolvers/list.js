 const myArray = [{
    content: 'impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsuimpsum',
    title: 'List1'
}, 
{

    content: 'dkadka',
    title: 'dkd'
}, 
{
    content: 'dkadka',
    title: 'dkd'
}]
 
 const lists = () => myArray

 const listResolver = {
    Query: { lists },
    Mutation: { createLists(_, args) {
        myArray.push(args)
        },

    },
    
}

module.exports = { listResolver }
