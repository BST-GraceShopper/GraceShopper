import React, {Component} from 'react'
import {connect} from 'react-redux'

const WineList = ({wines}) => {
  console.log(wines)
  return (
    <div>
      <ul>
        {wines.map(wine => {
          return <li>{wine.vinter}</li>
        })}
      </ul>
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
