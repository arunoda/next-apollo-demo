const { readData } = require('../helper/data');
const casual = require('casual');

const query = {
    contacts: (parent, { limit = 20, offset = 0 }) => {
        const data = readData();
        return data.slice(offset, offset + limit)
    },
    name: () => casual.full_name
}

module.exports = query;