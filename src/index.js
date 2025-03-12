import express from 'express';
const app = express();
import path from 'path';
import { PORT } from './config.js';
import { clienteRoutes, productosRoutes, insercionRoutes, loginRoutes} from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));
app.use(express.static('src'));

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('src/login.html'));
});


app.get('/register', (req, res) => {
    res.sendFile(path.resolve('src/register.html'));
});

app.use('/', clienteRoutes);
app.use('/productos', productosRoutes);
app.use('/insercion', insercionRoutes)
app.use('/login', loginRoutes);


app.listen(PORT, () => {
    console.log("Servidor corriendo", PORT);
});