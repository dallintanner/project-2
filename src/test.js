import { Vender, Item, db } from './model.js';

console.log('Syncing database...');
await db.sync({force: true});

console.log('Seeding database...');

const norco = await Vender.create({
    name: 'Norco',
    rep: 'Daryn Smith',
});

const addVender = () => { //nameIn, repIn, websiteIn, logoIn, notesIn, minOrderIn
    Vender.create({
        name: nameIn,
        rep: repIn,
        website: websiteIn,
        logo: logoIn,
        notes: notesIn,
        minOrder: minOrderIn,
    })
}


const filter = await Item.create({
    name: 'filter',
});

console.log(norco);
console.log(filter);



await db.close();
console.log('Finished seeding database!');