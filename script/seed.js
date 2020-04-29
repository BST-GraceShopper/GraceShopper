'use strict'

const db = require('../server/db')
const {User, Wine} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const wines = await Promise.all([
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
        'https://media.istockphoto.com/photos/black-wine-bottle-with-an-empty-label-on-black-background-picture-id1074112266?k=6&m=1074112266&s=170667a&w=0&h=qoJq5vfF18Vt99t8zLUfKqFtIGxAzcq49u29t8Xn-tE='
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
        'https://media.istockphoto.com/photos/black-wine-bottle-with-an-empty-label-on-black-background-picture-id1074112266?k=6&m=1074112266&s=170667a&w=0&h=qoJq5vfF18Vt99t8zLUfKqFtIGxAzcq49u29t8Xn-tE='
    })
  ])

  console.log(`seeded ${users.length} users`)
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
