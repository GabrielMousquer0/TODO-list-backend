 const lists = () => [
    {
        id: 1,
        content: 'lorem lorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsulorem impsuimpsum',
        title: 'List1'
    }, 
    {
        id: 2,
        content: 'dkadka',
        title: 'dkd'
    }, 
    {
        id: 2,
        content: 'dkadka',
        title: 'dkd'
    }, 
    {
        id: 2,
        content: 'dkadka',
        title: 'dkd'
    }, 
    {
        id: 2,
        content: 'dkadka',
        title: 'dkd'
    }, 
    {
        id: 2,
        content: 'dkadka',
        title: 'dkd'
    }
]


const createLists = () => {
return lists
}

 const listResolver = {
    Query: { lists },
    Mutation: { createLists }
}

module.exports = { listResolver }
