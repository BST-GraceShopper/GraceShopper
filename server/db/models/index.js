const User = require('./user')
const Wine = require('./wine')
const Order = require('./order')
const Product = require('./product')
const Beer = require('./beer')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Order.belongsTo(User)
Order.hasMany(Product)

addToCart = async (prodId, userId) => {
  const {productId, name, maker, image} = await Product.findByPk(productId)
  return await Cart.create({userId, productId, name, maker, image, quantity: 1})
}
removeFromCart = async (productId, userId) => {
  return await Cart.destroy({where: {userId, productId}})
}

module.exports = {
  User,
  Wine,
  Order,
  Product,
  Beer
}
