const faker = require('faker')

module.exports = {
  generateFakeData(length = 2000) {
    const contacts = []
    for (let i = 0; i < length; i++) {
      contacts.push({
        name: faker.name.findName(),
        address: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.zipCode()} ${faker.address.country()}`,
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
      })
    }

    return contacts
  }
}

