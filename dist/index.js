"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
require('dotenv').config();
const main = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        type: 'mysql',
        url: process.env.DB_URL
    }).then(connection => {
        console.log('Connected successfully to db');
    }).catch(error => console.error(error));
};
main();
//# sourceMappingURL=index.js.map