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
import AddIcon from '@material-ui/icons/Add'
import {Typography} from '@material-ui/core'
import {getSpirits} from '../../store'

const SpiritList = ({user, spirits}) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {spirits.map(spirit => {
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
              key={spirit.id}
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
                  image={spirit.image}
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
                  'ABV',
                  'maker',
                  'type',
                  'region',
                  'price',
                  'inventory'
                ].map(key => {
                  return (
                    <Typography style={{color: 'white'}}>
                      {key}: {spirit[key]}
                    </Typography>
                  )
                })}
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to cart"
                  onClick={() => addToCart(user.id, spirit.id)}
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

const mapStateToProps = ({spirits}) => {
  return {spirits}
}
const mapDispatchToProps = dispatch => {
  return {
    loadSpirits() {
      dispatch(getSpirits())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpiritList)
