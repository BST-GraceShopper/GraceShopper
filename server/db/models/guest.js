const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guest', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  }
})

module.exports = Guest
