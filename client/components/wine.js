import React, {Component} from 'react'
import {connect} from 'react-redux'
import {WineHeader} from './nav'
import WineList from './wines/WineList'
import {getWines} from '../store/'

class Wine extends Component {
  componentDidMount() {
    this.props.loadWines()
  }
  render() {
    const {wines} = this.props
    return (
      <div style={{color: 'white'}}>
        <WineHeader />
        <WineList wines={wines} />
      </div>
    )
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(Wine)
