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
    venderId: 3,
});
const respFilter = await Item.create({
    name: 'Respirator Filter',
    min: 2,
    max: 4,
    venderId: 2,
});
const routerBit = await Item.create({
    name: 'Router Bit',
    min: 1,
    max: 2,
    venderId: 1,
});

//flapDisc.setVender(amazon);

// async function showByVenderEager(){
//     const itms = await Item.findAll({include: Vender});

//     for (const itm of itms){
//         const vend = itm.venderId;
//         if(vend){
//             console.log(itm.name, vend.name);
//         } else {
//              console.log(itm.name, '-');
//         }
//     }
// }

// async function showByVender(){
//     const itms = await Item.findAll();

//     itms.forEach(async (itm) => {
//         const vend = await itm.getVender();
//         if(vend){
//             console.log(itm.name, vend.name)
//         } else {
//             console.log(itm.name, '-');
//         }
//     });
// }

// showByVenderEager();

const allVenders = await Vender.findAll()
console.log(allVenders);

const allItems = await Item.findAll()
console.log(allItems);

// const itemVender = await Item.findAll()

await db.close();
console.log('Finished seeding database!');