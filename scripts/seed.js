import {Vender, Item, db} from '../src/model.js';

console.log('Syncing database...');
await db.sync({force: true});

console.log('Seeding database...');

const norco = await Vender.create({
    name: 'Norco',
    rep: 'Daryn Smith',
});
const oldDominion = await Vender.create({
    name: 'Old Dominion',
    rep: 'Brad',
});
const profPlastic = await Vender.create({
    name: 'Professional Plastic',
    rep: 'Alan',
});
const amazon = await Vender.create({
    name: 'Amazon',
    website: 'amazon.com',
});

const flapDisc = await Item.create({
    name: 'Flap Disc',
    min: 10,
    max: 100,
});
const respFilter = await Item.create({
    name: 'Respirator Filter',
    min: 2,
    max: 4,
});
const routerBit = await Item.create({
    name: 'Router Bit',
    min: 1,
    max: 2,
});

// console.log(amazon);
// console.log(oldDominion);
// console.log(flapDisc);
// console.log(routerBit);

const allVenders = await Vender.findAll()

    console.log(allVenders);

// for(let each of Item){
//     console.log(each);
// }

await db.close();
console.log('Finished seeding database!');