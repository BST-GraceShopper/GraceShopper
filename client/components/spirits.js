import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Button from '@material-ui/core/Button'
import {HashRouter, Route, Link, useHistory, Redirect} from 'react-router-dom'
import {
  Divider,
  Paper,
  Typography,
  AppBar,
  Grid,
  Modal
} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import {Login, Signup} from './auth-form'

//beer banner: https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg no background position
//wine banner: backgroundImage: 'url("https://citywinecellar.com/media/wysiwyg/2016/hpnew1.jpg")', no background position
//spirit banner: backgroundImage: 'url("https://www.drinkkosher.com/img/UploadImages/Whisky_Banner_14.jpg")', backgroundPosition:'right'

const Spirits = props => {
  const {history} = props
  const [value, setValue] = React.useState()
  const handleChange = (event, newValue) => {
    if (newValue === '/login' || newValue === '/signup') {
      setValue(newValue)
      setPage(newValue)
    } else {
      history.push(newValue)
    }
  }
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState('/login')

  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
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
              'url("https://www.drinkkosher.com/img/UploadImages/Whisky_Banner_14.jpg")',
            backgroundPosition: 'right',
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
                  value="/login"
                  onClick={() => setOpen(true)}
                  label="Log In"
                />
                <Tab
                  style={{color: 'white'}}
                  value="/signup"
                  onClick={() => setOpen(true)}
                  label="Sign Up"
                />
              </Tabs>
            </div>
          </Grid>
          <Modal
            open={open}
            page={page}
            onClose={handleClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {page === '/login' ? <Login /> : <Signup />}
          </Modal>
        </Paper>
      </AppBar>
    </div>
  )
}

const mapStateToProps = props => {
  return {props}
}

export default connect(mapStateToProps)(Spirits)
