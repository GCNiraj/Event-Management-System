const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const db  = require('./db');

const User = db.define('User', {
  cid: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phonenumber:{
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  address:{
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    defaultValue: 'default.jpg',
  },
  role: {
    type: DataTypes.ENUM('user', 'eventmanager', 'admin'),
    defaultValue: 'user',
  },
  otp: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('active','suspended','banned'),
    defaultValue: 'active'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],
    },
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 12);
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 12);
      }
    },
  },
});

User.prototype.correctPassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}

db.sync({alter: true})

module.exports = User;