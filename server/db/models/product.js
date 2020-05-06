const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
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
  ABV: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validation: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  maker: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validation: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  type: {
    type: Sequelize.STRING,
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
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  grape: {
    type: Sequelize.STRING,
    allowNull: true,
    validation: {
      notEmpty: true
    }
  }
})

module.exports = Product
