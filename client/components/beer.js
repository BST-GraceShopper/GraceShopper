import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BeerHeader} from './nav'
import BeerList from './BeerList'
import {getBeers} from '../store/'

class Beer extends Component {
  componentDidMount() {
    this.props.loadbeers()
  }
  render() {
    const {beers} = this.props
    console.log(beers, 'valmik')
    return (
      <div style={{color: 'white'}}>
        <BeerHeader />
        <BeerList beers={beers} />
      </div>
    )
  }
}

const mapStateToProps = ({beers}) => {
  return {beers}
}
const mapDispatchToProps = dispatch => {
  return {
    loadbeers() {
      dispatch(getBeers())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Beer)
