const Sequelize = require('sequelize')
const db = require('../db')

const Spirit = db.define('spirit', {
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
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validattion: {
      notEmpty: true
    }
  },
  ABV: {
    type: Sequelize.DECIMAL,
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
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true
    }
  },
  size: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
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
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: true
  }
})

module.exports = Spirit
