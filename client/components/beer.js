import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BeerHeader} from './nav'
import BeerList from './BeerList'
import BeerListAdmin from './BeerListAdmin'
import {getBeers} from '../store/'

class Beer extends Component {
  componentDidMount() {
    this.props.loadbeers()
  }
  render() {
    const {beers, user} = this.props
    return (
      <div style={{color: 'white'}}>
        <BeerHeader />
        {user.level === 'admin' ? (
          <BeerListAdmin beers={beers} />
        ) : (
          <BeerList beers={beers} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({beers, user}) => {
  return {beers, user}
}
const mapDispatchToProps = dispatch => {
  return {
    loadbeers() {
      dispatch(getBeers())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Beer)
