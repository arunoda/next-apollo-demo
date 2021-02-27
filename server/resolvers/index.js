const { readData } = require('../helper/data');
const casual = require('casual');

const resolver = {
    Query: {
        contacts: (parent, { limit=20, offset=0 }) => {
            const data = JSON.parse(readData());
            
            return data.slice(offset, offset + limit)
        },
        name:() => casual.full_name
    }
}

module.exports = resolver;