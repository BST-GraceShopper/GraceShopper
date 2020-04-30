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
  const {name, imgURL, imgPosition} = props
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
              textColor="white"
              onChange={handleChange}
              aria-label="disabled tabs example"
              style={{
                display: 'flex',
                flexDirection: 'flex',
                alignItems: 'center'
              }}
            >
              <Tab style={{color: 'white'}} value="/beer" label="Beer" />
              <Tab style={{color: 'white'}} value="/wine" label="Wine" />
              <Tab style={{color: 'white'}} value="/spirits" label="Spirits" />
              <Tab
                style={{color: 'white'}}
                value={'/login' && '/signup'}
                //   onClick={() => setOpen(true)}
                label="Log In/Sign Up"
              />
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

const mapBeer = () => {
  return {
    name: 'beer',
    imgURL:
      'https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg',
    imgPosition: 'left top'
  }
}

const mapWine = () => {
  return {
    name: 'wine',
    imgURL: 'https://citywinecellar.com/media/wysiwyg/2016/hpnew1.jpg',
    imgPosition: 'center top'
  }
}
const mapSpirits = () => {
  return {
    name: 'spirits',
    imgURL: 'https://www.drinkkosher.com/img/UploadImages/Whisky_Banner_14.jpg',
    imgPosition: 'right top'
  }
}

export const Beer = connect(mapBeer)(Nav)
export const WineHeader = connect(mapWine)(Nav)
export const Spirits = connect(mapSpirits)(Nav)
