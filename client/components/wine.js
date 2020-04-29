import React from 'react'
import {connect} from 'react-redux'
import {Wine} from './nav'

const WinePage = props => {
  return <Wine />
}

const mapStateToProps = props => {
  return {props}
}

export default connect(mapStateToProps)(WinePage)
