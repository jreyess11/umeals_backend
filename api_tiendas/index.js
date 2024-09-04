import express from 'express';
import router from './routes/router.js';

console.log('Bienvenido a la API de Umeals!');

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
