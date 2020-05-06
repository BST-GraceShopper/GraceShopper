/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {
  CardMedia,
  Card,
  Button,
  CardActions,
  IconButton,
  ButtonBase
} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {addToCart} from '../store/'

const WineList = ({user, wines, addToCart}) => {
  const token = window.localStorage.getItem('guestToken')
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {wines.map(wine => {
        return (
          <ButtonBase
            style={{
              width: 'calc(100%/4)',
              margin: 20,
              padding: 10,
              backgroundColor: 'black',
              border: '1px white solid'
            }}
          >
            <Card
              elevation={3}
              key={wine.id}
              style={{
                width: 'calc(100%)',
                display: 'flex',
                backgroundColor: 'black',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: 'calc(100%)',
                  display: 'flex',
                  backgroundColor: 'black',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <CardMedia
                  image={wine.image}
                  style={{width: 200, height: 200}}
                />
              </div>
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {[
                  'name',
                  'maker',
                  'category',
                  'grape',
                  'region',
                  'price',
                  'inventory'
                ].map(key => {
                  return (
                    <Typography style={{color: 'white'}}>
                      {key}: {wine[key]}
                    </Typography>
                  )
                })}
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to cart"
                  onClick={() => addToCart(user.id || token, wine.id)}
                >
                  <AddIcon color="secondary" />
                </IconButton>
              </CardActions>
            </Card>
          </ButtonBase>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({wines, user}) => {
  return {wines, user}
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart(userId, productId) {
      dispatch(addToCart(userId, productId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WineList)
