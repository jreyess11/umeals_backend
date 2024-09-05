import express from 'express';
import router from './routes/router.js';
import { config } from 'dotenv';
config({ path: './env/.env' });


console.log('Bienvenido al login de UMEAL');

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
