import {DataTypes, INTEGER, Model} from 'sequelize';
import url from 'url';
import util, { deprecate } from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///inventory'); // I'm missing something here

class Item extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}
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
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        max: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        currentStock: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        venderId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        modelName: 'item',
        sequelize: db,
    },
);

class Vender extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}
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
        rep: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
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

export {Item, Vender, db};