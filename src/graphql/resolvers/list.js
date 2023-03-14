 const lists = () => [
    {
        id: 1,
        content: 'lorem impsum',
        title: 'List1'
    }
]

 const listResolver = {
    Query: {
        lists 
    }
}

module.exports = { listResolver }
