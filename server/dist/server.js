"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const cors = require('cors')
// const myGraphQLSchema = require('./src/schema')
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const schema_1 = __importDefault(require("./schema"));
const APP = (0, express_1.default)();
// For Apollo Server Express 3.0 and above,
// we need to define an async function for Apollo initialization as before
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield schema_1.default.start();
        // Middleware: GraphQL
        schema_1.default.applyMiddleware({
            app: APP
        });
    });
}
startServer();
// Express: Port
const PORT = 5000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`The server has started on port: ${PORT}`);
    // tslint:disable-next-line:no-console
    console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
exports.default = APP;
//# sourceMappingURL=server.js.map