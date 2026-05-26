const { updateUser } = require("../controllers/userController")
const userList = require("../data/users")

const findAll = () => {
    return userList
}

const create = (user) => {
    userList.push(user)

    return user
}

const findById = (id) => {
        return userList.find( user => user.id ===id)
}

const update = (id, data) => {
    const user = userList.find ( user => user.id === id)

    if (!user) return null

    if (data.name){
        user.name = data.name
    }



    return user    
}

const remove = (id) => {
    const index = userList.findIndex( user => user.id === id)

    if (index === -1) return null

    const deleted = users[index]

    user.splice(index, 1)

    return deleted
    
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
}
