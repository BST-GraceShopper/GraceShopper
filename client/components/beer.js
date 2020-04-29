import React from 'react'
import {connect} from 'react-redux'
import {Paper, Typography, AppBar, Grid, Modal} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Login, Signup} from './auth-form'

const Beer = props => {
  const {history} = props
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
  }

  return (
    <div style={{display: 'flex', block: 'overlay'}}>
      <AppBar
        position="static"
        style={{background: 'transparent', boxShadow: 'none'}}
      >
        <Paper
          square
          style={{
            padding: 10,
            backgroundImage:
              'url("https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg")',
            backgroundPosition: 'left top',
            backgroundSize: 'cover',
            border: '1px solid black',
            boxShadow: 'none',
            width: '100%',
            height: 600,
            margin: '0px 0px 50px'
          }}
        >
          <Grid item>
            <div
              style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
            >
              <Typography variant="h4" style={{color: 'white', margin: 10}}>
                Grace Shopper
              </Typography>
              <Tabs
                value={history.location.pathname}
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
                <Tab
                  style={{color: 'white'}}
                  value="/spirits"
                  label="Spirits"
                />
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
        </Paper>
      </AppBar>
    </div>
  )
}

const mapStateToProps = props => {
  return {props}
}

export default connect(mapStateToProps)(Beer)
