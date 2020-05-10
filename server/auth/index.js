const router = require('express').Router()
const User = require('../db/models/user')
const Guest = require('../db/models/guest')
const jwt = require('jwt-simple')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

// router.post('/guest/login', async (req, res, next) => {
//   try {
//     const token = req.body.token
//     console.log(token)
//     // const id = (jwt.decode(token, "NONE")).id
//     const guest = await Guest.findByPk(token)
//     // req.login(guest, err => (err ? next(err) : res.json(guest)))
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/guest/create', async (req, res, next) => {
  try {
    const guest = await Guest.create({})
    res.json(guest.id)
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
