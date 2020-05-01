const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: false
  },
  productId: {
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
  }
})

module.exports = Cart

/**
 * instanceMethods
 */

Cart.prototype.addToCart = async (productId, userId) => {
  return await Cart.create({productId, userId})
}

Cart.prototype.removeFromCart = async (productId, userId) => {
  return await Cart.destroy({productId, userId})
}

Cart.prototype.getCart = ({userId}) => {
  return Cart.findAll({where: {userId}})
}
