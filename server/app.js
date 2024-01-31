import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { Item, Vender } from '../src/model.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhh', saveUninitialized: true, resave: false }));

app.get('/api/venders', async (req, res) => {
    const allVenders = await Vender.findAll({include: Item});
    res.json(allVenders);
});

app.get('/api/venderItems/:itemId', async (req, res) => {
    const { itemId } = req.params;
    const item = await Item.findAll({ where: { venderId: itemId } });
    res.json(item);
})

app.post('/api/newVender', async (req, res) => {
    const newestVender = await Vender.create(req.body);
    res.json({ success: true, newVender: newestVender });
})

app.post('/api/newItem', async (req, res) => {
    console.log(req.body)
    const newestItem = await Item.create({
        name: req.body.name,
        description: req.body.description,
        picture: req.body.picture,
        usage: req.body.usage,
        min: req.body.min,
        max: req.body.max,
        currentStock: req.body.currentStock,
        link: req.body.link,
        price: req.body.price,
        venderId: req.body.venderId
    });
    res.json({ success: true, newItem: newestItem });
})

app.delete('/api/venderItems/:venderID', async (req, res) => {
    const { venderID } = req.params;
    await Vender.destroy({
        where: {
            id: venderID
        }
    })
    res.json({ success: true });
})   

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));