
var casual = require('casual')

const generateDummyData = () => {
    let tempUserList = []
    for (i = 0; i <= 2000; i++) {
        let tempObj = {
            name: casual.name,
            address: casual.address,
            email: casual.email,
            phone: casual.phone, 
        }
        tempUserList[i] = tempObj

    }
    return tempUserList
}

const userList = generateDummyData()

const getUserList = (args) => {
    if(args.page && args.perPage) 
    return userList.slice(args.page, args.page + args.perPage) 
    else return userList

}

const Query = {
    users: (root, args) => getUserList(args)
}

module.exports = { Query }