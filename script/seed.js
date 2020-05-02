'use strict'

const db = require('../server/db')
const {User, Wine, Beer, Order, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const [Cody, Murphy] = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const [Wine1, Wine2] = await Promise.all([
    Wine.create({
      vinter: 'Vinter 1',
      vintage: 2019,
      brand: 'Wine 1',
      region: 'Old World',
      type: 'Red',
      grape: 'Cabernet Sauvignon',
      price: 500.0,
      inventory: 2,
      image:
        'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg'
    }),
    Wine.create({
      vinter: 'Vinter 2',
      vintage: 2019,
      brand: 'Wine 2',
      region: 'New World',
      type: 'White',
      grape: 'Sauvignon Blanc',
      price: 700.0,
      inventory: 1,
      image:
        'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg'
    })
  ])

  const [Product1, Product2] = await Promise.all([
    Product.create({
      maker: 'Vinter 1',
      year: 2019,
      name: 'Wine 1',
      region: 'Old World',
      type: 'Red',
      category: 'wine',
      grape: 'Cabernet Sauvignon',
      price: 500.0,
      inventory: 2,
      image:
        'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg'
    }),
    Product.create({
      maker: 'Vinter 2',
      year: 2019,
      name: 'Wine 2',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Pinot Noir',
      price: 700.0,
      inventory: 1,
      image:
        'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg'
    })
  ])

  const beers = await Promise.all([
    Beer.create({
      ABV: 7.5,
      brand: 'Mother Earth 4Seasons Hazy IPA',
      region: 'Nampa, ID',
      type: 'IPA',
      price: 20.0,
      inventory: 12
    }),
    Beer.create({
      ABV: 5.2,
      brand: 'Lakefront Brewery Hazy Rabbit IPA',
      region: 'Milwaukee, WI',
      type: 'IPA',
      price: 21.0,
      inventory: 6
    })
  ])

  const orders = await Promise.all([
    Order.create({
      userId: Cody.id,
      name: Wine1.brand,
      maker: Wine1.vinter,
      image: Wine1.image,
      quantity: 1,
      price: Wine1.price,
      status: 'cart'
    }),
    Order.create({
      userId: Cody.id,
      name: Wine2.brand,
      maker: Wine2.vinter,
      image: Wine2.image,
      quantity: 1,
      price: Wine2.price,
      status: 'cart'
    })
  ])

  console.log(`seeded users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
