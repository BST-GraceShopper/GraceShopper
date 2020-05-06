const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  maker: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  productId: {
    type: Sequelize.UUID,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  }
})

module.exports = Order

/**
 * instanceMethods
 */
