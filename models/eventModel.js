const { DataTypes } = require('sequelize')
const db = require('./db')
const User = require('./userModel')

const Event = db.define('Event',{
    eventid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    eventmanagerCID: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'cid'
        },
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventLocation: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Correct `belongsTo` association with proper foreign key syntax
Event.belongsTo(User, { foreignKey: 'cid' });

// Sync database and handle potential issues with column existence
async function syncDb() {
    try {
        const tableDefinition = await db.getQueryInterface().describeTable('Events');
        if (!tableDefinition.cid) {
            await db.sync({ alter: true });
        } else {
            console.log('Column "cid" already exists in "Events" table. No alteration needed.');
        }
    } catch (error) {
        console.error('Error during sync:', error);
    }
}

syncDb();

module.exports = Event;