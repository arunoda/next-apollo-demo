const { readData } = require('../helper/data');

const contact = {
    Query: {
        contacts: (parent, { limit=20, offset=0 }) => {
            const data = JSON.parse(readData());
            return data.slice(offset, offset + limit)
        }
    }
}

module.exports = contact;