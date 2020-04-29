import React from 'react'
import {connect} from 'react-redux'
import {Beer} from './nav'

const BeerPage = () => {
  return <Beer />
}

const mapStateToProps = props => {
  return {props}
}

export default connect(mapStateToProps)(BeerPage)
