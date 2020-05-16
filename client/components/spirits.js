import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SpiritsHeader} from './nav'
import SpiritList from './SpiritList'
import SpiritListAdmin from './SpiritListAdmin'
import {getSpirits} from '../store/'

class Spirit extends Component {
  componentDidMount() {
    this.props.loadSpirits()
  }
  render() {
    const {spirits, user} = this.props
    console.log(spirits)
    return (
      <div style={{color: 'white'}}>
        <SpiritsHeader />
        {user.isAdmin ? (
          <SpiritListAdmin spirits={spirits} />
        ) : (
          <SpiritList spirits={spirits} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({spirits, user}) => {
  return {spirits, user}
}

const mapDispatchToProps = dispatch => {
  return {
    loadSpirits() {
      dispatch(getSpirits())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spirit)
