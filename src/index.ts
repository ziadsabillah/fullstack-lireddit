import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
require('dotenv').config()



const main = async () => {
    const connection = await createConnection({
        type: 'mysql',
        url: process.env.DB_URL,
        entities: ["entities/*.ts"],
        migrations: ["migrations/*.ts"],
        migrationsTableName: 'custom_migration_table',
        cli: {
            "migrationsDir": "migrations"
        }
    }).then(connection => {

        console.log('Connected successfully to db')

    }).catch(error => console.error(error));
    
}

main()




