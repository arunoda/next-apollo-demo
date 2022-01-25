"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const helper_1 = require("./util/helper");
// GraphQL: Resolvers
exports.default = {
    Query: {
        User: () => {
            const data = {
                name: faker_1.default.name.findName(),
                email: faker_1.default.internet.email(),
                phoneNumber: faker_1.default.phone.phoneNumber(),
                address: faker_1.default.address.streetAddress(),
                image: faker_1.default.image.avatar()
            };
            return data;
        },
        UsersList(parent, { count = helper_1.DEFAULT_COUNT, page = 1 }) {
            const users = new Array(count).fill(0).map(_ => ({
                name: faker_1.default.name.findName(),
                email: faker_1.default.internet.email(),
                phoneNumber: faker_1.default.phone.phoneNumber(),
                address: faker_1.default.address.streetAddress(),
                image: faker_1.default.image.avatar()
            }));
            const hasNextPage = count !== helper_1.DEFAULT_COUNT && (page * 10) < helper_1.DEFAULT_COUNT;
            return { users, hasNextPage };
        },
    }
};
// export default resolver;
//# sourceMappingURL=resolvers.js.map