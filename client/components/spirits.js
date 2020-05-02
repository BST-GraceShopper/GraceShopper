import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SpiritsHeader} from './nav'
import SpiritList from './spirits/SpiritList'
import {getSpirits} from '../store/'

class Spirit extends Component {
  componentDidMount() {
    this.props.loadWines()
  }
  render() {
    const {spirits} = this.props
    console.log(spirits)
    return (
      <div style={{color: 'white'}}>
        <SpiritsHeader />
        <SpiritList spirits={spirits} />
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Spirit)
