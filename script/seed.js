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
      maker: 'Vino Maestro',
      year: 2019,
      name: 'Chinchilla',
      region: 'Old World',
      type: 'White',
      category: 'wine',
      grape: 'Moscato',
      price: 500.0,
      inventory: 2,
      image:
        'http://clipart-library.com/new_gallery/170-1707861_wine-bottle.png'
      // '/images/winebottle.png'
    }),
    Product.create({
      maker: 'True & Daring',
      year: 2019,
      name: 'Richter Reserve',
      region: 'New World',
      type: 'White',
      category: 'wine',
      grape: 'Riesling',
      price: 700.0,
      inventory: 1,
      image:
        'http://clipart-library.com/images_k/wine-bottle-transparent-background/wine-bottle-transparent-background-17.png'
      // '/images/winebottle.png'
    }),
    Product.create({
      maker: 'Argento',
      year: 2010,
      name: 'Reserva',
      region: 'Old World',
      type: 'Red',
      category: 'wine',
      grape: 'Malbec',
      price: 500.0,
      inventory: 2,
      image: 'https://pngimg.com/uploads/bottle/bottle_PNG2066.png'
    }),
    Product.create({
      maker: 'Joel Sokin',
      year: 2019,
      name: 'Aiken',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Pinot Noir',
      price: 500.0,
      inventory: 2,
      image: 'https://pngimg.com/uploads/wine/wine_PNG9473.png'
    }),
    Product.create({
      maker: 'Hyland',
      year: 2017,
      name: 'Kelly Fox',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Pinot Noir',
      price: 500.0,
      inventory: 2,
      image:
        'https://www.vinboundmarketing.com/wp-content/uploads/2018/12/2017-Coury-Clone.png'
    }),
    Product.create({
      maker: 'Brown Hill',
      year: 2019,
      name: 'Ivanhoe',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Cabernet Sauvignon',
      price: 700.0,
      inventory: 1,
      image:
        'https://www.brownhillestate.com.au/assets/images/products/pictures/20_20160718_BROWNHILL_WhiteBackgroundBottles_copy.png'
    }),
    Product.create({
      maker: 'Sterling Vineyards',
      year: 2019,
      name: 'Winemaker Select',
      region: 'New World',
      type: 'White',
      category: 'wine',
      grape: 'White Blend',
      price: 500.0,
      inventory: 2,
      image:
        'https://www.sterlingvineyards.com/-/media/Images/Sterling/Bottle-Shots/Sterling-2014-CellarClub-NV-Winemakers-Select-WhiteBlend-750.ashx?la=en&modified=20181128021252&mw=1382&hash=B382EC6ABA465117924B126A399DFEC4583439B4'
    }),
    Product.create({
      maker: 'Merkin Vineyard',
      year: 2019,
      name: 'Riserva',
      region: 'New World',
      type: 'White',
      category: 'wine',
      grape: 'Chardonnay',
      price: 500.0,
      inventory: 2,
      image:
        'https://caduceus.org/wp-content/themes/caduceus/images/merkin-white-wine-bottle.png'
    }),
    Product.create({
      maker: 'Robert Mondavi',
      year: 2019,
      name: 'Fume Blanc',
      region: 'New World',
      type: 'White',
      category: 'wine',
      grape: 'Sauvignon Blanc',
      price: 700.0,
      inventory: 1,
      image:
        'https://www.saq.com/media/catalog/product/2/2/221887-1_1580592910.png?quality=80&fit=bounds&height=&width='
    }),
    Product.create({
      maker: 'Cullen',
      year: 2011,
      name: 'Diana Madeline',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Red Blend',
      price: 500.0,
      inventory: 2,
      image:
        'https://lh4.googleusercontent.com/proxy/eTdSBVGatoZAIG6Afn4LFy__W6fhPw6b0JbA-JsVxN1PocEXieCb4h9Nie8RrLXHbe5kQHIOkvz7Qk-Ct87TUB_cBtcrU5lga5ryESy-zzy0uHfn-Qct0DmI-vO8uuWuT2F5JEF327tLuIhi_A'
    }),
    Product.create({
      maker: 'Josh Cellars',
      year: 2019,
      name: 'North Coast Reserve',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Cabernet Sauvignon',
      price: 700.0,
      inventory: 1,
      image:
        'https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/10/108685-JOSH-NORTH-COAST-RES-CABERNET-SAUVIGNON.png'
    }),
    Product.create({
      maker: 'Stags Leap',
      year: 2018,
      name: 'Reserve',
      region: 'New World',
      type: 'Red',
      category: 'wine',
      grape: 'Cabernet Sauvignon',
      price: 700.0,
      inventory: 1,
      image:
        // 'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg'
        '/images/winebottle.png'
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
      maker: 'Long Trail',
      name: 'Long Trail Ale',
      region: 'Vermont',
      type: 'ALE',
      category: 'beer',
      price: 10.99,
      inventory: 20,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/hd0/h63/8940607340574.png'
    }),
    Product.create({
      ABV: 4.3,
      maker: "O'Hara's",
      name: 'Irish Red',
      region: 'Ireland',
      type: 'ALE',
      category: 'beer',
      price: 24.99,
      inventory: 12,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h26/hac/8806081167390.png'
    }),
    Product.create({
      ABV: 6.0,
      maker: 'Rogue',
      name: "Santa's Private Reserve",
      region: 'Oregon',
      type: 'ALE',
      category: 'beer',
      price: 17.99,
      inventory: 12,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h41/h4c/11019505631262.png'
    }),
    Product.create({
      ABV: 11.0,
      maker: 'Allagash',
      name: 'Curieux',
      region: 'Maine',
      type: 'ALE',
      category: 'beer',
      price: 17.99,
      inventory: 12,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/hd8/ha3/8802889465886.png'
    }),
    Product.create({
      ABV: 10.0,
      maker: "Samuel Smith's",
      name: 'Organic Chocolate Stout',
      region: 'England',
      type: 'ALE',
      category: 'beer',
      price: 22.99,
      inventory: 12,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h22/h4d/8806007078942.png'
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
