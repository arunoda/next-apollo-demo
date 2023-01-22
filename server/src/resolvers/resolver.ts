import {faker} from "@faker-js/faker";

export const resolvers = {
    Query: {
        name() {
            return faker.name.fullName();
        },
        users: (parent, args) => {
            // TODO: limit to 2000 records
            const {limit, offset} = args;
            const numberOfUsers = (offset ?? 0) + (limit ?? 0);
            const users = [];
            for(let i = offset ?? 0; i< numberOfUsers; i++) {
                users.push({
                    name: faker.name.fullName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.phone.number(),
                });
            }
            return users;
        },
    },
};
