/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {CardMedia, Card} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'

const WineList = ({wines}) => {
  console.log(wines)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {wines.map(wine => {
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
            <CardMedia image={wine.image} style={{width: 200, height: 200}} />
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {[
                'vintage',
                'vinter',
                'type',
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
              {/* <Typography style={{ color:'white'}}>Vinter: {wine.vinter}</Typography>
              <Typography style={{ color:'white'}}>Vintage: {wine.vintage}</Typography> */}
            </CardContent>
          </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(WineList)
