import {DataTypes, Model} from 'sequelize';
import url from 'url';
import util, { deprecate } from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///items'); // I'm missing something here

class Item extends Model {}
Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'placholder picture url',
        },
        usage: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        min: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
        },
        max: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
        },
        currentStock: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER(4),
            defaultValue: 0,
        },
    },
    {
        modelName: 'item',
        sequelize: db,
    },
);

class Vender extends Model {}
Vender.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        website: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        minOrder: {
            type: DataTypes.INTEGER(6),
            allowNull: true,
        },
    },
    {
        modelName: 'vender',
        sequelize: db,
    },
);

Vender.hasMany(Item, {foreignKey: 'venderId' });
Item.belongsTo(Vender, {foreignKey: 'venderId'});

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
}

export {Item, Vender};