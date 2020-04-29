import React from 'react'
import {connect} from 'react-redux'
import {Spirits} from './nav'

const SpiritPage = () => {
  return <Spirits />
}

const mapStateToProps = props => {
  return {props}
}

export default connect(mapStateToProps)(SpiritPage)
