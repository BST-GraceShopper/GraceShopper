/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {CardMedia, Card} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import {getSpirits} from '../../store'

const SpiritList = ({spirits}) => {
  console.log(spirits)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {spirits.map(spirit => {
        return (
          <Card
            elevation={3}
            style={{
              width: 'calc(100%/4)',
              margin: 20,
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'black',
              justifyContent: 'center'
            }}
          >
            <CardMedia image={spirit.image} style={{width: 200, height: 200}} />
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {[
                'category',
                'ABV',
                'brand',
                'type',
                'region',
                'size',
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
          </Card>
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
    loadWines() {
      dispatch(getSpirits())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpiritList)
