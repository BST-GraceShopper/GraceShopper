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

const Beer = () => {
  const history = useHistory()
  const [value, setValue] = React.useState()

  const handleChange = (event, newValue) => {
    // setValue(newValue)
    history.push(newValue)
  }
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    // history.goBack()
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
                  onClick={() => setOpen(true)}
                  label="Log In"
                />
              </Tabs>
            </div>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Login />
          </Modal>
        </Paper>
      </AppBar>
    </div>
  )
}

export default Beer
