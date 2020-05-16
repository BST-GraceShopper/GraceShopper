import React, {Component} from 'react'
import {connect} from 'react-redux'
import {WineHeader} from './nav'
import WineList from './WineList'
import WineListAdmin from './WineListAdmin'
import {getWines} from '../store/'

class Wine extends Component {
  componentDidMount() {
    this.props.loadwines()
  }
  render() {
    const {wines, user} = this.props
    return (
      <div style={{color: 'white'}}>
        <WineHeader />
        {user.isAdmin ? (
          <WineListAdmin wines={wines} />
        ) : (
          <WineList wines={wines} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({wines, user}) => {
  return {wines, user}
}
const mapDispatchToProps = dispatch => {
  return {
    loadwines() {
      dispatch(getWines())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wine)
