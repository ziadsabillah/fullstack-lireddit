import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";


const main = async () => {
 const orm = await MikroORM.init({
     entities: [Post],
     dbName: 'libreddit',
     type: 'mysql',
     debug: !__prod__,
     user: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
 })
}

main()

