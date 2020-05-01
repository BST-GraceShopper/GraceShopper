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

const CartList = ({cart}) => {
  console.log(cart)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {cart.map(item => {
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
                  image={item.image}
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
                {['maker', 'name', 'quantity'].map(key => {
                  return (
                    <Typography style={{color: 'white'}}>
                      {key}: {item[key]}
                    </Typography>
                  )
                })}
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to cart">
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

const mapStateToProps = ({wines}) => {
  return {wines}
}
const mapDispatchToProps = dispatch => {
  return {
    loadWines() {
      dispatch(getWines())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList)
