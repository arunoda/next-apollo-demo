const casual = require("casual")

casual.define('user', function () {
    return {
        emailAddress: casual.email,
        fullName: casual.full_name,
        address: casual.address,
        phoneNumber: casual.phone,
        hash: casual.uuid
    };
});


// Pass generator as callback
var array_of = function (times, generator) {
    var result = [];

    for (var i = 0; i < times; ++i) {
        result.push(generator());
    }

    return result;
};

// Will generate array of five random timestamps
const userList = array_of(2000, casual._user);

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: (parent, args) => {
            const first = args.first || 20;
            const after = args.after || 0;
            const index = userList.findIndex((item) => item.hash === after);
            const offset = index + 1;

            const users = userList.slice(offset, offset + first);
            const lastUser = users[users.length - 1];

            return {
                pageInfo: {
                    endCursor: lastUser.hash,
                    hasNextPage: offset + first < userList.length,
                },
                edges: users.map((user) => ({
                    cursor: user.hash,
                    node: user,
                })),
            };
        }
    },
};

module.exports = { resolvers };