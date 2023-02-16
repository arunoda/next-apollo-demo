import casual from 'casual'

const USER_LENGTH = 2000

interface User {
    name: string
    email: string
    address: string
    phone: string
}

casual.define('user', () => {
  return {
      name: casual.full_name,
      email: casual.email,
      address: casual.address,
      phone: casual.phone
  };
});

const populate = (): Array<User> => {
    const users: Array<User> = []

    for(let i = 0; i < USER_LENGTH; i++) {
        //@ts-ignore
        users.push(casual.user)
    }

    return users
}

export default populate()