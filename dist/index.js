"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: 'libreddit',
        type: 'mysql',
        debug: !constants_1.__prod__,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });
};
main();
//# sourceMappingURL=index.js.map