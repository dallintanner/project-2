import { Vender, Item, db } from './model.js';

console.log('Syncing database...');
await db.sync({force: true});

console.log('Seeding database...');

const norco = await Vender.create({
    name: 'Norco',
    rep: 'Daryn Smith',
});

const filter = await Item.create({
    name: 'filter',
});

console.log(norco);
console.log(filter);



await db.close();
console.log('Finished seeding database!');