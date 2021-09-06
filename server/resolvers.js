const { generateFakeData } = require('./data')

const userList = generateFakeData()

const getUserList = (args) => {
  if (args.page && args.perPage) {
    return userList.slice(args.page, args.page + args.perPage)
  } else if (args.name) {
    return userList.filter(user => {
      const name = user.name.toLowerCase()
      return name.includes(args.name.toLowerCase())
    })
  } else {
    return userList
  }

}

module.exports = {
  Query: {
    users: (root, args) => getUserList(args)
  },
}