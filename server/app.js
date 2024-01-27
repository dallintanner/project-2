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

app.get('/api/venderItems/:itemId', async (req, res ) => {
    const {itemId} = req.params;
    const item = await Item.findAll({where: {venderId: itemId}});
    res.json(item);
})

app.post('/api/newVender', async (req, res) => {
    //console.log(req.body);

     const newestVender = await Vender.create(req.body);

    res.json({success: true, newVender: newestVender});
})

// app.delete('/api/VenderDetails', async (req, res) => {
//     const venderToDelete = await vender.findByPk(req.body);
//     await venderToDelete.destroy();

//     res.json({success: true});
// })

app.delete('/api/venderItems/:venderID', async (req, res) => {
    const {venderID} = req.params;
    await Vender.destroy({
        where: {
            id: venderID
        }
    })
    res.json({success: true});
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));