import React from 'react'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {Paper, Typography, AppBar, Grid, Modal} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Login, Signup} from './auth-form'
// const spiritImage = require('./public/images/spirits.jpg')
// const beerImage = require('./public/images/beer.jpg')
// const wineImage = require('..../public/images/wine.jpg')

const Nav = props => {
  const {name, imgURL, imgPosition, user} = props
  const history = useHistory()
  const [value, setValue] = React.useState(window.location.pathname)
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState('/login')
  const handleChange = (event, newValue) => {
    if (newValue === '/login' || newValue === '/signup') {
      setOpen(true)
    } else {
      history.push(newValue)
    }
    setValue(newValue)
  }
  const handleClose = () => {
    setOpen(false)
    setValue(window.location.pathname)
  }

  return (
    <Paper
      square
      style={{
        padding: 10,
        backgroundImage: `url(${imgURL})`,
        backgroundPosition: imgPosition,
        backgroundSize: 'cover',
        border: '1px solid black',
        width: '100%',
        height: 500,
        margin: '0px 0px 50px',
        boxShadow: 'inset 600px -125px 5000px black'
      }}
    >
      <AppBar
        position="static"
        style={{background: 'transparent', boxShadow: 'none'}}
      >
        <Grid item>
          <div
            style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
          >
            <Typography
              variant="h3"
              style={{
                margin: '0px 25px 0px 0px',
                padding: 10,
                borderRadius: 200,
                fontFamily: 'cursive'
              }}
            >
              GS
            </Typography>
            <Tabs
              value={value}
              indicatorColor="secondary"
              color="textSecondary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              style={{
                display: 'flex',
                flexDirection: 'flex',
                alignItems: 'center'
              }}
            >
              <Tab color="secondary" value="/home" label="Home" />
              <Tab style={{color: 'white'}} value="/beer" label="Beer" />
              <Tab style={{color: 'white'}} value="/wine" label="Wine" />
              <Tab style={{color: 'white'}} value="/spirits" label="Spirits" />
              <Tab style={{color: 'white'}} value="/cart" label="Cart" />
              {!user.id ? (
                <Tab
                  style={{color: 'white'}}
                  value={'/login' && '/signup'}
                  label="Log In/Sign Up"
                />
              ) : (
                <Tab color="secondary" value="/logout" label="Log Out" />
              )}
            </Tabs>
          </div>
        </Grid>
        <Modal
          open={open}
          value={value}
          color="secondary"
          onClose={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Paper
            variant="outlined"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 30,
              width: 'calc(100%*2/3)'
            }}
          >
            {page === '/login' ? <Login /> : <Signup />}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '50px 0px 0px'
              }}
            >
              {page === '/signup' ? (
                <Typography>
                  Already have an account?{' '}
                  <a color="primary" onClick={() => setPage('/login')}>
                    Log In
                  </a>
                </Typography>
              ) : (
                <Typography>
                  Don't have an account?{' '}
                  <a color="primary" onClick={() => setPage('/signup')}>
                    Sign Up
                  </a>
                </Typography>
              )}
            </div>
          </Paper>
        </Modal>
      </AppBar>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100%*2/3)',
          width: 'calc(100%/3)'
        }}
      >
        <Typography
          variant="h1"
          style={{
            color: 'white',
            margin: 10,
            fontFamily: 'Petit Formal Script, cursive'
          }}
        >
          {name}
        </Typography>
      </div>
    </Paper>
  )
}

const mapBeer = state => {
  const {user} = state
  return {
    name: 'Beer',
    imgURL:
      'https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg',
    imgPosition: 'left top',
    user
  }
}

const mapWine = state => {
  const {user} = state
  return {
    name: 'Wine',
    imgURL: 'https://citywinecellar.com/media/wysiwyg/2016/hpnew1.jpg',
    imgPosition: 'center top',
    user
  }
}
const mapSpirits = state => {
  const {user} = state
  return {
    name: 'Spirits',
    imgURL: 'https://www.drinkkosher.com/img/UploadImages/Whisky_Banner_14.jpg',
    imgPosition: 'right top',
    user
  }
}

const mapCart = state => {
  const {user} = state
  return {
    name: 'Cart',
    imgURL:
      'http://barnbottleshop.com/wp-content/uploads/2019/02/banner-img.jpg',
    imgPosition: 'right top',
    user
  }
}

const mapHome = state => {
  const {user} = state
  return {
    name: 'Home',
    imgURL:
      'https://static.wixstatic.com/media/b85605_8f7ddc550f034145a7c98a3b1086e309~mv2.jpeg',
    imgPosition: 'center bottom',
    user
  }
}

export const Beer = connect(mapBeer)(Nav)
export const WineHeader = connect(mapWine)(Nav)
export const SpiritsHeader = connect(mapSpirits)(Nav)
export const CartHeader = connect(mapCart)(Nav)
export const HomeHeader = connect(mapHome)(Nav)
