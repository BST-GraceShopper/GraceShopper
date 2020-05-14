'use strict'

const db = require('../server/db')

const {User, Order, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const [Cody, Murphy] = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', isAdmin: true}),
    User.create({email: 'murphy@email.com', password: '123', isAdmin: false})
  ])

  const products = await Promise.all([
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
    }),
    Product.create({
      ABV: 7.5,
      maker: 'Mother Earth',
      name: '4Seasons Hazy IPA',
      region: 'Nampa, ID',
      type: 'IPA',
      category: 'beer',
      price: 20.0,
      inventory: 12,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h53/h9c/11192333664286.png'
    }),
    Product.create({
      ABV: 5.2,
      maker: 'Lakefront Brewery',
      name: 'Hazy Rabbit IPA',
      region: 'Milwaukee, WI',
      type: 'IPA',
      category: 'beer',
      price: 29.0,
      inventory: 6,
      image:
        'https://static.vinepair.com/wp-content/uploads/2019/03/btbhazyipa_internal_lakefront.png'
    }),
    Product.create({
      ABV: 6.8,
      maker: 'Anchor Brewing',
      name: 'Fog Breaker IPA',
      region: 'San Francisco, CA',
      type: 'IPA',
      category: 'beer',
      price: 24.0,
      inventory: 12,
      image:
        'https://static.vinepair.com/wp-content/uploads/2019/12/fogbreaker.png'
    }),
    Product.create({
      ABV: 4.0,
      maker: 'Shiner',
      name: 'Ruby Redbird',
      region: 'Shiner, TX',
      type: 'Lager',
      category: 'beer',
      price: 27.0,
      inventory: 12,
      image:
        'https://static.vinepair.com/wp-content/uploads/2019/12/RubyRedbird.png'
    }),
    Product.create({
      category: 'Spirit',
      ABV: 40.0,
      name: 'Gentelman Jack',
      maker: "Jack Daniel's",
      type: 'Whiskey',
      region: 'Tennessee, USA',
      size: 1.75,
      price: 54.99,
      inventory: 21,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/hd6/h8d/8799633801246.png'
    }),
    Product.create({
      category: 'Spirit',
      ABV: 40.0,
      maker: 'Crown Royal',
      name: 'Special Reserve',
      type: 'Whiskey',
      region: 'Canada',
      size: 1.75,
      price: 86.99,
      inventory: 9,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h04/h4c/12468343799838.png'
    }),
    Product.create({
      category: 'Spirit',
      ABV: 58.6,
      maker: "Clyde May's",
      name: '9 YR Alabama Style Cask Strength',
      type: 'Whiskey',
      region: 'Alabama, USA',
      size: 0.75,
      price: 129.99,
      inventory: 5,
      image: ''
    }),
    Product.create({
      category: 'Spirit',
      ABV: 40.0,
      maker: 'Jameson',
      name: '18 YR',
      type: 'Whiskey',
      region: 'Ireland',
      size: 0.75,
      price: 86.99,
      inventory: 16,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/hf3/h4e/11698283937822.png'
    }),
    Product.create({
      category: 'Spirit',
      ABV: 48.0,
      maker: 'Shin',
      name: '10 YR Malt Whiskey Mizunara Oak Finish',
      type: 'Whiskey',
      region: 'Japan',
      size: 0.75,
      price: 99.99,
      inventory: 8,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/haf/h26/12306864472094.png'
    }),
    Product.create({
      category: 'Spirit',
      ABV: 46.0,
      maker: 'Westland',
      name: 'Sherry Wood Single Malt',
      type: 'Whiskey',
      region: 'USA',
      size: 0.75,
      price: 79.99,
      inventory: 13,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h70/hd7/12291719331870.png'
    }),

    //--- TEQUILA ---
    Product.create({
      category: 'Spirit',
      ABV: 40.0,
      maker: 'Patron',
      name: 'Reposado',
      type: 'Tequlia',
      region: 'Mexico',
      size: 0.75,
      price: 49.99,
      inventory: 9,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h0c/h29/12217904201758.png'
    })
  ])

  //const spirits = await Promise.all([
  // Spirit.create({
  //   category: 'Tequila',
  //   ABV: 40.0,
  //   brand: 'Patron',
  //   type: 'Reposado',
  //   region: 'Mexico',
  //   size: 0.75,
  //   price: 49.99,
  //   inventory: 9,
  //   image:
  //     ''
  // }),
  // Spirit.create({
  //   category: 'Tequila',
  //   ABV: 40.0,
  //   brand: 'Patron',
  //   type: 'Reposado',
  //   region: 'Mexico',
  //   size: 0.75,
  //   price: 49.99,
  //   inventory: 9,
  //   image:
  //     ''
  // }),
  // Spirit.create({
  //   category: 'Tequila',
  //   ABV: 40.0,
  //   brand: 'Patron',
  //   type: 'Reposado',
  //   region: 'Mexico',
  //   size: 0.75,
  //   price: 49.99,
  //   inventory: 9,
  //   image:
  //     ''
  // }),
  // Spirit.create({
  //   category: 'Tequila',
  //   ABV: 40.0,
  //   brand: 'Patron',
  //   type: 'Reposado',
  //   region: 'Mexico',
  //   size: 0.75,
  //   price: 49.99,
  //   inventory: 9,
  //   image:
  //     ''
  // }),
  // Spirit.create({
  //   category: 'Tequila',
  //   ABV: 40.0,
  //   brand: 'Patron',
  //   type: 'Reposado',
  //   region: 'Mexico',
  //   size: 0.75,
  //   price: 49.99,
  //   inventory: 9,
  //   image:
  //     ''
  // }),

  //   //--- RUM ---
  //   Spirit.create({
  //     category: 'Rum',
  //     ABV: 40.0,
  //     brand: "Jack Daniel's",
  //     type: 'Gentelman Jack',
  //     region: 'Lynchburg, Tennessee',
  //     size: 1.75,
  //     price: 54.99,
  //     inventory: 16,
  //     image: ''
  //   }),

  //   //--- VODKA ---
  //   Spirit.create({
  //     category: 'Vodka',
  //     ABV: 40.0,
  //     brand: "Jack Daniel's",
  //     type: 'Gentelman Jack',
  //     region: 'Lynchburg, Tennessee',
  //     size: 1.75,
  //     price: 54.99,
  //     inventory: 16,
  //     image: ''
  //   }),

  //   //--- SCOTCH ---
  //   Spirit.create({
  //     category: 'Scotch',
  //     ABV: 40.0,
  //     brand: "Jack Daniel's",
  //     type: 'Gentelman Jack',
  //     region: 'Lynchburg, Tennessee',
  //     size: 1.75,
  //     price: 54.99,
  //     inventory: 16,
  //     image: ''
  //   })
  // ])

  // const orders = await Promise.all([
  //   Order.create({
  //     userId: Cody.id,
  //     name: Product1.name,
  //     maker: Product1.maker,
  //     image: Product1.image,
  //     quantity: 1,
  //     price: Product1.price,
  //     status: 'cart',
  //     productId: Product1.id
  //   }),
  //   Order.create({
  //     userId: Cody.id,
  //     name: Product2.name,
  //     maker: Product2.maker,
  //     image: Product2.image,
  //     quantity: 1,
  //     price: Product2.price,
  //     status: 'cart',
  //     productId: Product2.id
  //   })
  // ])

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
