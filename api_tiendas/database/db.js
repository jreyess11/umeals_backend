import {createPool} from 'mysql2';
import { config } from 'dotenv';
config({ path: './env/.env' });

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    port: process.env.DB_PORT
})