import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
require('dotenv').config()



const main = async () => {
    const connection = await createConnection({
        type: 'mysql',
        url: process.env.DB_URL
    }).then(connection => {

        console.log('Connected successfully to db')

    }).catch(error => console.error(error));
    
}

main()




