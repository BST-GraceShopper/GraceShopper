import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'

const WineList = ({wines}) => {
  console.log(wines)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {wines.map(wine => {
        return (
          <Paper
            elevation={3}
            style={{
              width: 'calc(100%/4)',
              height: 200,
              margin: 20,
              padding: 10,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography>Vinter: {wine.vinter}</Typography>
            <Typography>Vintage: {wine.vintage}</Typography>
          </Paper>
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
