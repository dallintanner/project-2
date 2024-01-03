import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import {Item, Vender} from '../src/model.js';

const app = express();
const port = '8000';
ViteExpress.config({printViteDevServerHost: true});

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: 'ssshhhh', saveUninitialized: true, resave: false}));

app.get('/api/venders', async (req, res) => {
    const allVenders = await Vender.findAll();
    res.json(allVenders);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));